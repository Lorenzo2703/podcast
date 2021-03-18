import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  constructor(private http: HttpClient) { }

  urlPodcast = "https://aqueous-earth-22833.herokuapp.com/podcasts";
  urlMembers = "https://aqueous-earth-22833.herokuapp.com/members";

  getPodcast() {
    return this.http.get(this.urlPodcast);
  }


  getMembers() {
    return this.http.get(this.urlMembers);
  }

}
