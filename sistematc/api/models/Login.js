/**
 * Login.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection: 'MysqlServer',
  attributes: {
  	   id: {
            type: 'integer',
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: 'string'
        },
        password: {
            type: 'string'
        }
  }
};

