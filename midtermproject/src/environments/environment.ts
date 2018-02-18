// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyB-833_wI6Ha6ucYhMynmU7Uu-LsKRT43E",
    authDomain: "firestore-crud2.firebaseapp.com",
    databaseURL: "https://firestore-crud2.firebaseio.com",
    projectId: "firestore-crud2",
    storageBucket: "firestore-crud2.appspot.com",
    messagingSenderId: "1009297380603"

  }
};
