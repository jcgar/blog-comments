import * as providers from './providers/index';
import themesFiles from './themes/files';

const min = process.env.MIN_EXT || '';
const themeName = Object.keys(themesFiles).shift();
const themeFiles = themesFiles[themeName];

export default {
  providers: {
    ...providers,

    page: {
      ...providers.page,

      state: {
        documentTitle: 'Lumbur',
        metaDescription: 'Boilerplate w/ generator for building universal, extendable, and reusable React applications with `react-redux-provide`.',
        jsFiles: [`/dist/Lumbur${min}.js`]
      }
    },

    theme: {
      ...providers.theme,

      state: {
        themesFiles,
        themeFiles,
        themeName
      }
    }
  }
};
