import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { SpecialOffersComponent } from './special-offers/special-offers.component';
import { BannerComponent } from './banner/banner.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { NewsComponent } from './news/news.component';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './blog/blog.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { AddOffersComponent } from './add-offers/add-offers.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { HomeComponent } from './home/home.component';
import { PreviewComponent } from './preview/preview.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    AboutUsComponent,
    BenefitsComponent,
    SpecialOffersComponent,
    BannerComponent,
    TestimonialsComponent,
    NewsComponent,
    FooterComponent,
    BlogComponent,
    PageHeaderComponent,
    AddOffersComponent,
    ShoppingCartComponent,
    BlogPostComponent,
    HomeComponent,
    PreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
