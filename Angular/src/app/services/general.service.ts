import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AppConfig } from '../module/config/app-config';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  apiUrl = AppConfig.config.API;

  constructor(private http: HttpClient) {}

  get(path): Observable<any> {
    return this.http
      .get(this.apiUrl + path, {
        observe: 'response',
      })
      .pipe(
        map((res) => {
          if (res.status == 200) {
            return res.body;
          }
          return res;
        })
      );
  }
}
