const knex = require( 'knex' )
const rootKnex = require( '../rootKnexFunctions' )

const create = attributes =>
  rootKnex.createRecord( 'organizations', attributes )
