describe('My first cypress test', ()=> {

    it('Navigate to my site', () =>{
        cy.visit('https://www.facebook.com')
    });

    it('Input username and password', () =>{
        cy.get('#u_0_l').type("hello")
        cy.get('#u_0_n').type("tran")
    });

    it('Input phone number or gmail', () =>{
        cy.get('#u_0_q').type("hieutran@gmail.com")
        cy.get('#u_0_t').type("hieutran@gmail.com")
    });

    it('Input phone number or gmail', () =>{
        cy.get('#u_0_x').type("123456")
    });

    it('select day', () =>{
        cy.get('#day').select("5")
    });

    it('select month', () =>{
        cy.get('#month').select("8")
    });
    
    it('select year', () =>{
        cy.get('#year').select("2010")
    });

    it('radio man', () =>{
        cy.get('#u_0_6').check().should('be.checked')
    });
    
    

});