const winston = require('winston');
const SentryTransport = require('winston-transport-sentry-node').default;

const { isProd, name, version } = require('./index');

const { npm_package_name: npmPackageName, npm_package_version: npmPackageVersion } = process.env;

const { format } = winston;
const { combine, errors, align, colorize, timestamp, splat, printf } = format;

const formatErrorConsole = format(info => {
  const { message, stack, description } = info;
  return {
    ...info,
    // eslint-disable-next-line no-nested-ternary
    message: stack ? (description ? `${description}\n${stack}` : stack) : message,
  };
});

const formatErrorSentry = format(info => {
  const { message, stack, description, sentry } = info;

  if (sentry === false) {
    return false;
  }

  return {
    ...info,
    message: stack && description ? `${description}\n${message}` : message,
  };
});

const logger = winston.createLogger({
  format: errors({ stack: true }),
  transports: [
    new winston.transports.Console({
      level: isProd ? 'info' : 'debug',
      format: combine(
        formatErrorConsole(),
        timestamp({ format: 'DD/MM/YYYY HH:mm:ss ZZ' }),
        align(),
        colorize(),
        splat(),
        printf(({ timestamp: time, level, message }) => {
          return `[${time}] [${level}] ${message}`;
        }),
      ),
    }),
    new SentryTransport({
      level: 'error',
      silent: !isProd,
      sentry: {
        dsn: process.env.SENTRY_DSN,
        release: `${npmPackageName || name}@${npmPackageVersion || version}`,
        normalizeDepth: 10,
        beforeBreadcrumb: breadcrumb =>
          breadcrumb.category === 'http' || breadcrumb.type === 'http' ? null : breadcrumb,
      },
      format: formatErrorSentry(),
    }),
  ],
});

module.exports = logger;
