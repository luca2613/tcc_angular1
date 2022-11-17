import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:HttpClient) { }

  apiUrl = 'http://localhost:3000';
  menuNormal: Boolean = true;
  menuAutor: Boolean = false;

  //login
  login(data:any):Observable<any> {
    return this.http.post(`${this.apiUrl}/autor/login`,data);
    
  }

  getToken() {
    return localStorage.getItem('token');
  } 

  getId() {
    return localStorage.getItem('id_autor');
  }

  getNome() {
    return localStorage.getItem('nome');
  }
  
  
  //livros
  getLivros():Observable<any> {
    return this.http.get(`${this.apiUrl}/livros`);
  }

  getLivroById(id:any):Observable<any> {
    return this.http.get(`${this.apiUrl}/livros/${id}`);
  }

  getLivrosByLast():Observable<any> {
    return this.http.get(`${this.apiUrl}/livros/lastLivros`);
  }

  getLivroByCategoria(id:any):Observable<any> {
    return this.http.get(`${this.apiUrl}/livros/categoria/${id}`);
  }

  //categorias
  getCategorias():Observable<any> {
    return this.http.get(`${this.apiUrl}/categorias`);
  }

}
