import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-domashnee-zadanie-pokataeva-дистанция-l');
  this.route('i-i-s-domashnee-zadanie-pokataeva-дистанция-e',
  { path: 'i-i-s-domashnee-zadanie-pokataeva-дистанция-e/:id' });
  this.route('i-i-s-domashnee-zadanie-pokataeva-дистанция-e.new',
  { path: 'i-i-s-domashnee-zadanie-pokataeva-дистанция-e/new' });
  this.route('i-i-s-domashnee-zadanie-pokataeva-команда-l');
  this.route('i-i-s-domashnee-zadanie-pokataeva-команда-e',
  { path: 'i-i-s-domashnee-zadanie-pokataeva-команда-e/:id' });
  this.route('i-i-s-domashnee-zadanie-pokataeva-команда-e.new',
  { path: 'i-i-s-domashnee-zadanie-pokataeva-команда-e/new' });
  this.route('i-i-s-domashnee-zadanie-pokataeva-участник-l');
  this.route('i-i-s-domashnee-zadanie-pokataeva-участник-e',
  { path: 'i-i-s-domashnee-zadanie-pokataeva-участник-e/:id' });
  this.route('i-i-s-domashnee-zadanie-pokataeva-участник-e.new',
  { path: 'i-i-s-domashnee-zadanie-pokataeva-участник-e/new' });
});

export default Router;
