import { NgModule } from '@angular/core';
import { ButtonInputComponent } from './button-input.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ButtonInputComponent,
  ],
  imports: [
    ReactiveFormsModule
  ],
  exports: [
    ButtonInputComponent
  ]
})
export class ButtonInputModule {
}
