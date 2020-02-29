import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from '@angular/common/http'; 
import { FilterPipePipe } from './filter-pipe.pipe';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        HttpClientModule
    ],
    declarations: [
        AppComponent,
        FilterPipePipe
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    exports: [
        FilterPipePipe
    ]
})
export class AppModule { }
