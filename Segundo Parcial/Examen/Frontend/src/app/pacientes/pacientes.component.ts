import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {

  nombre!: string;
  identificacion!: number | null; // Cambiado a 'number | null'
  pacientes: any[] = [];

  urlBackend = 'http://localhost:2500'; // Cambia la URL por la de tu backend

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.obtenerPacientes();
  }

  guardarPaciente() {
    const paciente = {
      Nombre: this.nombre,
      Identificacion: this.identificacion
    };

    this.http.post(`${this.urlBackend}/pacientes`, paciente)
      .subscribe(
        () => {
          // Éxito: hacer algo después de guardar los datos, como limpiar el formulario o mostrar un mensaje de éxito
          console.log('Paciente guardado exitosamente');
          this.limpiarFormulario();
          this.obtenerPacientes(); // Actualizar la lista de pacientes
        },
        error => {
          // Error: manejar el error de la comunicación con el backend
          console.error('Error al guardar el paciente', error);
        }
      );
  }

  obtenerPacientes() {
    this.http.get(`${this.urlBackend}/pacientes`)
      .subscribe(
        (response: any) => {
          this.pacientes = response.pacientes;
        },
        error => {
          console.error('Error al obtener los pacientes', error);
        }
      );
  }

  limpiarFormulario() {
    this.nombre = '';
    this.identificacion = null;
  }

}
