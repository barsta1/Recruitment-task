import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-user-list[users]',
  templateUrl: './user-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent {
  @Input() users: User[];
  @Output() userRemoved: EventEmitter<number> = new EventEmitter<number>();

  handleUserRemoved(userIndex: number): void {
    this.userRemoved.emit(userIndex);
  }
}
