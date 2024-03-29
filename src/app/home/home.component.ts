import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private readonly meta: MetaService) { }

  ngOnInit() {
    this.meta.setTitle('Salesvert | Home');
    this.meta.setTag('og:description', 'Salesvert | Home');
    this.meta.setTag('og:title', 'Salesvert | Home');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', '../../assets/images/sv_logo.png');
  }

}
