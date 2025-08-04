import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegistroTareasComponent } from './pages/registro-tareas/registro-tareas.component';
import { ListaTareasComponent } from './pages/lista-tareas/lista-tareas.component';
import { DetalleTarreasComponent } from './pages/detalle-tarreas/detalle-tarreas.component';


export const routes: Routes = [
    {path: 'home', component:HomeComponent},
    {path: 'registroTareas', component:RegistroTareasComponent},
    {path: 'listaTareas', component:ListaTareasComponent},
    {path: 'detalleTareas', component:DetalleTarreasComponent},
    {path: '',redirectTo: '/home', pathMatch: 'full'}
    
];

