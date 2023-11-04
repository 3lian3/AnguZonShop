import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ModalProductComponent } from './components/modal-product/modal-product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { BreadcrumbComponent } from './components/bread-crumb/breadcrumb.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductManufacturingComponent } from './components/product-tabs/product-manufacturing/product-manufacturing.component';
import { ProductCompositionComponent } from './components/product-tabs/product-composition/product-composition.component';
import { ProductDescriptionComponent } from './components/product-tabs/product-descriptions/product-descriptions.component';
import { ProductsCategoryComponent } from './components/products-category/products-category.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ProductListComponent,
    ProductItemComponent,
    ModalProductComponent,
    SigninComponent,
    SignupComponent,
    ProductComponent,
    BreadcrumbComponent,
    LoaderComponent,
    ProductDetailsComponent,
    ProductManufacturingComponent,
    ProductCompositionComponent,
    ProductDescriptionComponent,
    ProductsCategoryComponent,
    PageTitleComponent,
    HomeComponent,
    CartComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
