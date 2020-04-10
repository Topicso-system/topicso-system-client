import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-list-item',
  templateUrl: './video-list-item.component.html',
  styleUrls: ['./video-list-item.component.sass']
})
export class VideoListItemComponent implements OnInit {

  @Input('video')
  video: any = {};

  constructor() { }

  ngOnInit() {
  }

}
