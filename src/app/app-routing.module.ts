import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDescriptionComponent } from './components/product-tabs/product-descriptions/product-descriptions.component';
import { ProductManufacturingComponent } from './components/product-tabs/product-manufacturing/product-manufacturing.component';
import { ProductCompositionComponent } from './components/product-tabs/product-composition/product-composition.component';
import { ProductsCategoryComponent } from './components/products-category/products-category.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'product-list', component: MainComponent, pathMatch: 'full' },
  {
    path: 'product/:slug',
    component: ProductComponent,
    children: [
      {
        path: '',
        redirectTo: 'description',
        pathMatch: 'prefix',
      },
      {
        path: 'description',
        component: ProductDescriptionComponent,
      },
      {
        path: 'manufacturing',
        component: ProductManufacturingComponent,
      },
      {
        path: 'composition',
        component: ProductCompositionComponent,
      },
    ],
  },
  { path: 'category', component: ProductsCategoryComponent, pathMatch: 'full' },
  { path: 'category/:slug', component: ProductsCategoryComponent, pathMatch: 'full' },
  { path: 'signin', component: SigninComponent, pathMatch: 'full' },
  { path: 'signup', component: SignupComponent, pathMatch: 'full' },
  { path: 'cart', component: CartComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
