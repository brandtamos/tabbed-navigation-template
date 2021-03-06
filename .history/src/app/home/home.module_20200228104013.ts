import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { ItemDetailComponent } from "./item-detail/item-detail.component";
import { FilterPipe } from "../shared/filter.pipe";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        HomeRoutingModule
    ],
    declarations: [
        HomeComponent,
        ItemDetailComponent,
        FilterPipe
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers: [
        FilterPipe
    ]
})
export class HomeModule { }
