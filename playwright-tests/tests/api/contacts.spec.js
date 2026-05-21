const { test, expect } = require('../../utilities/fixtures.js');


test('should get contacts', async ({ authRequest }) => {
  const contactsResponse = await authRequest.get('/transactions/contacts');
  let data = await contactsResponse.json();
  expect(contactsResponse.ok()).toBeTruthy();
  expect(data.results).toBeDefined();
});
