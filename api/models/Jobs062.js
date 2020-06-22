/**
 * Jobs062.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //id: { type: 'string', columnName: 'jobName062' },
    
    jobName062 : {
      type: 'string',
      required : true
    },
      partId062 : {
        type : 'number',
        required : true
      },
      qty062 : {
        type : 'number'
      }
  },
primaryKey : 'jobName062',
tableName : 'jobs062',


  // datastore: 'default'

};

