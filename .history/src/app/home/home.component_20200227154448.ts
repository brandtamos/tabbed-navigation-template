import { Component, ChangeDetectionStrategy, OnInit, AfterViewInit } from "@angular/core";

import { DataService, DataItem } from "../shared/data.service";
import { User } from "../shared/data.service";
@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit, AfterViewInit {
    items: Array<DataItem>;
    public data: DataService;

    constructor(data: DataService) {
        this.data = data;
    }

    ngOnInit(): void {
        //this.items = this._itemService.getItems();
        
    }

    ngAfterViewInit() {
        this.data.getUsers()
            .subscribe(
                () =>  {
                    console.log('got some data');
                },
                () => {
                    alert('An error occured loading users');
                }
            )
    }


}
