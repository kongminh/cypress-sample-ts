import { ArticlePage } from '../../pages/ArticlePage';

describe('Favorite article using intercept mock', () => {
  const article = new ArticlePage();

  beforeEach(() => {
    cy.loginByApi();
  });

  it('should intercept and stub favorite API', () => {
    cy.intercept('POST', '**/articles/*/favorite', {
      statusCode: 200,
      body: {
        article: {
          favorited: true,
          favoritesCount: 1
        }
      }
    }).as('favRequest');

    article.visit('test-article-slug'); // Replace this with real slug in real test
    article.favorite();

    cy.wait('@favRequest');
    cy.get('.btn.btn-primary').should('exist');
  });
});
