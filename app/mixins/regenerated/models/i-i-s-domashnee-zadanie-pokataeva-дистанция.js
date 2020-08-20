import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  длина: DS.attr('number'),
  участникиДистанции: DS.hasMany('i-i-s-domashnee-zadanie-pokataeva-участники-дистанции', { inverse: 'дистанция', async: false })
});

export let ValidationRules = {
  длина: {
    descriptionKey: 'models.i-i-s-domashnee-zadanie-pokataeva-дистанция.validations.длина.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  участникиДистанции: {
    descriptionKey: 'models.i-i-s-domashnee-zadanie-pokataeva-дистанция.validations.участникиДистанции.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДистанцияE', 'i-i-s-domashnee-zadanie-pokataeva-дистанция', {
    длина: attr('Длина', { index: 0 }),
    участникиДистанции: hasMany('i-i-s-domashnee-zadanie-pokataeva-участники-дистанции', 'Участники дистанции', {
      участник: belongsTo('i-i-s-domashnee-zadanie-pokataeva-участник', 'Участник', {
        фИО: attr('ФИО', { index: 1, hidden: true })
      }, { index: 0, displayMemberPath: 'фИО' })
    })
  });

  modelClass.defineProjection('ДистанцияL', 'i-i-s-domashnee-zadanie-pokataeva-дистанция', {
    длина: attr('Длина', { index: 0 })
  });
};
