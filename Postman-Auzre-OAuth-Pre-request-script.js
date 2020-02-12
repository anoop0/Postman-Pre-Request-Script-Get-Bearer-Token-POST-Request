
//Use your POST endopint 

const echoPostRequest = {
  url: 'https://login.microsoftonline.com/<Tenant ID>/oauth2/token',
  method: 'POST',
  header: 'Content-Type:application/json',
  body: {
    mode: 'urlencoded',
    urlencoded:[
        	{key:'grant_type', value:'password'},
        	{key:'client_id', value:'<Secret-Client-Id>'},
        	{key:'client_secret', value:'<Do-not-tell-anyone>'},
        	{key:'username', value:'<user-login>'},
        	{key:'password', value:'<secret-password>'},
        	{key:'resource', value:'https://management.core.windows.net/'}
        ]
  }
  /* If youare sending json object in body use following
    body: {
      mode: 'application/json',
      raw: JSON.stringify(
          {
            client_id:'<your client ID>',
            client_secret:'<your client secret>',
            audience:'<my audience>',
            grant_type:'client_credentials'
          })
    }  
  */
  
};

var getToken = true;
var expireEpochTime = pm.globals.get('accessTokenExpiry');
var currentEpoch = Date.now() / 1000;

//console.log('expireEpochTime:: ' + expireEpochTime)
//console.log('currentEpoch:: ' + currentEpoch)
 
if (expireEpochTime === null || expireEpochTime <= currentEpoch ||  !pm.globals.get('currentAccessToken')) {
    console.log('Token or expiry date is missing' +  pm.globals.get('accessTokenExpiry'))
} else {
    getToken = false;
    console.log('Token is alive');
}

if (getToken === true) {
    pm.sendRequest(echoPostRequest, function (err, res) {
    console.log(err ? err : res.json());
        if (err === null) {
            console.log('Saving the token and expiry date')
            var responseJson = res.json();
            pm.globals.set('currentAccessToken', responseJson.access_token);
            pm.globals.set('accessTokenExpiry', responseJson.expires_on);
        }
    });
}

//Any variable set in script can be accessed in Param/Authorization/Header/Body
//Example Authorization:bearer {{currentAccessToken}}
// Postman documentation: https://learning.postman.com/docs/postman/variables-and-environments/variables/

