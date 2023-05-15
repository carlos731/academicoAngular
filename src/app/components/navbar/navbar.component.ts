import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() sideNavToggled = new EventEmitter<boolean>();
  menuStatus: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  SideNavToggle(){
    this.menuStatus = !this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
  }

}
