/**
 * Order.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    deliveryAddress: {
      type: 'string',
      required: true,
    },

    deliveryTime: {
      type: 'string',
      required: true,
    },

    cart: {
      model: 'Cart'
    },

    owner: {
      model: 'User'
    },
  },

};

