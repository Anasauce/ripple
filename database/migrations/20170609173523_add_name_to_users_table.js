
exports.up = knex =>
  knex.schema.table( 'users', table => {
    table.string( 'name' ).notNullable()
  })


exports.down = knex =>
   knex.schema.table( 'users', table => {
    table.dropColumn( 'name' )
  })
