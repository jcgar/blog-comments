import providers from './providers/index';
import themesFiles from './themes/files';

const min = process.env.MIN_EXT || '';
const { page, entries } = providers;
const combinedProviders = { page, entries };
const themeName = Object.keys(themesFiles).shift();
const themeFiles = themesFiles[themeName];

export default {
  providers,
  combinedProviders,
  providedState: {
    documentTitle: `Bloggur`,
    metaDescription: `Simple blog app demonstrating server rendering and `
      + `routes using react-redux-provide.`,
    jsFiles: [`/dist/Bloggur${min}.js`],
    themesFiles,
    themeFiles,
    themeName
  }
};
