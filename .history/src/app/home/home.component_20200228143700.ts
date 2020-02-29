import { Component, ChangeDetectionStrategy, OnInit, AfterViewInit, NgZone } from "@angular/core";

import { DataService, DataItem, Member } from "../shared/data.service";
import { Subscription, BehaviorSubject } from "rxjs";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, AfterViewInit {
    //items: Array<DataItem>;
    members: BehaviorSubject<Array<Member>> = new BehaviorSubject([]);
    memberSubscription: Subscription;

    public dataService: DataService;
    searchText: string;

    constructor(dataService: DataService, private zone: NgZone) {
        this.dataService = dataService;
    }

    ngOnInit(): void {
        this.memberSubscription = this.dataService.members.subscribe(data =>{
            this.zone.run(() => {
                this.members.next(data);
            });
        });
        this.memberSubscription = this.dataService.getMembers().subscribe();
    }

    ngAfterViewInit() {
        //this.dataService.getMembers().subscribe();

        // this.data.members.subscribe(
        //     (data) => {
        //         this.members = data
        //     });

        // this.dataService.getMembers()
        //     .subscribe(
        //         () =>  {
        //             console.log('got some data');
        //         },
        //         (error) => {
        //             alert('An error occured loading users: ' + error);
        //         }
        //     );
    }



}
