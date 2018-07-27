const API_AI_TOKEN = '18780e40c136409c868e8e7429af7e70';
const apiAiClient = require('apiai')(API_AI_TOKEN);
const FACEBOOK_ACCESS_TOKEN = 'EAADKHHo7lCIBALCbFRhe7komR3pGqJ4x16TJmzvmGfInFgL8de52wbe5N5k3L8TvjKmsirVq7JTZAZA5PL9tX4HhEihyZA5tcaYHZBAZBCoyiSFZCqvOlPhBeqOlVFSXPAgw4hoLuJOF8WbshcidZCWsIRLRrji51IsnEpr3Q6BJwZDZD';
const request = require('request');
const sendTextMessage = (senderId, text) => {
 request({
 url: 'https://graph.facebook.com/v2.6/me/messages',
 qs: { access_token: FACEBOOK_ACCESS_TOKEN },
 method: 'POST',
 json: {
 recipient: { id: senderId },
 message: { text },
 }
 });
};
module.exports = (event) => {
 const senderId = event.sender.id;
 const message = event.message.text;
const apiaiSession = apiAiClient.textRequest(message, {sessionId: 'crowdbotics_bot'});
apiaiSession.on('response', (response) => {
 const result = response.result.fulfillment.speech;
sendTextMessage(senderId, result);
 });
apiaiSession.on('error', error => console.log(error));
 apiaiSession.end();
};
