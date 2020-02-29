import { Component, ChangeDetectionStrategy, OnInit, AfterViewInit, NgZone } from "@angular/core";

import { DataService, Member } from "../shared/data.service";
import { Subscription, BehaviorSubject } from "rxjs";
import { SearchBar } from "tns-core-modules/ui/search-bar";
@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, AfterViewInit {
    membersBS: BehaviorSubject<Array<Member>> = new BehaviorSubject([]);
    memberSubscription: Subscription;
    private members: Array<Member>;
    public dataService: DataService;

    loading: boolean = true;
    loaderVisibility: string = 'visible';

    constructor(dataService: DataService, private zone: NgZone) {
        this.dataService = dataService;
    }

    ngOnInit(): void {
        this.showLoader();
        this.memberSubscription = this.dataService.members.subscribe(data =>{
            this.zone.run(() => {
                this.members = data;
                this.membersBS.next([...this.members]);
                this.hideLoader();
            });
        });
        this.memberSubscription = this.dataService.getMembers().subscribe();
    }

    ngAfterViewInit() {
    }

    searchMembers(event){
        const searchBar = event.object as SearchBar;
        const searchText = searchBar.text;
        if(searchText == ''){
            this.zone.run(() => {
                this.membersBS.next([...this.members]);
            });
        }
        else{
            const filteredList = this.members.filter(member => {
                return member.name.toLowerCase().includes(searchText.toLowerCase());
            });
    
            this.zone.run(() => {
                this.membersBS.next(filteredList);
            });
        }
        
    }

    private showLoader(): void {
        this.loading = true;
        this.loaderVisibility = 'visible';
      }
    
      private hideLoader(): void{
        this.loading = false;
        this.loaderVisibility = 'collapsed';
      }
}
