import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:1337/podcasts"

  get() {
    return this.http.get(this.url);
  }

}
