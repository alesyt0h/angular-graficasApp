import { Component } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';
import { Color } from 'ng2-charts/lib/color';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styles: [
  ]
})
export class DonutComponent {

  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales','Other'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100, 150],
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

  

}
