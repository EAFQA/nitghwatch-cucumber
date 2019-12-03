var trabalheConosco = {
    menuButtonTC: function () {
        return this
        .click('@btnTrabalheConosco')
    },
    linkMessage: function (message) {
        return this
        .waitForElementPresent('@assertText', message)
    }
}

module.exports = {
    commands: [trabalheConosco],
    elements: {
        btnTrabalheConosco: 'a[href="https://www.gympass.com/careers"]',
        assertText: 'a[href="#pq-gympass"]'
    }
}
