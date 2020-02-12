# Postman-Pre-Request-Script-Get-Bearer-Token-POST-Request
How to make POST request / Get Bearer Token using OAuth2.0 using Pre-Request Script in Postman

## Manytimes we need to get Bearer token before manking any request in Postman. We automate this process of getting bearer token by adding Pre-request Script to get Bearer token.

The given script can be used to for any POST request or RESTful call in general. 
Script sets the access token in global varaiable to used in header.
In above script: Authorization:bearer {{currentAccessToken}}

Footnote: 
I refered following blog and optimzed the code for expiry checking and used the sciprt for Azure OAuth 2.0
Credit: https://liftcodeplay.com/2018/03/18/how-to-automatically-set-a-bearer-token-for-your-postman-requests/

