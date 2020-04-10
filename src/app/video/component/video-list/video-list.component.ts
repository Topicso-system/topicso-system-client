import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VideoService } from '../../service/video.service';

@Component({
  selector: 'app-videos',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.sass']
})
export class VideoListComponent implements OnInit {

  videos: Array<any>;

  constructor(private videoService: VideoService, private router: Router) { }

  ngOnInit() {
    this.videoService.getForCategory("1").subscribe(data => {
      this.videos = data;
    });
  }

  showVideo(videoId) {
    console.log(videoId);
    this.router.navigate(['/watchVideo', videoId]);
  }
}
