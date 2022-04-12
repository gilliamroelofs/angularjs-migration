import 'angular-animate';
import 'angular-route';

import './core/phone/phone.module.ng1';
import './core/phone/phone.service.ng1';

import './core/core.module.ng1';

import './core/checkmark/checkmark.filter.ng1';

import './phone-detail/phone-detail.module.ng1';
import './phone-detail/phone-detail.component.ng1';

import './phone-list/phone-list.module.ng1';
import './phone-list/phone-list.component.ng1';

import * as angular from 'angular';

// Define the `phonecatApp` module
export default angular.module('phonecatApp', [
  'ngAnimate',
  'ngRoute',
  'core',
  'phoneDetail',
  'phoneList'
]);
