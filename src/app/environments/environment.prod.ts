export const environment = {
  production: true,
  envName: 'local',
  keycloak: {
    // Url of the Identity Provider
    issuer: 'http://localhost:9080/auth/',

    // Realm
    realm: 'pfe-realm',

    // The SPA's id. 
    // The SPA is registerd with this id at the auth-serverß
    clientId: 'angular-pfe-client',
  }
};