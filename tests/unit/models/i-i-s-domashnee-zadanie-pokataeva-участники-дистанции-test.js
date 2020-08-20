import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-domashnee-zadanie-pokataeva-участники-дистанции', 'Unit | Model | i-i-s-domashnee-zadanie-pokataeva-участники-дистанции', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-domashnee-zadanie-pokataeva-дистанция',
    'model:i-i-s-domashnee-zadanie-pokataeva-команда',
    'model:i-i-s-domashnee-zadanie-pokataeva-участник',
    'model:i-i-s-domashnee-zadanie-pokataeva-участники-дистанции',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
