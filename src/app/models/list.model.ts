import { Task } from './task.model';

export class List {
    constructor(
        public title: String,
        public tasks: Task[],
    ) {

    }
}
