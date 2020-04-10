import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VideoService } from '../../service/video.service';


@Component({
  selector: 'app-video-grid',
  templateUrl: './video-grid.component.html',
  styleUrls: ['./video-grid.component.sass']
})
export class VideoGridComponent implements OnInit {

  categoryId: String;
  videos: Array<any>;
  

  constructor(private videoService: VideoService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.categoryId = params.get('youtubeId');
    })

    this.videoService.getAll().subscribe(data => {
      this.videos = data;
    });
  }

  showVideo(videoId) {
    console.log(videoId);
    this.router.navigate(['/watchVideo', videoId]);
  }
}
