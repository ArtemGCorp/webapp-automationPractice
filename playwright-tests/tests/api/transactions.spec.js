const { test, expect } = require('../../utilities/fixtures.js');
const { testUser } = require('../../data/users');

test('should create transaction payment', async ({ authRequest }) => {
  const paymentResponse = await authRequest.post('/transactions', {
    data: {
      amount: '100',
      description: 'description',
      receiverId: 'qywYp6hS0U',
      senderId: testUser.id,
      transactionType: 'payment',
    },
  });

  expect(paymentResponse.ok()).toBeTruthy();
});
