import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersPageComponent } from './page/users-page/users-page.component';
import { UsersSidebarComponent } from './sections/users-sidebar/users-sidebar.component';
import { UsersCardComponent } from './components/users-card/users-card.component';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { UsersFormComponent } from './components/users-form/users-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserUpdaterFormComponent } from './components/user-updater-form/user-updater-form.component';

const routes : Routes = [
{path : '', component: UsersPageComponent}
]

@NgModule({
  declarations: [
    UsersPageComponent,
    UsersSidebarComponent,
    UsersCardComponent,
    UsersFormComponent,
    UserUpdaterFormComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    UsersRoutingModule,
    RouterModule.forChild(routes),
    CoreModule
  ],
exports:[
  UsersPageComponent,
  UsersCardComponent,
  UsersSidebarComponent
]
})
export class UsersModule { }
