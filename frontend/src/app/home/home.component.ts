import { Component, OnInit } from '@angular/core';
import { AjaxService } from '../ajax.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  list: any = [];
  last: any;

  constructor(private ajax: AjaxService) { }

  getPodcast() {
    this.ajax.getPodcast().subscribe((res) => {
      this.list = res;
      this.last = this.list[this.list.length - 1];
    })


  }




  ngOnInit(): void {
    this.getPodcast();
  }

}
