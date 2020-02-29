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

@Injectable({
    providedIn: "root"
})
export class DataService {
    constructor(private http: HttpClient, private zone: NgZone) { }

    private allUsers: Array<User>;
    users: BehaviorSubject<Array<User>> = new BehaviorSubject([]);

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
        },
        {
            id: 3,
            name: "Item 3",
            description: "Description for Item 3"
        },
        {
            id: 4,
            name: "Item 4",
            description: "Description for Item 4"
        },
        {
            id: 5,
            name: "Item 5",
            description: "Description for Item 5"
        },
        {
            id: 6,
            name: "Item 6",
            description: "Description for Item 6"
        },
        {
            id: 7,
            name: "Item 7",
            description: "Description for Item 7"
        },
        {
            id: 8,
            name: "Item 8",
            description: "Description for Item 8"
        },
        {
            id: 9,
            name: "Item 9",
            description: "Description for Item 9"
        },
        {
            id: 10,
            name: "Item 10",
            description: "Description for Item 10"
        },
        {
            id: 11,
            name: "Item 11",
            description: "Description for Item 11"
        },
        {
            id: 12,
            name: "Item 12",
            description: "Description for Item 12"
        },
        {
            id: 13,
            name: "Item 13",
            description: "Description for Item 13"
        },
        {
            id: 14,
            name: "Item 14",
            description: "Description for Item 14"
        },
        {
            id: 15,
            name: "Item 15",
            description: "Description for Item 15"
        },
        {
            id: 16,
            name: "Item 16",
            description: "Description for Item 16"
        },
        {
            id: 17,
            name: "Item 17",
            description: "Description for Item 17"
        },
        {
            id: 18,
            name: "Item 18",
            description: "Description for Item 18"
        },
        {
            id: 19,
            name: "Item 19",
            description: "Description for Item 19"
        },
        {
            id: 20,
            name: "Item 20",
            description: "Description for Item 20"
        }
    );

    getItems(): Array<DataItem> {
        return this.items;
    }

    getItem(id: number): DataItem {
        return this.items.filter((item) => item.id === id)[0];
    }

    getUsers(){
        return this.http.get('https://reqres.in/api/users')
            .pipe(
                map((data: any) => {
                this.users = data.data.map(
                    user => new User(
                        user.id,
                        user.first_name,
                        user.last_name,
                        user.email,
                        user.avatar
                ));
            })
        );
    }

    private publishUpdates(){
        // Make sure all updates are published inside NgZone so that change detection is triggered if needed
        this.zone.run(() => {
        // must emit a *new* value (immutability!)
            this.users.next([...this.allUsers]);
        });
    }
}
