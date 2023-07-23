import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  descripcion!: string;
  indicaciones!: string;
  resultados!: string;
  examenes: any[] = [];

  urlBackend = 'http://localhost:2500'; // Cambia la URL por la de tu backend

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.obtenerExamenes();
  }

  guardarExamen() {
    const examen = {
      descripcion: this.descripcion,
      indicaciones: this.indicaciones,
      resultados: this.resultados
    };

    this.http.post(`${this.urlBackend}/tipoexamen`, examen)
      .subscribe(
        () => {
          // Éxito: hacer algo después de guardar los datos, como limpiar el formulario o mostrar un mensaje de éxito
          console.log('Examen guardado exitosamente');
          this.limpiarFormulario();
          this.obtenerExamenes(); // Actualizar la lista de exámenes
        },
        error => {
          // Error: manejar el error de la comunicación con el backend
          console.error('Error al guardar el examen', error);
        }
      );
  }

  obtenerExamenes() {
    this.http.get(`${this.urlBackend}/tipoexamen`)
      .subscribe(
        (response: any) => {
          this.examenes = response.examen;
        },
        error => {
          console.error('Error al obtener los exámenes', error);
        }
      );
  }

  limpiarFormulario() {
    this.descripcion = '';
    this.indicaciones = '';
    this.resultados = '';
  }

}
