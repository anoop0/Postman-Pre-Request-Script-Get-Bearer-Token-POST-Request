# Postman-Pre-Request-Script-Get-Bearer-Token-POST-Request
How to make POST request / Get Bearer Token using OAuth2.0 using Pre-Request Script in Postman

## Manytimes we need to get Bearer token before manking any request in Postman. We automate this process of getting bearer token by adding Pre-request Script to get Bearer token.

The given script can be used to for any POST request or RESTful call in general. 
Script sets the access token in global varaiable to used in header.
In above script: Authorization:bearer {{currentAccessToken}}


