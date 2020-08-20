import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  участник: DS.belongsTo('i-i-s-domashnee-zadanie-pokataeva-участник', { inverse: null, async: false }),
  дистанция: DS.belongsTo('i-i-s-domashnee-zadanie-pokataeva-дистанция', { inverse: 'участникиДистанции', async: false })
});

export let ValidationRules = {
  участник: {
    descriptionKey: 'models.i-i-s-domashnee-zadanie-pokataeva-участники-дистанции.validations.участник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  дистанция: {
    descriptionKey: 'models.i-i-s-domashnee-zadanie-pokataeva-участники-дистанции.validations.дистанция.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('УчастникиДистанцииE', 'i-i-s-domashnee-zadanie-pokataeva-участники-дистанции', {
    участник: belongsTo('i-i-s-domashnee-zadanie-pokataeva-участник', 'Участник', {
      фИО: attr('ФИО', { index: 1, hidden: true })
    }, { index: 0, displayMemberPath: 'фИО' })
  });
};
