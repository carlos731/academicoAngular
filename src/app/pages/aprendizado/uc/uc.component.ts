import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { FormObjetoCreateComponent } from 'src/app/components/forms/form-objeto-create/form-objeto-create.component';
@Component({
  selector: 'app-uc',
  templateUrl: './uc.component.html',
  styleUrls: ['./uc.component.css']
})
export class UcComponent implements OnInit {

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  openFormObjetoAprendizagem(){
    this.matDialog.open(FormObjetoCreateComponent, {
      width: '350px',
    });
  }

}
