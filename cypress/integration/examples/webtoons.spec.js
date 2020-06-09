{/* <refererence types="cypress" /> */}

describe('webtoons.com', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
    
    it('should load a site', () => {
        cy.visit('https://www.webtoons.com/')
        cy.url().should('eq', 'https://www.webtoons.com/en/')
        cy.title().should('eq', 'WEBTOON - The official home for all things WEBTOON')
    })

    it('should display a logo image', () => {
        cy.get('div[class=header_inner] > h1.logo > a')
        .should('have.attr', 'href', 'https://www.webtoons.com/en/')
        .should('contain', 'WEBTOON')
    })

    it('Originals', () => {
        cy.get('div[class=header_inner] > ul.lnb > li.m01 > a')
          .should('have.attr', 'href', 'https://www.webtoons.com/en/dailySchedule')
          .should('contain', 'Originals')
          .click()

        cy.url().should('eq', 'https://www.webtoons.com/en/dailySchedule')
        cy.title().should('eq', 'WEBTOON - The official home for all things WEBTOON')
    })

    it('Genres', () => {
        cy.get('div[class=header_inner] > ul.lnb > li.m02 > a')
          .should('have.attr', 'href', 'https://www.webtoons.com/en/genre')
          .should('contain', 'Genres')
          .click()

        cy.url().should('eq', 'https://www.webtoons.com/en/genre')
        cy.title().should('eq', 'DRAMA, FANTASY, COMEDY, ACTION, SLICE OF LIFE, ROMANCE, SUPERHERO, SCI-FI, THRILLER, SUPERNATURAL, MYSTERY, SPORTS, HISTORICAL, HEARTWARMING, HORROR, INFORMATIVE | WEBTOON')
    })

    it('Popular', () => {
        cy.get('div[class=header_inner] > ul.lnb > li.m03 > a')
          .should('have.attr', 'href', 'https://www.webtoons.com/en/top')
          .should('contain', 'Popular')
          .click()

        cy.url().should('eq', 'https://www.webtoons.com/en/top')
        cy.title().should('eq', 'Popular | WEBTOON')
    })

    it('Canvas', () => {
        cy.get('div[class=header_inner] > ul.lnb > li.m04 > a')
          .should('have.attr', 'href', 'https://www.webtoons.com/en/challenge')
          .should('contain', 'Canvas')
          .click()

        cy.url().should('eq', 'https://www.webtoons.com/en/challenge')
        cy.title().should('eq', 'WEBTOON Canvas - Free self-publishing platform | WEBTOON')
    })

    it('Short Story Contest', () => {
        cy.get('div[class=header_inner] > ul.lnb > li.m05 > a')
          .should('have.attr', 'href', 'https://www.webtoons.com/en/challenge/contest/us-contest-2020')
          .find('img')
          .should('be.visible')
          .click()

        cy.url().should('eq', 'https://www.webtoons.com/en/challenge/contest/us-contest-2020')
        cy.title().should('eq', 'SHORT STORY CONTEST')
    })

    it('Creators 101', () => {
        cy.get('div[class=header_inner] > div.sta > span.lk_creators > a')
          .should('have.attr', 'href', 'https://www.webtoons.com/en/creators101/getstarted')
          .should('contain', 'Creators 101')
          .click()

        cy.url().should('eq', 'https://www.webtoons.com/en/creators101/getstarted')
        cy.title().should('eq', 'Creators 101 :: GET STARTED')
    })

    it('Publish', () => {
        cy.get('div[class=header_inner] > div.sta > a#btnPublish')
          .should('have.attr', 'href', '#')
          .should('contain', 'Publish')
          .click()

        cy.url().should('eq', 'https://www.webtoons.com/member/login?returnUrl=https://www.webtoons.com/challenge/publish')
        cy.title().should('eq', 'Login :: WEBTOON')

        cy.go('back');
    })

    it('Log In', () => {
        cy.get('#btnLogin')
          .should('have.attr', 'href', '#')
          .should('contain', 'Log In')
          .click()
          
        cy.get('div.ly_loginbox').should('be.visible')

        cy.get('div.ly_loginbox > a.btn_clse2').should('have.attr', 'title', 'Close').click()

        cy.get('div.ly_loginbox').should('not.be.visible')
    })
    
    
})