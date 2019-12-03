const {client} = require('nightwatch-api')
const {When, Then} = require('cucumber')

When('I click Work with us', function () {
    let menubutton = client.page.trabalheConosco()
    return menubutton.menuButtonTC();
  });

  Then('I should see the message {string}', function (trabalhe) {
    let message = client.page.trabalheConosco()
    return message.linkMessage(trabalhe);
  });