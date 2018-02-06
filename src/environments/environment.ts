// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

// config: {
// "APP_NAME": "Hotel Life",
//   "BASE_URL": "http://localhost:4000/",
//   "API_URL": "http://localhost:4000/api/v1/" 4108

// }

export const environment = {
  production: false,
  envName: "devLocal",
   config: {
    APP_NAME: "Dream App",
    BASE_URL: "https://swapi.co/",
    API_URL: "https://swapi.co/api/",
    uploadPath: "https://swapi.co/uploadedFiles/"
  }
};
