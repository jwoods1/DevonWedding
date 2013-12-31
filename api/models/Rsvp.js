/**
 * Rsvp
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
  	
    firstName: {
      type: 'string',
      required: true
    },

    lastName: {
      type: 'string',
      required: true
    },

    guestNum: {
      type: 'int',
      required: true
    },

    email: {
      type: 'string',
      email: true,
      required: true,
      unique: true
    }

  	/* e.g.
  	nickname: 'string'
  	*/
    
  }

};
