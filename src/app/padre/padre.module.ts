import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Router
import { PadreRoutingModule } from './padre-routing.module';

// Components
import { PadreComponent } from './padre.component';
import { Hijo1Component } from '../hijo1/hijo1.component';
import { Hijo2Component } from '../hijo2/hijo2.component';
import { Hijo3Component } from '../hijo3/hijo3.component';
import { Nieto1Component } from '../hijo3/nieto1/nieto1.component';
import { Nieto2Component } from '../hijo3/nieto2/nieto2.component';


@NgModule({
  declarations: [PadreComponent, Hijo1Component, Hijo2Component, Hijo3Component, Nieto1Component, Nieto2Component],
  imports: [
    CommonModule,
    PadreRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PadreModule { }
