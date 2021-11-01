import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffLoginComponent } from './auth/staff-login/staff-login.component';
import { StaffAddThingComponent } from './staff-add-thing/staff-add-thing.component';

import { RouterModule } from '@angular/router';
import { AddUpdateDataModule } from './add-update-data/add-update-data.module';
import { ReadDataModule } from './read-data/read-data.module';

import { ErrorTailorModule } from '@ngneat/error-tailor';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StaffLoginComponent,
    StaffAddThingComponent
  ],
  imports: [
    CommonModule,
    RouterModule, 
    AddUpdateDataModule,
    ReadDataModule,
    ReactiveFormsModule,
    


    ErrorTailorModule.forRoot({
      errors: {
        useValue:{
          required: 'El campo es requerido',
          minlength: ({ requiredLength, actualLength }) =>
          `Expect ${requiredLength} but got ${actualLength}`,
          invalidAddress: error => 'Direccion Incorrecta'
        }
      }  
    })
  ],
  exports:[
    StaffLoginComponent,
    StaffAddThingComponent,
    AddUpdateDataModule,
    ReadDataModule,
  ],
})
export class StaffModule { }
