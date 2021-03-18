import { Component, OnInit } from '@angular/core';
import { AjaxService } from '../ajax.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private ajax: AjaxService) { }

  ngOnInit(): void {
    this.getMembers();
  }

  listaMembers: any = [];


  getMembers() {
    this.ajax.getMembers().subscribe((res) => {
      this.listaMembers = res;
     

    })
  }



}
