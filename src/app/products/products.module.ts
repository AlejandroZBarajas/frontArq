import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsCardComponent } from './components/products-card/products-card.component';
import { ProductsSidebarComponent } from './sections/products-sidebar/products-sidebar.component';
import { ProductsPageComponent } from './page/products-page/products-page.component';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { CardsDisplayComponent } from './components/cards-display/cards-display.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

const routes : Routes = [
  {path: '', component: ProductsPageComponent}
]
@NgModule({
  declarations: [
    ProductsCardComponent,
    ProductsSidebarComponent,
    ProductsPageComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    RouterModule.forChild(routes),
    CoreModule,
    CardsDisplayComponent,

  ]
})
export class ProductsModule { }
