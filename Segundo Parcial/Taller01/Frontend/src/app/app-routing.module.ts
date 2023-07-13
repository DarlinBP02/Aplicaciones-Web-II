import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { ResultadosComponent } from './resultados/resultados.component';

const routes: Routes = [
  { path: '', redirectTo: '/formulario', pathMatch: 'full' },
  { path: 'formulario', component: FormularioComponent },
  { path: 'pacientes', component: PacientesComponent },
  { path: 'resultados', component: ResultadosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
