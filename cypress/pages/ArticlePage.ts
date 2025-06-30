export class ArticlePage {
  visit(slug: string) {
    cy.visit(`https://demo.realworld.io/#/article/${slug}`);
  }

  favorite() {
    cy.get('.btn.btn-sm.btn-outline-primary').click();
  }

  unfavorite() {
    cy.get('.btn.btn-sm.btn-primary').click();
  }
}
