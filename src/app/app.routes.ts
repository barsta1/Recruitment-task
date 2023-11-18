import { Routes } from '@angular/router';
import { LayoutComponent } from './ui/layout/layout.component';
import {
  SLUG_TODOS,
  SLUG_USERS
} from './const';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/todos',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: SLUG_TODOS,
        loadChildren: () => import('./features/todo/todo.module').then((m) => m.TodoModule)
      },
      {
        path: SLUG_USERS,
        loadChildren: () => import('./features/user/user.module').then((m) => m.UserModule)
      }
    ]
  },
]
