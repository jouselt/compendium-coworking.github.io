/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
var map = {
    'bootstrap': 'vendor/bootstrap/dist/js/bootstrap.min.js',
    'moment': 'vendor/moment/moment.js',
    'ng2-bootstrap': 'vendor/ng2-bootstrap',
    'jQuery': 'vendor/jquery/dist/jquery.js',
    'wowjs': 'vendor/wowjs/dist/wow.min.js'
};
/** User packages configuration. */
var packages = {
    'vendor/ng2-bootstrap': {
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
var barrels = [
    // Angular specific barrels.
    '@angular/core',
    '@angular/common',
    '@angular/compiler',
    '@angular/http',
    '@angular/router',
    '@angular/router-deprecated',
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
];
var cliSystemConfigPackages = {};
barrels.forEach(function (barrelName) {
    cliSystemConfigPackages[barrelName] = { main: 'index' };
});
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
System.config({ map: map, packages: packages });
//# sourceMappingURL=system-config.js.map