import { NgModule } from '@angular/core';
import { LoginComponent } from './views/login/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { LoginRootComponent } from './login-root/login-root.component';
import { SignUpComponent } from './views/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UiComponentsModule } from '../ui-components/ui-components.module';
import { PersonalDetailsComponent } from './views/signup/views/personal-details/personal-details.component';
import { AddressComponent } from './views/signup/views/address/address.component';
import { ContactDetailsComponent } from './views/signup/views/contact-details/contact-details.component';
import { PasswordComponent } from './views/signup/views/password/password.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    LoginRootComponent,
    LoginComponent,
    SignUpComponent,
    PersonalDetailsComponent,
    // AddressComponent,
    // ContactDetailsComponent,
    // PasswordComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    UiComponentsModule
  ],
  exports: [
      LoginComponent,
      SignUpComponent
  ],
  providers: []
})
export class LoginModule { }
