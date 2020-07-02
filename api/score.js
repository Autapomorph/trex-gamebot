require('dotenv').config();
const express = require('express');
const cors = require('cors');
const createError = require('http-errors');
const jwt = require('express-jwt');
const morgan = require('morgan');

const telegram = require('../src/telegram');
const { PORT, CORS_OPTIONS, JWT_SECRET } = require('../src/config/api');
const errorBoundary = require('../src/utils/api/errorBoundary');
const logger = require('../src/utils/logger');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors(CORS_OPTIONS));

app.use('/score', jwt({ secret: JWT_SECRET, algorithms: ['HS256'], requestProperty: 'scoreData' }));
app.get(
  '/score',
  errorBoundary(async (req, res) => {
    const { userId, chatId, messageId, inlineMessageId } = req.scoreData;
    const highScores = await telegram.getGameHighScores(userId, inlineMessageId, chatId, messageId);
    const userScore = highScores.find(score => score.user.id === userId);
    return res.status(200).json({
      userScore,
      highScores,
    });
  }),
);
app.post(
  '/score',
  errorBoundary(async (req, res) => {
    const { score } = req.body;
    const { userId, chatId, messageId, inlineMessageId } = req.scoreData;
    await telegram.setGameScore(userId, score, inlineMessageId, chatId, messageId);
    return res.status(200).json({ score });
  }),
);

app.use((req, res, next) => {
  next(createError.NotFound());
});

// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
  const status = error.status || 500;
  const { message } = error;
  const errorObj = {
    ok: false,
    status,
    message,
  };

  // Unauthorized
  if (error.name === 'UnauthorizedError') {
    errorObj.message = 'Invalid token';
  }

  return res.status(status).json(errorObj);
});

app.listen(PORT, () => logger.info(`Listening at http://localhost:${PORT}`));
