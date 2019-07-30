import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-aspire-payment-suite',
  templateUrl: './aspire-payment-suite.component.html',
  styleUrls: ['./aspire-payment-suite.component.css']
})
export class AspirePaymentSuiteComponent implements OnInit {
  paymentSuiteUrl: SafeResourceUrl;
  constructor( private sanitizer: DomSanitizer) {
    this.paymentSuiteUrl = this.sanitizer.bypassSecurityTrustResourceUrl("http://virtualpayment.betoparedes.com/Aspire-Payment-Suite");
   }

  ngOnInit() {
  }

}
