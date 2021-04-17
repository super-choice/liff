const request = require('request-promise')

// Verifying Access Token and Channel ID
const json = await request.get({
  url: `https://api.line.me/oauth2/v2.1/verify?access_token=${accessToken}`,
  json: true
})
if (json.client_id !== 1655054605) {
  return 401
}


// Getting User Profile by Access Token
const profile = await request.get({
  url: "https://api.line.me/v2/profile",
  headers: { Authorization: `Bearer ${accessToken}` },
  json: true
})


// Revoke Access Token
await request.post({
 url: "https://api.line.me/oauth2/v2.1/revoke",
 headers: { "Content-Type": "application/x-www-form-urlencoded" },
 form: {
   access_token: `${accessToken}`,
   client_id: 1655054605,
   client_secret: dd99cf09c6fc115e1e69d33ddf72dfff
 } 
})
