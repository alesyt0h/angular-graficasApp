import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';
import { Color } from 'ng2-charts/lib/color';

import { GraficasService } from '../../services/graficas.service';

@Component({
	selector: 'app-donut-http',
	templateUrl: './donut-http.component.html',
	styles: [
	]
})
export class DonutHttpComponent implements OnInit {

	public doughnutChartLabels: Label[] = [
		// 'Download Sales', 'In-Store Sales', 'Mail-Order Sales','Other'
	];

	public doughnutChartData: MultiDataSet = [
		// [350, 450, 100, 150],
	];
	public doughnutChartType: ChartType = 'doughnut';
  
	public colors: Color[] = [
		{
		backgroundColor: [
			'#328BFA',
			'#37AEDE',
			'#4AF3F5',
			'#37DEB1',
			'#40FF94',
		]
		}
	];
  
  	constructor( private _gS: GraficasService) { }

		ngOnInit(): void {

			this._gS.getUsuariosRedesSocialesDonutData()
					.subscribe( ({labels,values}) => {
						this.doughnutChartLabels = labels;
						this.doughnutChartData.push(values);
					})

			// Se puede hacer de esta manera, y estaría bien, pero se puede hacer mejor con RxJS, vease el metodo en el servicio, ya devuelve el valor que necesito ya procesado gracias al map de RxJS/operators
			//
			// this._gS.getUsuariosRedesSociales()
			// 		.subscribe( data => {
			// 		const labels = Object.keys(data);
			// 		const values = Object.values(data);
			
			// 		this.doughnutChartData.push(values) // this.doughnutChartData = values; // Funcionaria de igual manera
					
			// 		this.doughnutChartLabels = labels;
			// 		});
		}

}
