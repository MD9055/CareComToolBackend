

const telnyx = require('telnyx')(process.env.APIKEY);

const config = require("../config/config").get(
  process.env.NODE_ENV || "local"
);
const { TElNYX } = config;


// Define a function to send SMS messages
function sendSms(toPhoneNumber, messageBody) {
  return telnyx.messages.create({
    'from': TElNYX?.FROM_NUMBER, // Your Telnyx number
    'to': toPhoneNumber,
    'text': messageBody
  })
  .then(response => {
    // Message sent successfully
    // console.log('Message sent successfully:', response);
    return response;
  })
  .catch(error => {
    // Error occurred while sending the message
    console.error('Error sending message:', error);
    throw error; // Re-throw the error for further handling if needed
  });
}

// Export the sendSms function
module.exports = { sendSms };
