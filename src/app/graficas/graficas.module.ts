import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';

import { GraficasRoutingModule } from './graficas-routing.module';
import { BarrasComponent } from './pages/barras/barras.component';
import { DonutComponent } from './pages/donut/donut.component';
import { DonutHttpComponent } from './pages/donut-http/donut-http.component';
import { GraficaBarraComponent } from './components/grafica-barra/grafica-barra.component';
import { BarrasDobleComponent } from './pages/barras-doble/barras-doble.component';


@NgModule({
  declarations: [
    BarrasComponent,
    DonutComponent,
    DonutHttpComponent,
    GraficaBarraComponent,
    BarrasDobleComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
    GraficasRoutingModule
  ]
})
export class GraficasModule { }
