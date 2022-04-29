/**
 * Product.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true,
      description: 'The display name of the product.',
      example: 'Double Chicken Burger Fill'
    },

    price: {
      type: 'number',
      required: true,
      description: 'The cost price of the product.',
      example: 12
    },

    imageUrl: {
      type: 'string',
      required: true,
      description: 'The absolute path to the display image of the product.',
      example: '/images/double-chicken-burger-fill.jpg'
    },

    numberInStock: {
      type: 'number',
      required: true,
      description: 'The cost price of the product.',
      example: 12
    },

    isDiscounted: {
      type: 'boolean',
      allowNull: true,
    },

    discountPercentage: {
      type: 'number',
      allowNull: true,
    },

    details: {
      type: 'string',
      required: true,
      description: 'Details about the product in terms of it\'s properties.',
    },

    ingredients: {
      type: 'json',
      required: true,
      description: 'Ingredients contained in the product.',
    },

    nutritionalInformation: {
      type: 'json',
      required: true,
      description: 'Nutrional facts of the product.',
    },

    diet: {
      type: 'string',
      required: true,
    },

    productCategory: {
      model: 'Category'
    },

    addedTo: {
      model: 'Cart'
    },
    
  },

};

