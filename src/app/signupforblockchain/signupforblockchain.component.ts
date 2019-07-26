import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-signupforblockchain',
  templateUrl: './signupforblockchain.component.html',
  styleUrls: ['./signupforblockchain.component.css']
})
export class SignupforblockchainComponent implements OnInit {
  blockchainUrl: SafeResourceUrl;
  constructor( private sanitizer: DomSanitizer) {
    this.blockchainUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://artistxp.com/signupforblockchain");
  }

  ngOnInit() {
  }

}
