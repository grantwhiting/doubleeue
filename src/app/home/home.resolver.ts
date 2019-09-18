import { Injectable } from "@angular/core";
import { Resolve } from '@angular/router';
import { CategoriesService } from '../services/categories.service';

@Injectable()
export class HomeResolver implements Resolve<any> {
    
    constructor(private categoriesService: CategoriesService) {}

    resolve() {
        return this.categoriesService.getPosts();
    }
}