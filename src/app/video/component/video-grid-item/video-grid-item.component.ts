import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-grid-item',
  templateUrl: './video-grid-item.component.html',
  styleUrls: ['./video-grid-item.component.sass']
})
export class VideoGridItemComponent implements OnInit {

  @Input('video')
  video: any = {};

  constructor() { }

  ngOnInit() {
  }
}
