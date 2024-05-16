import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCardTitle, IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonButton, IonNavLink, IonSearchbar, IonSelect, IonSelectOption } from '@ionic/angular/standalone';
import { ProductPage } from '../product/product.page';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonNavLink, IonButton, IonCard, IonCardTitle, IonHeader, IonToolbar, IonTitle, IonContent, IonCardHeader, IonCardSubtitle, IonCardContent, CommonModule, IonSearchbar, IonSelect, IonSelectOption],
})
export class HomePage {
  products: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    let headers = new HttpHeaders({
      'x-rapidapi-host': 'random-facts2.p.rapidapi.com',
      'x-rapidapi-key': 'your-api-key'
    });
    this.http.get<any>('http://makeup-api.herokuapp.com/api/v1/products.json')
      .subscribe((data) => {
        this.products = data.slice(0, 50);
        console.log(this.products);
      });
  }
}
