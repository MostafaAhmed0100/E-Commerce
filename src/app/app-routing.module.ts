import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankLayoutComponent } from './components/blank-layout/blank-layout.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { CategroiesComponent } from './components/categroies/categroies.component';
import { BrandsComponent } from './components/brands/brands.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DetailsComponent } from './components/details/details.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { authGuard } from './shard/guards/auth.guard';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { DetailsBrandComponent } from './components/details-brand/details-brand.component';
import { WishlastComponent } from './components/wishlast/wishlast.component';
import { DetailsCategrComponent } from './components/details-categr/details-categr.component';
import { CashComponent } from './components/cash/cash.component';
import { AllordersComponent } from './components/allorders/allorders.component';

const routes: Routes = [

{path:''


,
canActivate:[authGuard],


component:BlankLayoutComponent
 ,
children:[
  {path:''  , redirectTo:'home'  , pathMatch:'full'},
  {path:'home'  , component:HomeComponent},
  {path:'cart' ,  component:CartComponent},
  {path:'products' , component:ProductsComponent},
  {path:'categories' , component:CategroiesComponent},
  {path:'brands'  , component:BrandsComponent},
  {path:'details/:id'  , component:DetailsComponent},
  {path:'checkout/:id'  ,  component:CheckoutComponent},
  {path:'Details/:id'   , component:DetailsBrandComponent},
  {path:'wishlist'  , component:WishlastComponent},
  {path:'detailsCateroies/:id' , component:DetailsCategrComponent},
  {path:'cash/:id' , component:CashComponent},
  {path:'allorders' , component:AllordersComponent}

]},
{path:''  ,
 component:AuthLayoutComponent
  ,
children:
[
  {path:'login'  , component:LoginComponent},
  {path:'register'  , component:RegisterComponent},
]},

{path:'**' , component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
