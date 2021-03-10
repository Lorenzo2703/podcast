import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AjaxService } from '../ajax.service';
import * as marked from "marked";
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.css']
})
export class PodcastComponent implements OnInit {

  constructor(private ajax: AjaxService, private dialog: MatDialog) { }


  list: any = [];
  parsedContent: any;
  like = [false];

  description: any = [];

  getPodcast() {
    this.ajax.getPodcast().subscribe((res) => {
      this.list = res;
      this.list.forEach((element: any) => {
        this.description.push(marked(element.Description));
      });

    })
  }



  openModal(event: any) {
    this.dialog.open(ModalComponent, { autoFocus: false, position: { top: (event.clientY + 15) + "px", left: (event.clientX + 15) + "px" } });
  }

  ngOnInit(): void {
    this.getPodcast();
  }

}
