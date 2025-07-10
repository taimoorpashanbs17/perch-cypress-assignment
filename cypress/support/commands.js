Cypress.Commands.add('clickElement', (locator) => {
  cy.get(locator).click();
});

Cypress.Commands.add('typeText', (locator, text) => {
  cy.get(locator).clear().type(text);
});

Cypress.Commands.add('shouldBeVisible', (locator) => {
  cy.get(locator).should('be.visible');
});

Cypress.Commands.add('getElementText', (locator) => {
  return cy.get(locator).invoke('text');
});

Cypress.Commands.add('getAllElementTexts', (locator) => {
  return cy.get(locator).then(($elements) => {
    const texts = [...$elements].map((el) => el.innerText.trim());
    return cy.wrap(texts);
  });
});

Cypress.Commands.add('getElementCount', (locator) => {
  return cy.get(locator).then(($elements) => {
    const count = $elements.length;
    cy.log(`Element count: ${count}`);
    return cy.wrap(count);
  });
});

Cypress.Commands.add('verifyUrlContains', (expectedValue) => {
  cy.url().should('include', expectedValue);
});

Cypress.Commands.add('shouldDisplayTextIn', (selector, expectedText) => {
  cy.get(selector).should('contain.text', expectedText).and('be.visible');
});

Cypress.Commands.add('shouldBeEnabled', (selector) => {
  cy.get(selector).should('be.enabled');
});

Cypress.Commands.add('shouldNotBeDisplaying', (selector) => {
  cy.get(selector).should('not.exist');;
});

Cypress.Commands.add('getAttributeValue', (selector, attribute) => {
  return cy.get(selector).invoke('attr', attribute);
});

Cypress.Commands.add('selectRandomDropdownValue', (selector, envKey) => {
  cy.get(selector).find('option').then($options => {
    const optionTexts = [...$options].map(o => o.innerText.trim());
    const validOptions = optionTexts.filter(text => text && text.toLowerCase() !== 'select');
    const randomOption = validOptions[Math.floor(Math.random() * validOptions.length)];
    cy.get(selector).select(randomOption);
    if (envKey) {
      Cypress.env(envKey, randomOption);
    }
    cy.log(`Selected random value from dropdown [${selector}]: ${randomOption}`);
  });
});

Cypress.Commands.add('getSelectedDropdownValue', (selector, by = 'value') => {
  if (by === 'text') {
    return cy.get(selector).find('option:selected').then(($el) => {
      const text = $el.text().trim();
      return cy.wrap(text);
    });
  } else {
    return cy.get(selector).invoke('val');
  }
});







