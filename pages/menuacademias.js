var academias = {
    menuAcademias: function () {
        return this
            .click('@btnAcademias')
    },
    linkMessage: function (message) {
        return this
            .waitForElementPresent('@buttonFilter', message)
            .click('@buttonFilter')
    }
}

module.exports = {
    commands: [academias],
    elements: {
        btnAcademias: 'a[href="https://www.gympass.com/negocios"]',
        assertText: 'a[href="https://www.gympass.com/negocios"]',
        buttonFilter: 'a[class="gym_search_filters_advanced_link hidden-xs"]'
    }
}