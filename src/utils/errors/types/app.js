const ERROR_TYPES = {
  REPLY: 'shared.reply.error.telegram',
  ANSWER: 'shared.answer.error.telegram',
  RATELIMIT: 'shared.reply.error.ratelimit',
  UNKNOWN: 'shared.reply.error.unknown',
  PACKS: {
    ACCESS_DENIED: 'operaion.pack.shared.reply.error.access_denied',
    CREATE: {
      TITLE_TOO_LONG: 'scene.pack_create.reply.error.title_long',
      NAME_TOO_LONG: 'scene.pack_create.reply.error.name_long',
      NAME_INVALID: 'scene.pack_create.reply.error.name_invalid',
      NAME_OCCUPIED: 'scene.pack_create.reply.error.name_occupied',
    },
    COPY: {
      PACK_NOT_FOUND: 'operation.pack.copy.reply.error.pack_not_found',
      UNKNOWN: 'operation.pack.copy.reply.error.unknown',
    },
  },
  STICKERS: {
    ADD: {
      PACK_INVALID: 'operation.sticker.add.reply.error.pack_invalid',
      NO_SUITABLE_PACKS: 'operation.sticker.add.reply.error.no_suitable_packs',
      INVALID_FILE_TYPE: 'operation.sticker.add.reply.error.invalid_file_type',
      STICKERS_TOO_MUCH: 'operation.sticker.add.reply.error.stickers_too_much',
      INVALID_EMOJIS: 'operation.sticker.add.reply.error.invalid_emojis',
    },
    ORIGINAL: {
      STICKER_NOT_FOUND: 'scene.sticker_original.reply.error.sticker_not_found',
    },
  },
};

module.exports = ERROR_TYPES;
