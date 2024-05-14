import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItemDivider, IonButton } from '@ionic/angular/standalone';
import { single } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
  standalone: true,
  imports: [IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItemDivider]
})
export class ProductPage implements OnInit {


  constructor(private http: HttpClient) { }

  singleProduct: any;
  addToCart() {
    console.log(this.singleProduct + ' Product added to cart');
  }
  ngOnInit() {
    this.http.get<any>('http://makeup-api.herokuapp.com/api/v1/products/1048.json')
      .subscribe((data) => {
        this.singleProduct = data;
        console.log(data);
      });
  }
}
