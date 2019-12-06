const { client } = require('nightwatch-api')
const { When, Then } = require('cucumber')

When('I click on my Gyms', function () {
  let menuacademia = client.page.menuacademias()
  return menuacademia.menuAcademias()
  });

  Then('I see the button named {string}', function (message) {
    let menuacademia = client.page.menuacademias()
    return menuacademia.linkMessage(message)
  });