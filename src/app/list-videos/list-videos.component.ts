import { Component, OnInit } from '@angular/core';
import { VideoService } from '../shared/video/video.service';

@Component({
  selector: 'app-videos',
  templateUrl: './list-videos.component.html',
  styleUrls: ['./list-videos.component.sass']
})
export class ListVideosComponent implements OnInit {
  
  videos: Array<any>;

  constructor(private videoService: VideoService) { }

  ngOnInit() {
    this.videoService.getAll().subscribe(data => {
      this.videos = data;
    });
  }

  showVideo(videoId) {

  }
}
