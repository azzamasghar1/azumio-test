import { NgModule } from '@angular/core';
import { SelectDirective } from './select.directive';
import { SelectOptionDirective } from './select-option.directive';

@NgModule({
  declarations: [
    SelectDirective,
    SelectOptionDirective,
  ],
  exports: [
    SelectDirective,
    SelectOptionDirective,
  ],
})
export class SelectDirectiveModule {}
