Feature: Gym Menu

    Scenario: Click on the Gyms menu

        When I click on my Gyms
        Then I see the button named "Filtro Avançado"
        And click Aulas
        And click Bairro
        And click Cidades