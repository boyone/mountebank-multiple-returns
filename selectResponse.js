function selectResponse(config) {
  let firstBody = { message: 'Hello World', status: 'confirmed' };
  let secondBody = { message: { prefix: 'Hello World' }, status: 'approved' };
  const token = JSON.parse(config.request.body).token;
  let counter = config.state.tokens.get(token);
  if (counter === 0) {
    firstBody.token = token;
    config.response.body = firstBody;
    config.state.tokens.set(token, 1);
  }
  if (counter === 1) {
    secondBody.token = token;
    config.response.body = secondBody;
    config.state.tokens.delete(token);
  }
}
