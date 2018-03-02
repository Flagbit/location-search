//
//
// =============================================================================
//
import { ListComponent } from './list.component';

//
// DEFINE ANGULAR MODULE
// =============================================================================
//
export const ListModule = angular
  .module('ListModule', [])
  .component('locationSearchList', ListComponent)
  .value('LocationSearchListTemplate', require('./list.template.html'));
;
