import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { CoreModule } from "./core/core.module";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    CoreModule,
    ProductsModule,
    UsersModule,
    HttpClientModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
