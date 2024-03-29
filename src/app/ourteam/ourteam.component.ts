import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-ourteam',
  templateUrl: './ourteam.component.html',
  styleUrls: ['./ourteam.component.css']
})
export class OurteamComponent implements OnInit {

  constructor(private readonly meta: MetaService) { }

  ngOnInit() {
    this.meta.setTitle('Salesvert | Our Team');
    this.meta.setTag('og:description', 'Salesvert | Our Team');
    this.meta.setTag('og:title', 'Salesvert | Our Team');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', '../../assets/images/sv_logo.png');
  }
}
