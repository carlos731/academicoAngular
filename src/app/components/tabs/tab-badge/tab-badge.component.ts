import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { Badge } from 'src/app/models/badge';
import { BadgeNivel } from 'src/app/models/badgeNivel';

import { BadgeService } from 'src/app/services/badge.service';
import { BadgeNivelService } from 'src/app/services/badge-nivel.service';

/*Formulários*/
import { FormBadgeCreateComponent } from 'src/app/components/forms/form-badge-create/form-badge-create.component';
import { FormBadgeNivelComponent } from 'src/app/components/forms/form-badge-nivel/form-badge-nivel.component';

/*Modals*/
import { DeleteComponent } from 'src/app/components/modals/delete/delete.component';

@Component({
  selector: 'app-tab-badge',
  templateUrl: './tab-badge.component.html',
  styleUrls: ['./tab-badge.component.css']
})
export class TabBadgeComponent implements OnInit {

  @Input() tabsArray: string[] = [];
  @Output() onTabChange = new EventEmitter<number>();
  activatedTab: number = 0;

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  openFormBadge(){
    this.matDialog.open(FormBadgeCreateComponent, {
      width: '350px',
    });
  }

  openFormBadgeNivel(){
    this.matDialog.open(FormBadgeNivelComponent, {
      width: '350px',
    });
  }

  setTab(index: number){
    this.activatedTab = index;
    // debugger;
    this.onTabChange.emit(this.activatedTab);
  }

}
