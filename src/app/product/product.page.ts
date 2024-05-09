import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardHeader, IonCardTitle, IonCardContent]
})
export class ProductPage implements OnInit {


  constructor(private http: HttpClient) { }

  singleProduct: any;
  ngOnInit() {
    this.http.get<any>('http://makeup-api.herokuapp.com/api/v1/products/1048.json')
      .subscribe((data) => {
        this.singleProduct = data;
        console.log(data);
      });
  }
}
