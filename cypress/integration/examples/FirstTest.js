///<reference types="cypress"/>
describe('MyFirstSuite', () => 
{
    it('verify title of page', () => 
    {
      
        cy.visit("https://dashboard.epaisa.dev/#/auth/login")
        cy.title().should('eq','ePaisa SOE Pvt Ltd Dashboard | Login')
        cy.get(':nth-child(1) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input').type('akhilesh.prabhakar@epaisa.com')
        cy.get(':nth-child(2) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input').type('mast@123')
        //cy.get([type='submit']).click()
        cy.get('.btn').click()
        cy.title().should('eq','ePaisa SOE Pvt Ltd Dashboard | Dashboard Alpha')
        cy.get(':nth-child(2) > .ant-menu-submenu-title > [title=""] > .title').click()
        cy.get('.ng-tns-c70-21 > ul.ng-star-inserted > :nth-child(1) > [style="padding-left: 25px;"] > .title').click()
        
        //cy.title().should('eq','ePaisa SOE Pvt Ltd Dashboard | Masters - Devices')

        //cy.get('.navigation > :nth-child(9)').click();
        //cy.get(':nth-child(2) > :nth-child(1) > .d-flex > :nth-child(2)').click();
        // cy.get('.ant-input').type('1111111')
        // cy.get(':nth-child(2) > .py-2 > .btn > .ng-star-inserted').click()
        // cy.get('.ant-menu-submenu-open > .ant-menu-submenu-title > [title=""] > .title').click()


        // cy.get('.navigation > :nth-child(6)').click()
        // cy.get(':nth-child(4) > .py-2 > .ant-select > .ant-select-selector > .ant-select-selection-search > .ant-select-selection-search-input').click()
        // cy.get('[title="APPROVED"] > .ant-select-item-option-content').click()
        // cy.get('.btn > .ng-star-inserted').click()
        // cy.get('[title="VOIDED"] > .ant-select-item-option-content').click()
        // cy.get('.btn > .ng-star-inserted').click()

   
    })
  })