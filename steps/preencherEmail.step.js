

const {client} = require('nightwatch-api')
const {Given, When, Then} = require('cucumber')

  Given('I\'m at home Gympass', function () {
    let email = client.page.preencherEmail()
    return email.with()
  });

  When('I click the enter button', function () {
    let email = client.page.preencherEmail()
    return email.button()
  });

  Then('I can fill in the Email', function () {
    let email = client.page.preencherEmail()
    return email.emailsettings('abcdefg')
  });

  Then('see the alert that was not found the email', function () {
    let email = client.page.preencherEmail()
    return email.alerts('Não localizamos você') 
  });