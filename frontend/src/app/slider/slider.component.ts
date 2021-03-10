import { Component, OnInit } from '@angular/core';
import { AjaxService } from '../ajax.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor(private ajax: AjaxService) { }

  listaMembers: any = [];
  list: any = [];

  getMembers() {
    this.ajax.getMembers().subscribe((res) => {
      this.listaMembers = res;
      this.listaMembers = this.listaMembers.sort(() => Math.random() - 0.5);
      for (let i = 0; i < 5; i++) {
        this.list[i] = this.listaMembers[i];

      }
    })

  }


  ngOnInit(): void {
    this.getMembers();
  }

}
