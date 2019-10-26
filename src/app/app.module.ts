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
import { WeddingsComponent } from './weddings/weddings.component';
import { CardsComponent } from './cards/cards.component';
import { CustomComponent } from './custom/custom.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    NavigationComponent,
    MobileNavigationComponent,
    WeddingsComponent,
    CardsComponent,
    CustomComponent,
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
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
