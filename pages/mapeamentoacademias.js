var filtroAvancado = {
    selectAula: function () {
        return this
        .click('@selectAula',)
        .click('li[class="select2-results__option select2-results__option--highlighted option:nth-child(2)"]')
    },
    selectEndereco: function (endereco) {
        return this
        .setValue('@selectEndereco', endereco)
    },
    selectCidade: function (cidade) {
        return this
        .setValue('@selectCidade', cidade)
    }
}

module.exports = {
    commands: [filtroAvancado],
    elements: {
       selectAula: 'span[class="select2-selection select2-selection--single"]',
       selectEndereco: 'span[id="select2-endereco-container"]',
       selectCidade: 'span[id="select2-cidade_estado-container"]' 
    }
}