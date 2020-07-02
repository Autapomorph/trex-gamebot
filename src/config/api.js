const { API_PORT, ALLOW_ORIGIN, JWT_SECRET } = process.env;

const CORS_OPTIONS = {
  methods: ['GET', 'POST'],
  allowedHeaders: ['Authorization', 'Content-Type'],
  origin: ALLOW_ORIGIN
    ? ALLOW_ORIGIN.split(',')
        .filter(Boolean)
        .map(origin => new RegExp(origin))
    : '*',
};

module.exports = {
  CORS_OPTIONS,
  PORT: API_PORT || 5000,
  JWT_SECRET,
};
