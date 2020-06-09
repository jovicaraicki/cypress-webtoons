{/* <refererence types="cypress" /> */}

describe('yummis cells', () => {

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

    it('should open search bar', () => {
        cy.get('div[class=header_inner] > div.sta > a.btn_search')
          .should('have.attr', 'href', '#')
          .should('contain', 'Search')
          .click()
    })

    it('should type search term', () => {
        cy.get('.search_area > span.input_box > input.input_search')
          .should('be.visible')
          .type('yumi\'s cells')
    })

    it('should start search', () => {
        cy.get('.search_area > span.input_box > input.input_search')
          .type('{enter}')
    })

    it('should show search results', () => {
        cy.get('ul.card_lst > li > a')
          .should('have.attr', 'href', '/episodeList?titleNo=478')
    })

    it('should have image', () => {
        cy.get('ul.card_lst > li > a')
          .find('img')
          .should('be.visible')
          .should('have.attr', 'src')
          .should('include', '1553553521592eU1gw_JPEG/10_EC8DB8EB84A4EC9DBC_ipad.jpg')
    })

    it('should have title', () => {
        cy.get('ul.card_lst > li > a > div.info')
          .find('p.subj')
          .should('contain', 'Yumi\'s Cells')
    })

    it('should click on the link', () => {
        cy.get('ul.card_lst > li > a > div.info').click()
        cy.url().should('contain', 'slice-of-life/yumi-cell/list?title_no=478')
    })

    it('should click on First episode button', () => {
        cy.get('div#_asideDetail > div.aside_btn > a#_btnEpisode')
          .should('have.attr', 'href', 'https://www.webtoons.com/en/slice-of-life/yumi-cell/ep-0-prologue/viewer?title_no=478&episode_no=1')
          .should('contain', 'First episode')
          .click()
    })

    it('should open first episode', () => {
        cy.url().should('eq', 'https://www.webtoons.com/en/slice-of-life/yumi-cell/ep-0-prologue/viewer?title_no=478&episode_no=1')
        cy.title().should('eq', 'Ep. 0 - Prologue | Yumi\'s Cells')

        cy.get('#toolbar > .info > p.logo > a')
          .should('have.attr', 'href', 'https://www.webtoons.com/en/')
          .should('contain', 'WEBTOON')

        cy.get('#toolbar > .info > div.subj_info > a')
          .should('have.attr', 'href', 'https://www.webtoons.com/en/slice-of-life/yumi-cell/list?title_no=478')
          .should('have.attr', 'title', 'Yumi\'s Cells')
          .should('contain', 'Yumi\'s Cells')

        cy.get('#toolbar > .info > div.subj_info > span')
          .should('have.attr', 'class', 'ico_arr2')
          .should('be.visible')

        cy.get('#toolbar > .info > div.subj_info > h1.subj_episode')
          .should('have.attr', 'title', 'Ep. 0 - Prologue')
          .should('contain', 'Ep. 0 - Prologue')

        cy.get('.paginate > span')
          .find('em')
          .should('contain', 'Previous Episode')

        cy.get('div#toolbar > .paginate > span.tx')
          .should('contain', '#1')

        cy.get('div#toolbar > .paginate > a.pg_next')
        .should('have.attr', 'href', 'https://www.webtoons.com/en/slice-of-life/yumi-cell/ep-1-expression/viewer?title_no=478&episode_no=2')
        .should('have.attr', 'title', 'Next Episode')
          .find('em')
          .should('contain', 'Next Episode')
          .click()
    })

    it('should show second episode ', () => {
        cy.url().should('eq', 'https://www.webtoons.com/en/slice-of-life/yumi-cell/ep-1-expression/viewer?title_no=478&episode_no=2')
        cy.title().should('eq', 'Ep. 1 - Expression | Yumi\'s Cells')

        cy.get('#toolbar > .info > p.logo > a')
          .should('have.attr', 'href', 'https://www.webtoons.com/en/')
          .should('contain', 'WEBTOON')

        cy.get('#toolbar > .info > div.subj_info > a')
          .should('have.attr', 'href', 'https://www.webtoons.com/en/slice-of-life/yumi-cell/list?title_no=478')
          .should('have.attr', 'title', 'Yumi\'s Cells')
          .should('contain', 'Yumi\'s Cells')

        cy.get('#toolbar > .info > div.subj_info > span')
          .should('have.attr', 'class', 'ico_arr2')
          .should('be.visible')

        cy.get('#toolbar > .info > div.subj_info > h1.subj_episode')
          .should('have.attr', 'title', 'Ep. 1 - Expression')
          .should('contain', 'Ep. 1 - Expression')

        cy.get('div#toolbar > .paginate > a.pg_prev')
          .should('have.attr', 'href', 'https://www.webtoons.com/en/slice-of-life/yumi-cell/ep-0-prologue/viewer?title_no=478&episode_no=1')
          .should('have.attr', 'title', 'Previous Episode')
          .find('em')
          .should('contain', 'Previous Episode')

        cy.get('div#toolbar > .paginate > span.tx')
          .should('contain', '#2')

        cy.get('div#toolbar > .paginate > a.pg_next')
          .should('have.attr', 'href', 'https://www.webtoons.com/en/slice-of-life/yumi-cell/ep-2-loneliness/viewer?title_no=478&episode_no=3')
          .should('have.attr', 'title', 'Next Episode')
          .find('em')
          .should('contain', 'Next Episode')
    })

})