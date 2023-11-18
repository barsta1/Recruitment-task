import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ButtonInputModule } from '../../ui/button-input/button-input.module';
import { UserContainerComponent } from './user-container/user-container.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { userRoutes } from './user.routes';

@NgModule({
  declarations: [
    UserContainerComponent,
    UserDetailComponent,
    UserListComponent
  ],
  imports: [
    ButtonInputModule,
    CommonModule,
    RouterModule.forChild(userRoutes)
  ],
})
export class UserModule {
}
