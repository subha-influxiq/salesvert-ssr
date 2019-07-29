import { Component, OnInit, Inject } from '@angular/core';
//import { BsModalService, BsModalRef } from "ngx-bootstrap";
import { Router } from "@angular/router";
// import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';



@Component({
  selector: 'app-funnel',
  templateUrl: './funnel.component.html',
  styleUrls: ['./funnel.component.css']
})
export class FunnelComponent implements OnInit {
  // modalRef: BsModalRef;
  public aspirepaymentsuitemodal:any = false;

  constructor( public dialog: MatDialog, public router: Router) { }

  ngOnInit() {
  }

  closep(){
    // this.modalRef.hide();
  }

  /* Open modal */
  showaspirepaymentsuitemodal(){     
    this.aspirepaymentsuitemodal = true;
      this.dialog.open(DialogDataExampleDialog, {});
  }   

}



@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'model.html',
})
export class DialogDataExampleDialog {
  constructor() {}
}