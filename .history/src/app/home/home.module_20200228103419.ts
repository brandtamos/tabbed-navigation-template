import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { ItemDetailComponent } from "./item-detail/item-detail.component";
import { FilterPipePipe } from "../filter-pipe.pipe";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        HomeRoutingModule,
        FilterPipePipe
    ],
    declarations: [
        HomeComponent,
        ItemDetailComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    exports: [
        FilterPipePipe
    ]
})
export class HomeModule { }
