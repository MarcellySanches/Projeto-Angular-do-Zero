import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu-item';

@Component({
  selector: 'app-menu-responsivo',
  templateUrl: './menu-responsivo.component.html',
  styleUrls: ['./menu-responsivo.component.css']
})
export class MenuResponsivoComponent implements OnInit {

  menuItens: MenuItem[] = [
    {
      descricao: 'Home',
      icone: 'home',
      route: '/home',
      //os tipos boleanos definem se aparecerá em cada caso de tamanho de tela. True para aparecer, false para esconder.
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      descricao: 'About me',
      icone: 'person',
      route: '/about',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true

    },
    // {
    //   descricao: 'Pricing',
    //   icone: 'attach_money',
    //   showOnMobile: false,
    //   showOnTablet: false,
    //   showOnDesktop: true
    // },
    {
      descricao: 'Docs',
      icone: 'notes',
      route: '/docsangulardozero',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
    }
    // {
    //   descricao: 'Showcase',
    //   icone: 'slideshow',
    //   showOnMobile: false,
    //   showOnTablet: false,
    //   showOnDesktop: true
    // },
    // {
    //   descricao: 'Blog',
    //   icone: 'rss_feed',
    //   showOnMobile: false,
    //   showOnTablet: false,
    //   showOnDesktop: false
    // },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
