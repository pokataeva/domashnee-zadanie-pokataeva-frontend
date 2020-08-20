import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  фИО: DS.attr('string'),
  команда: DS.belongsTo('i-i-s-domashnee-zadanie-pokataeva-команда', { inverse: null, async: false })
});

export let ValidationRules = {
  фИО: {
    descriptionKey: 'models.i-i-s-domashnee-zadanie-pokataeva-участник.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  команда: {
    descriptionKey: 'models.i-i-s-domashnee-zadanie-pokataeva-участник.validations.команда.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('УчастникE', 'i-i-s-domashnee-zadanie-pokataeva-участник', {
    фИО: attr('ФИО', { index: 0 }),
    команда: belongsTo('i-i-s-domashnee-zadanie-pokataeva-команда', 'Команда', {
      название: attr('Название', { index: 2 })
    }, { index: 1 })
  });

  modelClass.defineProjection('УчастникL', 'i-i-s-domashnee-zadanie-pokataeva-участник', {
    фИО: attr('ФИО', { index: 0 }),
    команда: belongsTo('i-i-s-domashnee-zadanie-pokataeva-команда', 'Название', {
      название: attr('Название', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
