import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { LoadingService } from 'nx-core';
import { Timeouts } from 'selenium-webdriver';

// import { LoadingService } from 'nx-core';

@Component({
  selector: 'analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {
  settings = {};
  labels = ['Uno', 'Dos', 'Tres'];
  data = ['123', '23', '213'];

  constructor(private _weather: WeatherService, private loadingService: LoadingService) { }

  ngOnInit() {
    // this._weather.dailyForecast()
    //   .subscribe(res => {
    //     console.log(res);

    //     let temp_max = res['list'].map(res => res.main.temp_max);
    //     let temp_min = res['list'].map(res => res.main.temp_min);
    //     let alldates = res['list'].map(res => res.dt);

    //     let weatherDates = [];
    //     alldates.forEach((res) => {
    //         let jsdate = new Date(res * 1000);
    //         weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }));
    //     });

    //     console.log('DEBUG:');
    //     console.log(weatherDates);

    //     // this.setChart(weatherDates, temp_max, temp_min);
    //   });

    setTimeout(() => {

      this.settings = {
        data: {
          labels: ['Uno', 'Dos', 'Tres'],
          datasets: [
            {
              data: [123, 23, 213],
              borderColor: '#27CD6E',
              fill: false
            },
            {
              data: [223, 30, 21],
              borderColor: '#d8d8d8',
              fill: false
            },
          ]
        }
      };
    }, 30);

  }

  btnLoading() {
    console.log('Poom');
    this.loadingService.showLoading(true);

    setTimeout(() => {
      this.loadingService.showLoading(false);
    }, 3000);
  }

}
