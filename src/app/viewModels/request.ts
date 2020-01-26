import { RequestType } from './request-type';
import { User } from './user';

export class Request {
    subject?: string;
    content?: string;
    statusId?: RequestType;
    userId: User;


    constructor(){
        // init
        this.userId = { _id : "5e2c3a11b1cc7c5af0adfb97"};
       
    }
}
