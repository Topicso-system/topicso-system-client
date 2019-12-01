import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VideoService } from '../shared/video/video.service';

@Component({
  selector: 'app-videos',
  templateUrl: './list-videos.component.html',
  styleUrls: ['./list-videos.component.sass']
})
export class ListVideosComponent implements OnInit {

  videos: Array<any>;

  constructor(private videoService: VideoService, private router: Router) { }

  ngOnInit() {
    this.videoService.getAll().subscribe(data => {
      this.videos = data;
    });
  }

  showVideo(videoId) {
    this.router.navigate(['/watchVideo']);
  }
}
