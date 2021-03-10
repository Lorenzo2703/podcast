import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  constructor(private http: HttpClient) { }

  urlPodcast = "http://localhost:1337/podcasts";
  urlMembers = "http://localhost:1337/members";

  getPodcast() {
    return this.http.get(this.urlPodcast);
  }


  getMembers() {
    return this.http.get(this.urlMembers);
  }

}
