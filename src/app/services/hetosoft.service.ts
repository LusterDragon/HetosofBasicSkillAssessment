import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import { Ihetosoft } from '../models/ihetosoft';




@Injectable({
  providedIn: 'root'
})
export class HetosoftService {
apiUrl = "http://hetosoft.ddns.com.br:8086/api/Geral/GetSACSistemas";

  constructor(private httpClient:HttpClient) { }

  getItens():Observable<Ihetosoft[]>{
    return this.httpClient.get<Ihetosoft[]>(this.apiUrl);
  }

}
