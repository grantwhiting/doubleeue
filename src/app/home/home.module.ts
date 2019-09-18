import { NgModule } from "@angular/core";
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeResolver } from './home.resolver';

const COMPONENTS = [
    HomeComponent
];

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule
    ],
    declarations: [COMPONENTS],
    providers: [HomeResolver]
})
export class HomeModule {
}
