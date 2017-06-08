const express = require( 'express' )
const router = express.Router()
const passport = require( '../../configuration/passport' )
const User = require( '../../database/user' )

router.post( '/organization-signup', ( request, response ) => {
  const newOrganization = {
    user_id: request.user.id,
    name: request.body.name,
    logo_url: request.body.logo_url,
    website: request.body.website,
  }



  //.then(function that adds this data to the database)
  //.then(respond with json and with 201 )
  //.catch( error )

})
