import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from '../../data/schemas/config';

@Injectable()
export class AppConfig {
  static config: Config;
  constructor(private http: HttpClient) {}
  load() {
    return new Promise<void>((resolve, reject) => {
      this.http
        .get(window.location.origin + '/monitoring-vo/assets/json/config.json')
        .toPromise()
        .then((data: any) => {
          AppConfig.config = data;
          resolve();
        })
        .catch((error) => {
          console.error(error);
          reject('Cannot load config');
        });
    });
  }
}
