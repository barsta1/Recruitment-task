import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';
import {
  SLUG_TODOS,
  SLUG_USERS
} from '../../const';

@Component({
  selector: 'app-ui-layout',
  templateUrl: './layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {
  readonly SLUG_TODOS = SLUG_TODOS;
  readonly SLUG_USERS = SLUG_USERS;
}
