import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.sass'],
  inputs: ['video']
})
export class VideoCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
