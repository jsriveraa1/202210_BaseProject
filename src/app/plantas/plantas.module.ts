import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlantasRoutingModule } from './plantas-routing.module';
import { ListarComponent } from './listar/listar.component';


@NgModule({
  declarations: [
    ListarComponent
  ],
  exports: [
    ListarComponent
  ],
  imports: [
    CommonModule,
    PlantasRoutingModule
  ]
})
export class PlantasModule { }
