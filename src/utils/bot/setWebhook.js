require('dotenv').config();

const telegram = require('../../telegram');
const { domain, hookPath } = require('../../config/webhook');

telegram.setWebhook(`${domain}${hookPath}`);
