import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

class Post {
    constructor(
        public id: string,
        public title: string,
        public body: string
    ) { }
}

@Injectable({ providedIn: 'root' })
export class HomeService {
    private endpoint = 'https://localhost:8080/api/users';

    constructor(private http: HttpClient) { }

    getPost(): Observable<Post[]> {
        return this.http.get<Post[]>(this.endpoint);
    }
}