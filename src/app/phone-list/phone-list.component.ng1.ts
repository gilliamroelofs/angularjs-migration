// Register `phoneList` component, along with its associated controller and template
import * as angular from 'angular';

angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: './phone-list/phone-list.template.ng1.html',
    controller: ['Phone',
      function PhoneListController(this: any, Phone) {
        this.phones = Phone.query();
        this.orderProp = 'age';
      }
    ]
  });
