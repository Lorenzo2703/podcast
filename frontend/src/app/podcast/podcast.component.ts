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
  list1: any = [];
  parsedContent: any;
  like = [false];

  description: any = [];

  getPodcast() {
    this.ajax.get().subscribe((res) => {
      this.list1 = res;
      this.list1.forEach((element: any, index: any) => {
        this.list[index] = element;
      });
      this.list.forEach((element: any) => {
        this.description.push(marked(element.Description));
      });

    })
  }

  comingSoon() {
    for (let i = 0; i < 12; i++) {
      this.list[i] =
      {
        Author: "🤐",
        Description: "More content incoming",
        Image: {
          formats: {
            small: [{ url: "" }]
          }
        },
        Title: "Coming Soon "
      }
    }
    this.getPodcast();


  }



  openModal(event: any) {

    this.dialog.open(ModalComponent, { autoFocus: false, position: { top: (event.clientY + 15) + "px", left: (event.clientX + 15) + "px" } });

  }

  ngOnInit(): void {
    this.comingSoon();
    // this.getPodcast();
  }

}
