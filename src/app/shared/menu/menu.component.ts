import { Component } from '@angular/core';

interface MenuItem {
  ruta: string;
  texto: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [`
    li {
      cursor: pointer;
    }
  `]
})
export class MenuComponent{

  Menu: MenuItem[] = [
    { ruta: '/graficas/barra', texto: 'Barras' },
    { ruta: '/graficas/barra-doble', texto: 'Barras Dobles' },
    { ruta: '/graficas/donut', texto: 'Donuts' },
    { ruta: '/graficas/donut-http', texto: 'Donuts Http' },

  ]
}
