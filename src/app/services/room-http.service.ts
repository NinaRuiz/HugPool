import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomHttpService {

  constructor(private httpClient: HttpClient) { }
  public get(id: string) {
    return this.httpClient.get('/assets/api/room.json');
  }
}

