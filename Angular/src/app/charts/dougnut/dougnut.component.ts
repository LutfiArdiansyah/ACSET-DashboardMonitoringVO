import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-dougnut',
  templateUrl: './dougnut.component.html',
  styleUrls: ['./dougnut.component.scss'],
})
export class DougnutComponent implements OnInit {
  chart = null;
  @Input('data') data;
  constructor() {}

  ngOnInit(): void {
    this.chart = new Chart({
      chart: {
        type: 'pie',
      },
      colors: ['#213071', '#FCDB00'],
      title: {
        text: this.data.text,
      },
      tooltip: {
        headerFormat: '',
        pointFormat:
          '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
          'Total: <b>{point.y}</b>',
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          },
        },
      },
      series: this.data.series,
    });
  }
}
