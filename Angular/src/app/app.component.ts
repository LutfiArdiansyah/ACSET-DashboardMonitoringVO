import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';
import { GeneralService } from './services/general.service';
import { forkJoin } from 'rxjs';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'dashboard-monitoring-vo';
  params = { project_code: '' };
  listProjects = [];
  dateNow = new Date();
  dataChart: any;
  dataChart2: any;
  dataDetail: any;
  flag: boolean = false;
  width = screen.width;
  data = {
    text: '',
    series: [
      {
        minPointSize: 10,
        innerSize: '80%',
        zMin: 0,
        name: 'countries',
        data: [
          {
            name: 'Remaining Payment',
            y: 0,
          },
          {
            name: 'Payment',
            y: 0,
          },
        ],
      },
    ],
  };
  data2 = {
    text: '',
    series: [
      {
        minPointSize: 10,
        innerSize: '80%',
        zMin: 0,
        name: 'countries',
        data: [
          {
            name: 'Remaining Payment',
            y: 0,
          },
          {
            name: 'Payment',
            y: 0,
          },
        ],
      },
    ],
  };
  data3 = {
    text: '',
    series: [
      {
        minPointSize: 10,
        innerSize: '80%',
        zMin: 0,
        name: 'countries',
        data: [
          {
            name: 'Remaining Payment',
            y: 0,
          },
          {
            name: 'Payment',
            y: 0,
          },
        ],
      },
    ],
  };
  constructor(
    private spinner: NgxSpinnerService,
    private api: GeneralService,
    private swUpdate: SwUpdate
  ) {
    this.swUpdate.available.subscribe(() => {
      if (confirm('Versi terbaru tersedia, muat ulang konten?')) {
        window.location.reload(true);
      }
    });
  }

  ngOnInit() {
    this.fetchParam();
  }

  fetchParam() {
    this.spinner.show();
    this.api.get('monitoringVO/project').subscribe(
      (res) => {
        this.listProjects = res;
        this.params.project_code = this.listProjects[0].project_code;
        this.fetchData();
      },
      (error) => {
        Swal.fire(
          'Error while fetching parameter project!',
          JSON.stringify(error),
          'error'
        );
      },
      () => {
        this.spinner.hide();
      }
    );
  }

  onChangeProject() {
    this.fetchData();
  }

  fetchData() {
    this.spinner.show();
    this.flag = false;
    forkJoin(
      this.api.get(
        'monitoringVO/chartMainNvoContract/' + this.params.project_code
      ),
      this.api.get(
        'monitoringVO/totalContractNpotVO/' + this.params.project_code
      ),
      this.api.get('monitoringVO/detail/' + this.params.project_code)
    ).subscribe(
      (res) => {
        this.flag = true;
        this.dataChart = res[0][0];
        this.dataChart2 = res[1][0];
        this.dataDetail = res[2];
        this.dataDetail.map((data) => {
          data.amount =
            data.amount_main_contract == 0
              ? data.amount_contract_vo
              : data.amount_main_contract;
          data.payment =
            data.bill_main_contract == 0
              ? data.bill_vo
              : data.bill_main_contract;
        });
        this.data.series[0].data[0].y =
          parseInt(res[0][0].amount_main_contract) -
          parseInt(res[0][0].bill_main_contract);
        this.data.series[0].data[1].y = parseInt(res[0][0].bill_main_contract);
        this.data2.series[0].data[0].y =
          parseInt(res[0][0].amount_contract_vo) - parseInt(res[0][0].bill_vo);
        this.data2.series[0].data[1].y = parseInt(res[0][0].bill_vo);
        this.data3.series[0].data[0].y =
          parseInt(res[1][0].total_contract) -
          parseInt(res[1][0].total_billing);
        this.data3.series[0].data[1].y = parseInt(res[1][0].total_billing);
      },
      (error) => {
        Swal.fire('Error while fetching data!', JSON.stringify(error), 'error');
      },
      () => {
        this.spinner.hide();
      }
    );
  }
}
