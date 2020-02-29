import { Component, ChangeDetectionStrategy, OnInit, AfterViewInit } from "@angular/core";

import { DataService, DataItem, Member } from "../shared/data.service";
import { Subscription, BehaviorSubject } from "rxjs";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, AfterViewInit {
    //items: Array<DataItem>;
    members: BehaviorSubject<Array<Member>>;
    memberSubscription: Subscription;

    public dataService: DataService;
    searchText: string;

    constructor(dataService: DataService) {
        this.dataService = dataService;
    }

    ngOnInit(): void {
        //this.items = this._itemService.getItems();
        this.members = new BehaviorSubject<Array<Member>>([]);
        this.dataService.getMembers();
        this.memberSubscription = this.dataService.members.subscribe(data =>{
            this.members.next(data);
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
