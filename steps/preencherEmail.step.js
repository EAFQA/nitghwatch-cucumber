

const {client} = require('nightwatch-api')
const {Given, When, Then} = require('cucumber')

 Given('estou na home Gympass', function () {
    let email = client.page.preencherEmail()
    return email.with()
  });

  When('clico no botão entrar', function () {
    let email = client.page.preencherEmail()
    return email.button()
  });

Then('consigo preencher o Email', function () {                       
    let email = client.page.preencherEmail()
    return email.emailsettings('abcdefg')
  });                                                                   

  Then('ver o alerta que não foi localizado o email', function () { 
        let email = client.page.preencherEmail()
        return email.alerts('Não localizamos você')                                                 
  });                                                                         