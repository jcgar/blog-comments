var properName = 'Lumbur';

module.exports = {
  replacements: [
    {
      files: [
        'package.json',
        'README.md'
      ],
      key: 'package name',
      replace: /\blumbur\b/g,  // can use regex
      value: 'lumbur'          // replacement value defaults to this
    },

    {
      files: [
        'package.json',
        'webpack.config.development.js',
        'webpack.config.production.js',
        'src/defaultProps.js',
        'src/components/index.js',
        'src/components/App.js',
        'src/components/Lumbur.js',
        'src/themes/dark/dark.css',
        'src/themes/light/light.css',
        'test/index.spec.js'
      ],
      key: 'proper name (no spaces)',
      replace: 'Lumbur',
      value: function(value) {
        if (!value) {
          value = 'Lumbur';
        }

        properName = value;

        return value;
      }
    },

    {
      files: [
        'package.json',
        'README.md',
        'src/defaultProps.js'
      ],
      key: 'description',
      replace: 'Boilerplate w/ generator for building universal, extendable, and reusable React applications with `react-redux-provide`.',
      value: 'Built with Lumbur.'
    },

    {
      files: [
        'package.json'
      ],
      key: 'version',
      replace: /1\.0\.0\-rc\.20/,
      value: '1.0.0-alpha.1'
    },

    {
      files: [
        'package.json'
      ],
      key: 'author',
      replace: 'timbur'
    },

    {
      files: [
        'README.md',
        'LICENSE'
      ],
      key: 'owner (i.e., repo user name)',
      replace: 'loggur'
    },

    {
      files: [
        'package.json'
      ],
      key: 'url',
      replace: 'https://github.com/loggur/lumbur'
    },

    {
      files: [
        'server.development.js'
      ],
      key: 'development server port',
      replace: '3000'
    },

    {
      files: [
        'server.production.js'
      ],
      key: 'production server https port',
      replace: '4433'
    },

    {
      files: [
        'server.production.js'
      ],
      key: 'production server http port',
      replace: '8080'
    },

    {
      files: [
        'server.production.js'
      ],
      key: 'redirect domain.com to www.domain.com',
      replace: /true/,
      value: 'true'
    },

    {
      files: [
        'server.development.js',
        'server.production.js'
      ],
      key: 'secret key',
      replace: 'super-secret-key',
      value: Math.random().toString(36).substring(2)
    },

    {
      files: [
        'server.production.js'
      ],
      key: 'ssl directory',
      replace: './ssl/'
    },

    {
      files: [
        'server.production.js'
      ],
      key: 'ssl key file',
      replace: 'server.key'
    },

    {
      files: [
        'server.production.js'
      ],
      key: 'ssl cert file',
      replace: 'www_domain_com.crt'
    },

    {
      files: [
        'server.production.js'
      ],
      key: 'ssl ca files',
      replace: 'bundle.crt',
      value: function(value) {
        return (value || 'bundle.crt').split(' ').join('\',\n    \'');
      }
    },

    {
      files: [
        'package.json'
      ],
      // if there's no key, replacement will occur without prompting user
      replace: '    "postinstall": "lumburjack",\n',
      value: ''  // no longer need lumburjack so let's remove from scripts
    },

    {
      files: [
        'package.json'
      ],
      replace: '    "lumburjack": "^1.0.0-0",\n',
      value: ''  // no longer need lumburjack so let's remove from deps as well
    }
  ],

  onCompleted: function(values) {
    var fs = require('fs');
    var dir = process.cwd();

    // rename relevant file(s)
    fs.renameSync(
      dir + '/src/components/Lumbur.js',
      dir + '/src/components/' + properName + '.js'
    );

    // let's delete lumburjack.js now
    fs.unlinkSync(dir + '/lumburjack.js');

    console.log([
      '',
      '',
      '',
      'Good starting points:',
      '',
      '1.  npm run start:dev',
      '',
      '2.  src/renderApp.js',
      '',
      '3.  src/renderAppToString.js',
      '',
      '4.  src/defaultProps.js',
      '',
      '5.  src/middleware.js',
      '',
      '6.  src/components/App.js',
      '',
      '7.  Update README.md!',
      '',
      '',
      ''
    ].join('\n'));
  }
};
