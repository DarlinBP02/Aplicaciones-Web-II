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
  pacientesList: any[] = [];
  examenesList: any[] = [];

  urlBackend = 'http://localhost:2500'; // Cambia la URL por la de tu backend

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.obtenerResultados();
    this.obtenerPacientes();
    this.obtenerExamenes();
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
    // Enviar un parámetro opcional 'tipo' para filtrar los resultados según sea necesario
    const tipo = 'ambos'; // Cambia 'ambos' por 'activos' o 'eliminados' según sea necesario
    this.http.get(`${this.urlBackend}/resultados?tipo=${tipo}`)
      .subscribe(
        (response: any) => {
          this.resultados = response.resultados;
        },
        error => {
          console.error('Error al obtener los resultados', error);
        }
      );
  }

  obtenerPacientes() {
    this.http.get(`${this.urlBackend}/pacientes`)
      .subscribe(
        (response: any) => {
          this.pacientesList = response.pacientes;
        },
        error => {
          console.error('Error al obtener la lista de pacientes', error);
        }
      );
  }

  obtenerExamenes() {
    this.http.get(`${this.urlBackend}/tipoexamen`)
      .subscribe(
        (response: any) => {
          this.examenesList = response.examen;
        },
        error => {
          console.error('Error al obtener la lista de exámenes', error);
        }
      );
  }
  obtenerResultadosActivos() {
    this.http.get(`${this.urlBackend}/resultados/activos`)
      .subscribe(
        (response: any) => {
          this.resultados = response.resultados;
        },
        error => {
          console.error('Error al obtener los resultados activos', error);
        }
      );
  }

  obtenerResultadosEliminados() {
    this.http.get(`${this.urlBackend}/resultados/eliminados`)
      .subscribe(
        (response: any) => {
          this.resultados = response.resultados;
        },
        error => {
          console.error('Error al obtener los resultados eliminados', error);
        }
      );
  }

  obtenerResultadosAmbos() {
    this.http.get(`${this.urlBackend}/resultados/ambos`)
      .subscribe(
        (response: any) => {
          this.resultados = response.resultados;
        },
        error => {
          console.error('Error al obtener todos los resultados', error);
        }
      );
  }
  editarResultado(resultado: any) {
    // Asignamos los valores del resultado seleccionado a las variables del formulario para que aparezcan pre-cargados
    this.pacientes = resultado.pacientes;
    this.examen = resultado.examen;
    this.resultadoExamen = resultado.ResultadoExamen;
    this.valorPagado = resultado.ValorPagado;
    this.observaciones = resultado.Observaciones;
  }
  

  eliminarResultado(id: string) {
    if (!confirm('¿Estás seguro de eliminar este resultado?')) {
      return;
    }
  
    
    this.http.delete(`${this.urlBackend}/resultados/${id}`)
      .subscribe(
        () => {
          console.log('Resultado eliminado exitosamente');
          this.obtenerResultados(); // Actualizar la lista de resultados después de eliminar uno.
        },
        error => {
          console.error('Error al eliminar el resultado', error);
        }
      );
  }
  
  restaurarResultado(id: string) {
    this.http.put(`${this.urlBackend}/resultados/restore/${id}`, {})
      .subscribe(
        (response: any) => {
          console.log('Resultado restaurado exitosamente');
          this.obtenerResultados(); // Actualizar la lista de resultados después de restaurar
        },
        error => {
          console.error('Error al restaurar el resultado', error);
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
