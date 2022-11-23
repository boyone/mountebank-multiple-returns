function getToken(config) {
  if (config.state.tokens === undefined) {
    config.state.tokens = new Map();
  }
  const token = new Date().getTime();
  config.response.body.token = token;
  config.state.tokens.set(token, 0);
}
