import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SpecialOffersComponent } from './special-offers/special-offers.component';
import { BlogComponent } from './blog/blog.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';





const routes: Routes = [
  {
    path:"", component: HomeComponent,
  },
  {
    path:"blog", component: BlogComponent,
  },
  {
    path:"travel", component: SpecialOffersComponent,
  },
  {
    path: 'blogpost/:postId', component: BlogPostComponent,
  },
  {
    path: 'shoppingcart', component: ShoppingCartComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
