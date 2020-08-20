import { Serializer as УчастникSerializer } from
  '../mixins/regenerated/serializers/i-i-s-domashnee-zadanie-pokataeva-участник';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(УчастникSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
