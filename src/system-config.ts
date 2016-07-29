/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map:any = {
  'bootstrap': 'vendor/bootstrap/dist/js/bootstrap.min.js',
  'moment': 'vendor/moment/moment.js',
  'ng2-bootstrap': 'vendor/ng2-bootstrap',
  'jQuery': 'vendor/jquery/dist/jquery.js',
  'wowjs': 'vendor/wowjs/dist/wow.min.js',
  'gmaps': 'vendor/theme/js/gmaps.js'
};

/** User packages configuration. */
const packages:any = {
  'vendor/ng2-bootstrap': {
    defaultExtension: 'js'
  },
  'vendor/gmaps': {
    defaultExtension: 'js'
  },
  'vendor/bootstrap': {
    defaultExtension: 'js'
  },
  'vendor/wow': {
    defaultExtension: 'js'
  },
  'vendor/jQuery': {
    defaultExtension: 'js'
  }
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels:string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  'app/+contact-us',
  'app/+home',
  'app/header',
  'app/+about-us',
  'app/footer',
  'app/+services',
  'app/+our-space',
  'app/+about-us/+who-are-we',
  'app/+about-us/+testimonies',
  'app/+about-us/+benefits',
  'app/shared/contact-form',
  /** @cli-barrel */
];

const cliSystemConfigPackages:any = {};
barrels.forEach((barrelName:string) => {
  cliSystemConfigPackages[barrelName] = {main: 'index'};
});

/** Type declaration for ambient System. */
declare var System:any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({map, packages});
