import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// export class User {
//     constructor(
//         name: string,
//         email: string,
//         experience: number,
//         domain: string
//     ) { }
// }

//new
export class User {
    constructor(
        email_id: string,
        name: string,
        password: string,
        role: string
    ) { }
}

