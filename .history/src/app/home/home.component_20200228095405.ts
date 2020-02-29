import { Component, ChangeDetectionStrategy, OnInit, AfterViewInit } from "@angular/core";

import { DataService, DataItem } from "../shared/data.service";
import { ERROR_COMPONENT_TYPE } from "@angular/compiler";
import { SearchBar } from "tns-core-modules/ui/search-bar";
@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, AfterViewInit {
    items: Array<DataItem>;
    public data: DataService;
    searchText: string;

    constructor(data: DataService) {
        this.data = data;
    }

    ngOnInit(): void {
        //this.items = this._itemService.getItems();
    }

    ngAfterViewInit() {
        this.data.getMembers()
            .subscribe(
                () =>  {
                    console.log('got some data');
                },
                (error) => {
                    alert('An error occured loading users: ' + error);
                }
            )
    }

    

}
