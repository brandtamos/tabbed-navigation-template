import { Injectable, NgZone } from "@angular/core";
import { HttpHeaders, HttpClient, HttpErrorResponse } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { BehaviorSubject, throwError } from "rxjs";
export interface DataItem {
    id: number;
    name: string;
    description: string;
}

export class Member {
    constructor(
        public memberId: string,
        public name: string,
        public beerCount: string
    ){}
}

export class Beer {
    constructor(
        public beerName: string,
        public beerServeStyle: string,
        public beerServeStyleCode: string
    ){}
}

@Injectable({
    providedIn: "root"
})
export class DataService {
    constructor(private http: HttpClient, private zone: NgZone) { }

    private _members: Array<Member>;
    members: BehaviorSubject<Array<Member>> = new BehaviorSubject([]);

    private _beers: Array<Beer>;
    beers: BehaviorSubject<Array<Beer>> = new BehaviorSubject([]);

    private items = new Array<DataItem>(
        {
            id: 1,
            name: "Item 1",
            description: "Description for Item 1"
        },
        {
            id: 2,
            name: "Item 2",
            description: "Description for Item 2"
        }
    );

    getItems(): Array<DataItem> {
        return this.items;
    }

    getItem(id: number): DataItem {
        return this.items.filter((item) => item.id === id)[0];
    }

    getTopDrinkers(){
        return this.http.get('https://mahaffeys-node-api.herokuapp.com/topdrinkers')
        .pipe(
            map((data: any) => {
            this._members = data
            .map(
                member => new Member(
                    '0',
                    member.name,
                    member.beerCount
                ));
                this.publishMembers();
            })
        );
    }

    getMembers(){
        return this.http.get('https://mahaffeys-node-api.herokuapp.com/members')
        .pipe(
            map((data: any) => {
            this._members = data
            .map(
                member => new Member(
                    member.memberId,
                    member.name,
                    ''
                ));
                this.publishMembers();
            })
        );
    }

    getMemberBeersByMemberId(memberId: string){
        return this.http.get('https://mahaffeys-node-api.herokuapp.com/members/beers')
        .pipe(
            map((data: any) => {
            this._beers = data
            .map(
                beer => new Beer(
                    beer.name,
                    beer.beerServeStyle,
                    beer.beerServeStyleCode
                ));
                this.publishBeers();
            })
        );
    }
       
    getMemberById(memberId: string){
        return this._members.filter((member) => {
            return member.memberId == memberId;
        })
    }

    private publishMembers(){
        // Make sure all updates are published inside NgZone so that change detection is triggered if needed
        this.zone.run(() => {
        // must emit a *new* value (immutability!)
            this.members.next([...this._members]);

        });
    }

    private publishBeers(){
        this.zone.run(() => {
            this.beers.next([...this._beers]);
        });
    }
}
