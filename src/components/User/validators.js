import Joi from 'joi'

export default {
  create: {
    body: {
      email: Joi.string().email({ minDomainAtoms: 2 }),
      name: Joi.string().required(),
      password: Joi.string().min(6),
    },
  },
  delete: {
    params: {
      id: Joi.string().required(),
    },
  },
  update: {
    body: {
      email: Joi.string().email({ minDomainAtoms: 2 }),
      name: Joi.string().required(),
      password: Joi.string().min(6),
    },
  },
  show: {
    params: {
      id: Joi.string().required(),
    },
  },
}
