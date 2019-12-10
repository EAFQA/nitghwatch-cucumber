

const { client } = require('nightwatch-api')
const { Given, When, Then } = require('cucumber')

Given('I\'m at home Gympass', function () {
  let email = client.page.login()
  return email.with()
});

When('I click the enter button', function () {
  let email = client.page.login()
  return email.button()
});


Then('I can fill in the Email', function () {
  let email = client.page.login()
  return email.emailsettings('abcdefg')
});

Then('see the alert that was not found the email', function () {
  let email = client.page.login()
  return email.alerts('Não localizamos você')
});