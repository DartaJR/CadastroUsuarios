import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent } from '../auth/login/login.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'admin', pathMatch: 'full' },
      { path: 'auth/login', component: LoginComponent },
    ])
  ],
  declarations: [],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
