import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { CategroiesComponent } from './components/categroies/categroies.component';
import { BrandsComponent } from './components/brands/brands.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { DetailsComponent } from './components/details/details.component';
import { NavBlankComponent } from './components/nav-blank/nav-blank.component';
import { NavAuthComponent } from './components/nav-auth/nav-auth.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './components/blank-layout/blank-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpRequest} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TermtextPipe } from './termtext.pipe';
import { SearchPipe } from './search.pipe';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { DetailsBrandComponent } from './components/details-brand/details-brand.component';
import { WishlastComponent } from './components/wishlast/wishlast.component';
import { DetailsCategrComponent } from './components/details-categr/details-categr.component';
import { CashComponent } from './components/cash/cash.component';
import { TextdatePipe } from './textdate.pipe';
import { AllordersComponent } from './components/allorders/allorders.component';
import { MyHttpInterceptor } from './my-http.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    ProductsComponent,
    CategroiesComponent,
    BrandsComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent,
    DetailsComponent,
    NavBlankComponent,
    NavAuthComponent,
    AuthLayoutComponent,
    BlankLayoutComponent,
    TermtextPipe,
    SearchPipe,
    CheckoutComponent,
    DetailsBrandComponent,
    WishlastComponent,
    DetailsCategrComponent,
    CashComponent,
    TextdatePipe,
    AllordersComponent,





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    CommonModule,
    ToastrModule.forRoot(),


  ],
  providers: [{provide:HTTP_INTERCEPTORS , useClass:MyHttpInterceptor , multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
