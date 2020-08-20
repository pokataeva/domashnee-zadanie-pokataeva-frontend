import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-domashnee-zadanie-pokataeva-участник', 'Unit | Serializer | i-i-s-domashnee-zadanie-pokataeva-участник', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-domashnee-zadanie-pokataeva-участник',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
