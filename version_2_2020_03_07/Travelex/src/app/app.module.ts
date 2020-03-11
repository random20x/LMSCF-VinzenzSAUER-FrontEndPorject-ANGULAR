import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { CommercialsComponent } from './commercials/commercials.component';
import { BlogComponent } from './blog/blog.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SmallHeaderComponent } from './small-header/small-header.component';
import { NewsComponent } from './news/news.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AdventuresComponent } from './adventures/adventures.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    IntroComponent,
    BenefitsComponent,
    PortfolioComponent,
    TestimonialsComponent,
    CommercialsComponent,
    BlogComponent,
    FooterComponent,
    HomeComponent,
    SmallHeaderComponent,
    NewsComponent,
    ShoppingCartComponent,
    AdventuresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
