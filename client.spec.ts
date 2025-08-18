import { buildAuthorizationUrl } from 'openid-client-v6'

describe('OpenID Client', () => {
  it('has a function buildAuthorizationUrl', () => {
    expect(typeof buildAuthorizationUrl).toBe('function');
  });
});
