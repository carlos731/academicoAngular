import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Router } from '@angular/router';
// import { ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  sideNavStatus: boolean = false;
  overlay: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['home']);
  }


  SideNavToggleBack(){
    this.sideNavStatus = false;
  }

}
