import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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

  'application-name': 'Domashnee_zadanie_ pokataeva',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Domashnee_zadanie_ pokataeva',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Domashnee_zadanie_ pokataeva',
          title: 'Domashnee_zadanie_ pokataeva'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'domashnee-zadanie-pokataeva': {
          caption: 'Domashnee_zadanie_Pokataeva',
          title: 'Domashnee_zadanie_Pokataeva',
          'i-i-s-domashnee-zadanie-pokataeva-команда-l': {
            caption: 'Команда',
            title: ''
          },
          'i-i-s-domashnee-zadanie-pokataeva-дистанция-l': {
            caption: 'Дистанция',
            title: ''
          },
          'i-i-s-domashnee-zadanie-pokataeva-участник-l': {
            caption: 'Участник',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
