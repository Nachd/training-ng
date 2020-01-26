export class Todo {

    _id? : string;
    content? : string;
    date? : Date;
    isDone : boolean;

    constructor(){
        this.isDone = false;
        this.date = new Date();
    }
}
