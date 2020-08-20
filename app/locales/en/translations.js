import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISDomashnee_zadanie_PokataevaДистанцияLForm from './forms/i-i-s-domashnee-zadanie-pokataeva-дистанция-l';
import IISDomashnee_zadanie_PokataevaКомандаLForm from './forms/i-i-s-domashnee-zadanie-pokataeva-команда-l';
import IISDomashnee_zadanie_PokataevaУчастникLForm from './forms/i-i-s-domashnee-zadanie-pokataeva-участник-l';
import IISDomashnee_zadanie_PokataevaДистанцияEForm from './forms/i-i-s-domashnee-zadanie-pokataeva-дистанция-e';
import IISDomashnee_zadanie_PokataevaКомандаEForm from './forms/i-i-s-domashnee-zadanie-pokataeva-команда-e';
import IISDomashnee_zadanie_PokataevaУчастникEForm from './forms/i-i-s-domashnee-zadanie-pokataeva-участник-e';
import IISDomashnee_zadanie_PokataevaДистанцияModel from './models/i-i-s-domashnee-zadanie-pokataeva-дистанция';
import IISDomashnee_zadanie_PokataevaКомандаModel from './models/i-i-s-domashnee-zadanie-pokataeva-команда';
import IISDomashnee_zadanie_PokataevaУчастникModel from './models/i-i-s-domashnee-zadanie-pokataeva-участник';
import IISDomashnee_zadanie_PokataevaУчастникиДистанцииModel from './models/i-i-s-domashnee-zadanie-pokataeva-участники-дистанции';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-domashnee-zadanie-pokataeva-дистанция': IISDomashnee_zadanie_PokataevaДистанцияModel,
    'i-i-s-domashnee-zadanie-pokataeva-команда': IISDomashnee_zadanie_PokataevaКомандаModel,
    'i-i-s-domashnee-zadanie-pokataeva-участник': IISDomashnee_zadanie_PokataevaУчастникModel,
    'i-i-s-domashnee-zadanie-pokataeva-участники-дистанции': IISDomashnee_zadanie_PokataevaУчастникиДистанцииModel
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'domashnee-zadanie-pokataeva': {
          caption: 'domashnee-zadanie-pokataeva',
          title: 'domashnee-zadanie-pokataeva',
          'i-i-s-domashnee-zadanie-pokataeva-команда-l': {
            caption: 'i-i-s-domashnee-zadanie-pokataeva-команда-l',
            title: 'i-i-s-domashnee-zadanie-pokataeva-команда-l'
          },
          'i-i-s-domashnee-zadanie-pokataeva-дистанция-l': {
            caption: 'i-i-s-domashnee-zadanie-pokataeva-дистанция-l',
            title: 'i-i-s-domashnee-zadanie-pokataeva-дистанция-l'
          },
          'i-i-s-domashnee-zadanie-pokataeva-участник-l': {
            caption: 'i-i-s-domashnee-zadanie-pokataeva-участник-l',
            title: 'i-i-s-domashnee-zadanie-pokataeva-участник-l'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-domashnee-zadanie-pokataeva-дистанция-l': IISDomashnee_zadanie_PokataevaДистанцияLForm,
    'i-i-s-domashnee-zadanie-pokataeva-команда-l': IISDomashnee_zadanie_PokataevaКомандаLForm,
    'i-i-s-domashnee-zadanie-pokataeva-участник-l': IISDomashnee_zadanie_PokataevaУчастникLForm,
    'i-i-s-domashnee-zadanie-pokataeva-дистанция-e': IISDomashnee_zadanie_PokataevaДистанцияEForm,
    'i-i-s-domashnee-zadanie-pokataeva-команда-e': IISDomashnee_zadanie_PokataevaКомандаEForm,
    'i-i-s-domashnee-zadanie-pokataeva-участник-e': IISDomashnee_zadanie_PokataevaУчастникEForm
  },

});

export default translations;
