import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http: HttpClient) { }
  public getPosts(): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts`)
  }
}
export class AlbumsService {
  constructor(private http: HttpClient) { }
  public getAlbums(): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/albums`)
  }
}
export class TodosService {
  constructor(private http: HttpClient) { }
  public getTodos(): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/todos`)
  }
}
