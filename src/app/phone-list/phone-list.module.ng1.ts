import { downgradeComponent } from '@angular/upgrade/static';
import * as angular from 'angular';
import { PhoneSnippetComponent } from './components/phone-snippet/phone-snippet.component';

// Define the `phoneList` module
angular
    .module('phoneList', ['core.phone'])
    .directive('appPhoneSnippet', downgradeComponent({ component: PhoneSnippetComponent }));
