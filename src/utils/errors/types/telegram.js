const ERROR_TYPES = {
  // Too Many Requests: retry after *
  TOO_MANY_REQUESTS: /too.*many.*requests/i,
  // Bad Request: user not found
  USER_NOT_FOUND: /user.*not.*found/i,
  // Bad Request: chat not found
  CHAT_NOT_FOUND: /chat.*not.*found/i,
  // Bad Request: message is not modified
  MESSAGE_NOT_MODIFIED: /message.*not.*modified/i,
  // Bad Request: invalid file id
  FILE_ID_INVALID: /invalid.*file.*id/i,
  // Bad Request: STICKERSET_INVALID
  STICKERSET_INVALID: /stickerset.*invalid/i,
  // Bad Request: invalid sticker set name is specified
  STICKERSET_INVALID_NAME: /invalid.*sticker.*set.*name/i,
  // Bad Request: sticker set name is already occupied
  STICKERSET_NAME_OCCUPIED: /sticker.*set.*name.*occupied/i,
  // Internal Server Error: created sticker set not found
  CREATED_STICKERSET_NOT_FOUND: /created.*sticker.*set.*not.*found/i,
  // Bad Request: STICKERS_TOO_MUCH or Bad Request: STICKERPACK_STICKERS_TOO_MUCH
  STICKERS_TOO_MUCH: /stickers.*too.*much/i,
  // Bad Request: invalid sticker emojis
  STICKER_INVALID_EMOJIS: /invalid.*sticker.*emoji/i,
  // Forbidden: bot was blocked by the user
  BLOCKED_BY_USER: /forbidden.*bot.*block.*user/i,
  // Forbidden: bot was kicked from the group chat
  KICKED_FROM_GROUP: /forbidden.*bot.*kick.*group/i,
  // Forbidden: bot was kicked from the supergroup chat
  KICKED_FROM_SUPERGROUP: /forbidden.*bot.*kick.*supergroup/i,
  // Forbidden: bot was kicked from the channel chat
  KICKED_FROM_CHANNEL: /forbidden.*bot.*kick.*channel/i,
  // Forbidden: user is deactivated
  USER_DEACTIVATED: /forbidden.*user.*deactivated/i,
  // Forbidden: bot can't initiate conversation with a user
  CANNOT_INITIATE_CONVERSATION_WITH_USER: /initiate.*conversation,*with.*user/i,
  // Bad Request: group chat was deactivated
  GROUP_DEACTIVATED: /group.*deactivated/i,
  // Forbidden: bot is not a member of the group chat
  NOT_GROUP_MEMBER: /forbidden.*bot.*not.*member.*group/i,
  // Forbidden: bot is not a member of the supergroup chat
  NOT_SUPERGROUP_MEMBER: /forbidden.*bot.*not.*member.*supergroup/i,
  // Forbidden: bot is not a member of the channel chat
  NOT_CHANNEL_MEMBER: /forbidden.*bot.*not.*member.*channel/i,
};

module.exports = ERROR_TYPES;
