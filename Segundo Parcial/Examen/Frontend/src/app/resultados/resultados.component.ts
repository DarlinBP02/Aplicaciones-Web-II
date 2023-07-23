import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  pacientes!: string;
  examen!: string;
  resultadoExamen!: string;
  valorPagado!: number | null;
  observaciones!: string;
  resultados: any[] = [];

  urlBackend = 'http://localhost:2500'; // Cambia la URL por la de tu backend

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.obtenerResultados();
  }

  guardarResultado() {
    const resultado = {
      pacientes: this.pacientes,
      examen: this.examen,
      ResultadoExamen: this.resultadoExamen,
      ValorPagado: this.valorPagado,
      Observaciones: this.observaciones
    };

    this.http.post(`${this.urlBackend}/resultados`, resultado)
      .subscribe(
        () => {
          // Éxito: hacer algo después de guardar los datos, como limpiar el formulario o mostrar un mensaje de éxito
          console.log('Resultado guardado exitosamente');
          this.limpiarFormulario();
          this.obtenerResultados(); // Actualizar la lista de resultados
        },
        error => {
          // Error: manejar el error de la comunicación con el backend
          console.error('Error al guardar el resultado', error);
        }
      );
  }

  obtenerResultados() {
    this.http.get(`${this.urlBackend}/resultados`)
      .subscribe(
        (response: any) => {
          this.resultados = response.resultados;
        },
        error => {
          console.error('Error al obtener los resultados', error);
        }
      );
  }

  limpiarFormulario() {
    this.pacientes = '';
    this.examen = '';
    this.resultadoExamen = '';
    this.valorPagado = null;
    this.observaciones = '';
  }
}
