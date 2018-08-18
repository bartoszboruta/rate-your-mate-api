import Joi from 'joi'

export default {
  create: {
    body: {
      userId: Joi.required(),
      placeId: Joi.required(),
    },
  },
  show: {
    params: {
      id: Joi.required(),
    },
  },
  invite: {
    body: {
      userId: Joi.required(),
    },
    params: {
      id: Joi.required(),
    },
  },
}
