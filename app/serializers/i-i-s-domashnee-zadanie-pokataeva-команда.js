import { Serializer as КомандаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-domashnee-zadanie-pokataeva-команда';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(КомандаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
