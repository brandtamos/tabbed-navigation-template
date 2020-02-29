import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { HomeComponent } from "./home.component";
import { ItemDetailComponent } from "./item-detail/item-detail.component";
import { MemberDetailComponent } from "./member-detail/member-detail.component";

const routes: Routes = [
    { path: "default", component: HomeComponent },
    { path: "item/:id", component: ItemDetailComponent },
    { path: "member/:memberId", component: MemberDetailComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class HomeRoutingModule { }
