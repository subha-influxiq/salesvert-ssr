import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(private readonly meta: MetaService) { }

  ngOnInit() {
    this.meta.setTitle('Salesvert | Contact Us');
    this.meta.setTag('og:description', 'Salesvert | Contact Us');
    this.meta.setTag('og:title', 'Salesvert | Contact Us');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', '../../assets/images/sv_logo.png');
  }

}
