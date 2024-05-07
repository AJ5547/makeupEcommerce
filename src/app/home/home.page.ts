import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCardTitle, IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonButton, IonNavLink } from '@ionic/angular/standalone';
import { ProductPage } from '../product/product.page';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonNavLink, IonButton, IonCard, IonCardTitle, IonHeader, IonToolbar, IonTitle, IonContent, IonCardHeader, IonCardSubtitle, IonCardContent, CommonModule],
})
export class HomePage {
  products: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    let headers = new HttpHeaders({
      'x-rapidapi-host': 'random-facts2.p.rapidapi.com',
      'x-rapidapi-key': 'your-api-key'
    });
    this.http.get<any>('http://makeup-api.herokuapp.com/api/v1/products.json?product_limit=99')
      .subscribe((data) => {
        this.products = data;
      });
  }
}
