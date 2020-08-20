import { Serializer as ДистанцияSerializer } from
  '../mixins/regenerated/serializers/i-i-s-domashnee-zadanie-pokataeva-дистанция';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ДистанцияSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
