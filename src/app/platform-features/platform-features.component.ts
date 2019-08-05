import {Component, OnInit, TemplateRef, Inject} from '@angular/core';
import { MetaService } from '@ngx-meta/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';



export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-platform-features',
  templateUrl: './platform-features.component.html',
  styleUrls: ['./platform-features.component.css']
})
export class PlatformFeaturesComponent implements OnInit {
  modalRef: BsModalRef;
  public showModal: any = '';

  constructor(public dialog: MatDialog, private readonly meta: MetaService, private modalService: BsModalService) { }

  ngOnInit() {
    this.meta.setTitle('Salesvert | Features');
    this.meta.setTag('og:description', 'Salesvert | Features');
    this.meta.setTag('og:title', 'Salesvert | Features');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', '../../assets/images/sv_logo.png');
  }
  openFormModal(val: any, template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    console.log(val);
    this.showModal = val;
  }
  closep(){
    this.modalRef.hide();
  }
  openDialog(val: any): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      // width: '250px',
      data: {name: val}
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}



@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'modal.html',
})
export class DialogOverviewExampleDialog {

  constructor(
      public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}