import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { ItemDetailComponent } from "./item-detail/item-detail.component";
import { FilterPipeModule } from "../shared/filterpipe.module";
import { MemberDetailComponent } from './member-detail/member-detail.component';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        HomeRoutingModule,
        FilterPipeModule
    ],
    declarations: [
        HomeComponent,
        ItemDetailComponent,
        MemberDetailComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }
