import auth0 from 'auth0-js';

export default class Auth {
  constructor({
 domain, clientID, audience, source,
}) {
    this.auth0 = new auth0.WebAuth({
      domain,
      clientID,
      redirectUri: source
        ? `${window.location.origin}/authenticate?source=${source}`
        : `${window.location.origin}/authenticate`,
      audience,
      responseType: 'token id_token',
      scope: 'openid profile email',
    });
  }

  login() {
    this.auth0.authorize();
  }

  parseTokens() {
    return new Promise((resolve, reject) => this.auth0.parseHash((err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve({
            ...result,
            // prettier-ignore
            expiresAt: (result.expiresIn * 1000) + new Date().getTime(),
          });
        }
      }));
  }
}
