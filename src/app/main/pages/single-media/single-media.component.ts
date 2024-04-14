import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { MediaElement } from '../../../models/media.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-single-media',
  templateUrl: './single-media.component.html',
  styleUrl: './single-media.component.css'
})
export class SingleMediaComponent implements OnInit{

  public mediaElement?: MediaElement;
  public id:any

  constructor(

    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {


    this.activatedRoute.params.pipe(
      switchMap(params => this.apiService.getMediaById(params['id']))
    ).subscribe(media => {
      if (!media) {
        this.router.navigate(['/inicio/media']);
      } else {
        this.mediaElement = media;
      }
    }, error => {
      this.router.navigate(['/inicio/media']);
    });
  }

}
