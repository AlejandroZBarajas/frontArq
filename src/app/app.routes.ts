import { Routes } from "@angular/router";

export const routes : Routes = [
  {path: 'users', loadChildren: () => import ('./users/users.module').then(m=> m.UsersModule) },
  {path: 'products', loadChildren:() => import ('./products/products.module').then(m => m.ProductsModule) },
  {path : '', redirectTo: 'users', pathMatch: 'full'},
  {path : "**", redirectTo: 'users'}
]

