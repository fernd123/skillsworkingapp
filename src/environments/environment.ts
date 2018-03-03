// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBQoR15nsEXuylas5m4y9cXqEwM1m7e7So",
    authDomain: "skillsworkingapp.firebaseapp.com",
    databaseURL: "https://skillsworkingapp.firebaseio.com",
    projectId: "skillsworkingapp",
    storageBucket: "skillsworkingapp.appspot.com",
    messagingSenderId: "589559020855"
  }
};
