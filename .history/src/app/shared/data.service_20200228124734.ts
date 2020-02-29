import { Injectable, NgZone } from "@angular/core";
import { HttpHeaders, HttpClient, HttpErrorResponse } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { BehaviorSubject, throwError } from "rxjs";
export interface DataItem {
    id: number;
    name: string;
    description: string;
}

export class User {
    constructor(
        public id: number,
        public email: string,
        public first_name: string,
        public last_name: string,
        public avatar: string,
    ){}
}

export class Member {
    constructor(
        public memberid: number,
        public name: string,
        public beerCount: string
    ){}
}

@Injectable({
    providedIn: "root"
})
export class DataService {
    constructor(private http: HttpClient, private zone: NgZone) { }

    private _members: Array<Member>;
    members: BehaviorSubject<Array<Member>> = new BehaviorSubject([]);

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

    getMembers(){
        return this.http.get('https://mahaffeys-node-api.herokuapp.com/topdrinkers')
        .pipe(
            map((data: any) => {
            this._members = data
            .map(
                member => new Member(
                    0,
                    member.name,
                    member.beerCount
            ));
            this.publishMembers();
        })
    
    );
    }

    private publishMembers(){
        // Make sure all updates are published inside NgZone so that change detection is triggered if needed
        this.zone.run(() => {
        // must emit a *new* value (immutability!)
            this.members.next([...this._members]);
        });
    }
}
