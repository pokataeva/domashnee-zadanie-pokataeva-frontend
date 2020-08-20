import { Serializer as УчастникиДистанцииSerializer } from
  '../mixins/regenerated/serializers/i-i-s-domashnee-zadanie-pokataeva-участники-дистанции';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(УчастникиДистанцииSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
