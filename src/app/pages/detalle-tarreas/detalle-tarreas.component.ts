import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FirebaseService } from '../../services/firebase.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle-tarreas',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './detalle-tarreas.component.html',
  styleUrl: './detalle-tarreas.component.css'
})
export class DetalleTarreasComponent implements OnInit {
  id: string | null = null;
  cedula: any = '';
  nombre: any = '';
  apellido: any = '';
  email: any = '';
  telefono: any = '';
  tarea: any = '';

  tareas: any[] = [];
  mensaje: string = '';

  servicio = inject(FirebaseService);

  ngOnInit() {
    this.cargartareas();
  }

  cargartareas() {
    this.servicio.gettareas().subscribe(data => {
      if (data) {
        this.tareas = Object.entries(data).map(([key, value]: any) => ({
          id: key,
          ...value
        }));
      } else {
        this.tareas = [];
      }
    }, error => {
      console.error('Error al cargar tareas:', error);
    });
  }

  guardar(formulario: any) {
    const tarea = {
      cedula: this.cedula,
      nombre: this.nombre,
      apellido: this.apellido,
      email: this.email,
      telefono: this.telefono,
      tarea: this.tarea
    };

    if (this.id) {
      this.servicio.puttarea(this.id, tarea).subscribe({
        next: () => {
          alert('✅ Información actualizada correctamente.');
          this.limpiarFormulario(formulario);
          this.cargartareas();
        },
        error: () => alert('❌ Error al actualizar la información.')
      });
    } else {
      this.servicio.posttarea(tarea).subscribe({
        next: () => {
          alert('✅ Información guardada correctamente.');
          this.limpiarFormulario(formulario);
          this.cargartareas();
        },
        error: () => alert('❌ Error al guardar la información.')
      });
    }
  }

  editartarea(tarea: any) {
    this.id = tarea.id;
    this.cedula = tarea.cedula;
    this.nombre = tarea.nombre;
    this.apellido = tarea.apellido;
    this.email = tarea.email;
    this.telefono = tarea.telefono;
    this.tarea = tarea.tarea;
  }

  eliminartarea(id: string) {
    if (confirm('¿Estás seguro de eliminar este tarea?')) {
      this.servicio.deletetarea(id).subscribe({
        next: () => {
          alert('tarea eliminado correctamente.');
          this.cargartareas();
        },
        error: () => alert('Error al eliminar tarea.')
      });
    }
  }

  limpiarFormulario(formulario: any) {
    this.id = null;
    formulario.resetForm();
  }
}
