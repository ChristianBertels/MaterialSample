import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  exports:[
    MaterialModule,    
    ReactiveFormsModule, 
  ]
})
export class SharedModule { }
