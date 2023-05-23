import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Proyecto} from "../../../../shared/interfaces/proyecto";

@Component({
  selector: 'app-dialogoproyecto',
  templateUrl: './dialogoproyecto.component.html',
  styleUrls: ['./dialogoproyecto.component.css']
})
export class DialogoproyectoComponent {
  constructor(public dialogRef: MatDialogRef<DialogoproyectoComponent>, @Inject(MAT_DIALOG_DATA) public data: Proyecto){}

  cancelar(){
    this.dialogRef.close();
  }
}
