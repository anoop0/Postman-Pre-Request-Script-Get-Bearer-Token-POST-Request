# Postman-Pre-Request-Script-Get-Bearer-Token-POST-Request
How to make POST request / Get Bearer Token using OAuth2.0 using Pre-Request Script in Postman

There are lots of usecases where we need to get Bearer token before making any request from Postman. To simplfy the process of getting bearer token from another request and then copy the token into differnt request, we can use Pre-request scripts.

The given script can be used to for any POST request or RESTful call in general. 
Script sets the access token in global varaiable to used in header.
In above script: Authorization:bearer {{currentAccessToken}}


![image](https://user-images.githubusercontent.com/3315158/126467017-1fd17dd1-05dc-42e6-897b-51c21e21fb47.png)

![image](https://user-images.githubusercontent.com/3315158/126467117-d67f14f5-1eb3-4af1-b11b-a320dcd3974a.png)



### Footnote: 
I refered following blog and optimzed the code for token expiry checking and Azure OAuth 2.0
Credit: https://liftcodeplay.com/2018/03/18/how-to-automatically-set-a-bearer-token-for-your-postman-requests/

