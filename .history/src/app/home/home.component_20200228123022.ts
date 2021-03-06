import { Component, ChangeDetectionStrategy, OnInit, AfterViewInit } from "@angular/core";

import { DataService, DataItem, Member } from "../shared/data.service";
import { Subscription } from "rxjs";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, AfterViewInit {
    //items: Array<DataItem>;
    members: Array<Member>;
    memberSubscription: Subscription;

    public data: DataService;
    searchText: string;

    constructor(data: DataService) {
        this.data = data;
    }

    ngOnInit(): void {
        //this.items = this._itemService.getItems();
        this.data.getMembers();
        this.memberSubscription = this.data.members.subscribe(data =>{
            this.members = data;
        })
    }

    ngAfterViewInit() {
        // this.data.members.subscribe(
        //     (data) => {
        //         this.members = data
        //     });

        // this.data.getMembers()
        //     .subscribe(
        //         () =>  {
        //             console.log('got some data');
        //         },
        //         (error) => {
        //             alert('An error occured loading users: ' + error);
        //         }
        //     )
    }



}
