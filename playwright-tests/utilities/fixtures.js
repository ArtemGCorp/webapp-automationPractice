const { test: base, request } = require('@playwright/test');
const { testUser } = require('../data/users');
const { getSessionId } = require('../utilities/apiUtilities');

exports.test = base.extend({
  authRequest: async ({ playwright }, use) => {
    const loginContext = await playwright.request.newContext();
    const sessionId = await getSessionId(loginContext, testUser);
    await loginContext.dispose();

    const authenticatedContext = await playwright.request.newContext({
      baseURL: 'http://localhost:3001',
      extraHTTPHeaders: {
        'Cookie': sessionId,
      },
    });
    
    await use(authenticatedContext);

    await authenticatedContext.dispose();
  },
});

exports.expect = base.expect;