describe("ab/dioflames", () =>{
    const messages = {
        name: "Manu",
        email: "emmanuelthedeveloper@gmail.com",
        message: "I am looking for a react tutor"
    };
    before(() => {
        // fixtures
        cy.fixture('api/home').as('homeJSON')
        cy.fixture('api/subscribe/').as('addSubscribe')
        cy.fixture('api/')
        cy.exec("npm run dev")
        cy.exec("npm run flush")
    });
    it("should be able to fill a web form", () => {
        cy.visit("/")
        cy
           .get('input[name="name"]')
           .type(messages.name)
           .should("have.value",messages.name)
        cy
           .get('input[name="email"]')
           .type(messages.email)
           .should("have.value",messages.email)
        cy
           .get('textarea[name="message"]')
           .type(messages.message)
           .should("have.value",messages.message)
        cy.get("form").submit()
    })
})