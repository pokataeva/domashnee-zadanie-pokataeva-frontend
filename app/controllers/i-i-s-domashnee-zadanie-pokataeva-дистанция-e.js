import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-domashnee-zadanie-pokataeva-дистанция-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-domashnee-zadanie-pokataeva-участники-дистанции+участник':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'фИО',
            required: true,
            relationName: 'участник',
            projection: 'УчастникL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
