import { Component, OnInit } from '@angular/core';
import { albums } from 'src/app/models/placeholder.model';
import { AlbumsService } from 'src/app/services/api.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.sass']
})
export class AlbumsComponent implements OnInit {
  albums: albums;
  erro: any;
  constructor(private albumsService: AlbumsService) {
    this.getterAlbums()
   }

  ngOnInit() {
  }
  getterAlbums() {
    this.albumsService.getAlbums().subscribe((data: albums) => {
      this.albums = data
    }, 
    (error: any) => {
      this.erro = error;
    });
  }

}