var mapping = {
    selectAula: function () {
        return this
        .pause(1000)
        .click('@selectAula',)
        .waitForElementVisible('li[class="select2-results__option select2-results__option--highlighted"]')
        .click('li[class="select2-results__option select2-results__option--highlighted option:nth-child(2)"]')
    },
    selectEndereco: function (endereco) {
        return this
        .pause(1000)
        .setValue('@selectEndereco', endereco)
    },
    selectCidade: function (cidade) {
        return this
        .pause(1000)
        .setValue('@selectCidade', cidade)
    }
}

module.exports = {
    commands: [mapping],
    elements: {
       selectAula: 'span[class="select2-selection select2-selection--single"]',
       selectEndereco: 'span[id="select2-endereco-container"]',
       selectCidade: 'span[id="select2-cidade_estado-container"]' 
    }
}