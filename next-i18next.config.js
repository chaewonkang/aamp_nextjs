const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ko'],
    localePath: path.resolve('./public/locales'),
    otherLanguages: ['en', 'ko'],
    defaultLanguage: 'en',
    fallbackLng: ['en'],
  },
};
