const { render } = require('@testing-library/react');
const { default: App } = require('./App');

test('App', () => {
  render(<App />);
});
