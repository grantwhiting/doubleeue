import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { WrapperComponent } from './layout/wrapper/wrapper.component';
import { NavigationComponent } from './navigation/navigation.component';
import {HomeModule} from './home/home.module';
import {ProductModule} from './product/product.module';
import {MatButtonModule} from '@angular/material';
import { MobileNavigationComponent } from './mobile-navigation/mobile-navigation.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import {AboutModule} from './about/about.module';
import {ContactModule} from './contact/contact.module';
import {CardsModule} from './cards/cards.module';
import {CustomModule} from './custom/custom.module';
import {WeddingsModule} from './weddings/weddings.module';
import {WindowRef} from './services/window.service';


@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    NavigationComponent,
    MobileNavigationComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    HomeModule,
    ProductModule,
    MatButtonModule,
    AboutModule,
    ContactModule,
    CardsModule,
    CustomModule,
    WeddingsModule
  ],
  bootstrap: [AppComponent],
  providers: [WindowRef]
})
export class AppModule { }
