import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { PadreComponent } from './padre.component';
import { Hijo1Component } from '../hijo1/hijo1.component';
import { Hijo2Component } from '../hijo2/hijo2.component';
import { Hijo3Component } from '../hijo3/hijo3.component';
import { Nieto1Component } from '../hijo3/nieto1/nieto1.component';
import { Nieto2Component } from '../hijo3/nieto2/nieto2.component';

const routes: Routes = [
  {
    path: '',
    component: PadreComponent,
    children: [
      { path: '', redirectTo: 'hijo-1', pathMatch: 'full' },
      {
        path: 'hijo-1',
        component: Hijo1Component
      },
      {
        path: 'hijo-2',
        component: Hijo2Component
      },
      {
        path: 'hijo-3',
        component: Hijo3Component,
        children: [
          { path: '', redirectTo: 'nieto-1', pathMatch: 'full' },
          {
            path: 'nieto-1',
            component: Nieto1Component
          }, {
            path: 'nieto-2',
            component: Nieto2Component
          },
        ]
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PadreRoutingModule { }
