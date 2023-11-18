import {
  ChangeDetectionStrategy,
  Component,
  OnInit
} from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserContainerComponent implements OnInit {
  readonly users$ = this._userService.users$;
  constructor(private readonly _userService: UserService) {
  }

  ngOnInit() {
    this._userService.fetchUsers();
  }

  handleUserAdded(username: string): void {
    this._userService.addUser({ name: username });
  }

  handleRemoveUserButtonClicked(removedUserIndex: number): void {
    this._userService.removeUser(removedUserIndex);
  }
}
