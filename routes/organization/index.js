const express = require( 'express' )
const router = express.Router()
const passport = require( '../../configuration/passport' )
const organization = require( '../../database/commands/organization' )

router.post( '/signup', ( request, response ) => {
  const newOrganization = {
    user_id: request.user.id,
    name: request.body.name,
    logo_url: request.body.logo_url,
    website: request.body.website,
  }
  organization.create( newOrganization )
  .then( results => {
    response.json(results[0])
  })
  .catch( error => {
    response.render( 'Error signing up organization: ', { error } )
  })
})
