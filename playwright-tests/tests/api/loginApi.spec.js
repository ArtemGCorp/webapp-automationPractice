const { test, expect } = require('../../utilities/fixtures.js');
const { testUser, nonExistingUser } = require('../../data/users.js');

test('should log in', async ({ request }) => {
  const loginResponse = await request.post('/login', {
    data: {
      username: testUser.username,
      password: testUser.password,
      type: 'LOGIN',
    },
  });

  await expect(loginResponse.ok()).toBeTruthy();
});

test('should fail log in on invalid credentials', async ({ request }) => {
  const loginResponse = await request.post('/login', {
    data: {
      username: nonExistingUser.username,
      password: nonExistingUser.password,
      type: 'LOGIN',
    },
  });
  await expect(loginResponse.ok()).toBeFalsy();
  console.log(typeof request);
});


//1 Register
test('should register', async({request}) => {
  const registerResponse = await request.post('/users', {
    data: {
      "firstName":"qwerty",
      "lastName":"lastName",
      "username":"retr0",
      "password":"12345",
      "confirmPassword":"12345"
    },
  });
  expect(registerResponse.ok()).toBeTruthy();

  const loginResponse = await request.post('/login', {
    data: {
      "type":"LOGIN",
      "username":"retr0",
      "password":"12345"
    },
  });

  await expect(loginResponse.ok()).toBeTruthy();

})