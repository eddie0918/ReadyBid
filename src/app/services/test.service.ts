import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TestService {

    _requestList: any = [];

    constructor(private http: HttpClient) { }

    login(data) {
        // data = { email: 'admin@example.com', password: 'Test@123' };
        return this.http.post('https://api.ipify.org?format=json', data);
    }
    
    get requestList() {
        return this._requestList;
    }

    set requestList(request: any) {
        this._requestList.push(request);
    }

}