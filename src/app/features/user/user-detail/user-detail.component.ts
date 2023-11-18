import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailComponent {
  @Input() user: User;
  @Output() userRemoved: EventEmitter<void> = new EventEmitter<void>();

  removeUserButtonClicked(): void {
    this.userRemoved.emit();
  }
}
