async function getSessionId(request, user) {

  const loginResponse = await request.post('http://localhost:3001/login', {
    data: {
      username: user.username,
      password: user.password,
      type: 'LOGIN',
    },
  });
  const sessionId = loginResponse.headers()['set-cookie'].split(';')[0];
  
  return sessionId;
}

async function loggedInUserApiContext(playwright, request, user) {
  const sessionId = await getSessionId(request, user);

  return await playwright.request.newContext({
    // baseURL: 'http://localhost:3001',
    extraHTTPHeaders: {
      Cookie: sessionId,
    },
  });
}

module.exports = {getSessionId, loggedInUserApiContext };