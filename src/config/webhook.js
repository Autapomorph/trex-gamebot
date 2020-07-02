const { BOT_TOKEN, WEBHOOK_DOMAIN, WEBHOOK_PORT } = process.env;

const WEBHOOK_OPTIONS = {
  domain: WEBHOOK_DOMAIN,
  hookPath: `/${BOT_TOKEN}`,
  port: WEBHOOK_PORT || 2500,
};

module.exports = WEBHOOK_OPTIONS;
