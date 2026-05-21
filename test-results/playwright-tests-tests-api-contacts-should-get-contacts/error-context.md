# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: playwright-tests/tests/api/contacts.spec.js >> should get contacts
- Location: playwright-tests/tests/api/contacts.spec.js:10:1

# Error details

```
TypeError: apiRequestContext.get: Invalid URL
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | const { testUser } = require('../../data/users');
  3  | const { loggedInUserApiContext } = require('../../utilities/apiUtilities');
  4  | 
  5  | test.beforeAll(async ({ playwright, request }) => {
  6  |   console.log("Before TEST");
  7  |   await loggedInUserApiContext(playwright, request, testUser);
  8  | });
  9  | 
  10 | test('should get contacts', async ({ request }) => {
> 11 |   const contactsResponse = await request.get('/transactions/contacts', 
     |                                          ^ TypeError: apiRequestContext.get: Invalid URL
  12 |     // {headers:{
  13 |     //   "Cookie" : "connect.sid=s%3A0ffVI5p_aLEc_Ol1NpKBA9qh04IoRXWq.VwMR4nu9Q5kNlLOq2appK7X5npi4gB2h7dpqLAlIHYw"
  14 |     // }}
  15 |   );
  16 |   let data = await contactsResponse.json();
  17 |   expect(contactsResponse.ok()).toBeTruthy();
  18 |   expect(data.results).toBeDefined();
  19 | });
  20 | 
```