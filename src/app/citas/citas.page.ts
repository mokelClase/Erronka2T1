import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.page.html',
  styleUrls: ['./citas.page.scss'],
})
export class CitasPage {
  today: string; // Fecha mínima para el calendario
  selectedDate: string | null = null; // Fecha seleccionada vinculada a [(ngModel)]
  services = [
    { name: 'Corte de cabello largo', selected: false },
    { name: 'Tinte completo', selected: false },
    { name: 'Peinado especial', selected: false },
    { name: 'Lavado y secado', selected: false },
  ];
  showErrorMessage = false; // Controla la visibilidad del mensaje de error

  constructor(private router: Router, private alertController: AlertController) {
    // Configuración de la fecha mínima
    this.today = new Date().toISOString();
  }

  

  /**
   * Verifica si el botón "Baieztatu" debe estar habilitado.
   */
  isButtonDisabled(): boolean {
    return !(this.services.some((service) => service.selected) && this.selectedDate);
  }

  /**
   * Maneja el evento de clic en el botón "Baieztatu".
   */
  onSubmit(): void {
    if (!this.selectedDate || !this.services.some((service) => service.selected)) {
      this.showErrorMessage = true;
    } else {
      console.log('Cita confirmada');
      this.showErrorMessage = false;
    }
  }

  /**
   * Alterna el estado seleccionado de un servicio.
   */
  toggleService(service: { name: string; selected: boolean }): void {
    service.selected = !service.selected;
  }

  /**
   * Maneja cambios en la fecha seleccionada.
   */
  onDateChange(event: any): void {
    this.selectedDate = event.detail.value;
    console.log('Fecha seleccionada:', this.selectedDate);
  }
}
