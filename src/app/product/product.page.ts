import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItemDivider, IonButton, IonItem } from '@ionic/angular/standalone';
import { single } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
  standalone: true,
  imports: [IonItem, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItemDivider]
})
export class ProductPage implements OnInit {


  constructor(private http: HttpClient) { }
  apiUrl = 'http://makeup-api.herokuapp.com/api/v1/products.json?product_tags=';
  productUrl = 'http://makeup-api.herokuapp.com/api/v1/products/';
  dynamicProduct = '1032';
  similarProducts: any[] = [];
  singleProduct: any;
  addToCart() {
    console.log(' Product added to cart');
  }
  ngOnInit() {
    this.http.get<any>(`http://makeup-api.herokuapp.com/api/v1/products/${this.dynamicProduct}.json`)
      .subscribe((data) => {
        this.singleProduct = data;
        console.log(data);

        this.singleProduct.tag_list.forEach((tag: any[]) => {
          const dynamicValue = tag;
          const limiter = '&product_limit=10';
          const dynamicUrl = `${this.apiUrl}${dynamicValue}${limiter}`;

          console.log(dynamicUrl);
          this.http.get<any>(dynamicUrl)
            .subscribe((similar) => {
              this.similarProducts = [...similar];
              console.log(this.similarProducts.slice(1, 10)); // Logging first 6 similar products
            });
        });
      });
  }

}
