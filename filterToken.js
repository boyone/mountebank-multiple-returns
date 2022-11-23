function filterToken(config) {
  return (
    config.state.tokens.get(JSON.parse(config.request.body).token) !== undefined
  );
}
