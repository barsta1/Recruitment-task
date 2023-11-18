import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output
} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-ui-button-input',
  templateUrl: './button-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonInputComponent {
  @Output() added: EventEmitter<string> = new EventEmitter<string>();
  readonly buttonInputControl = new FormControl('');

  addValue(): void {
    this.added.emit(this.buttonInputControl.value);
    this.buttonInputControl.setValue('');
  }
}
