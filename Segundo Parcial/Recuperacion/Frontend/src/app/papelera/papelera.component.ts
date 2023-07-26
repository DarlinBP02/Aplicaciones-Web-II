import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-papelera',
  templateUrl: './papelera.component.html',
  styleUrls: ['./papelera.component.css']
})
export class PapeleraComponent implements OnInit {

  papeleras: any[] = [];

  urlBackend = 'http://localhost:2500'; // Cambia la URL por la de tu backend

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.obtenerPapelera();
  }

    obtenerPapelera() {
      this.http.get(`${this.urlBackend}/papelera`)
        .subscribe(
          (response: any) => {
            this.papeleras = response.registrosPapelera;
          },
          error => {
            console.error('Error al obtener los papelera', error);
          }
        );
  }
  restaurarData(id: string) {
    this.http.put(`${this.urlBackend}/papelera/restaurar/${id}`, {})
      .subscribe(
        (response: any) => {
          console.log('Resultado restaurado exitosamente');
          this.obtenerPapelera(); 
        },
        error => {
          console.error('Error al restaurar el resultado', error);
        }
      );
  }
}


