import { ArgumentMetadata, PipeTransform } from "@nestjs/common";
import { TaskStatus } from "../task-status.enum";
export declare class TasksStatusValidationPipe implements PipeTransform {
    readonly AllowedStatus: TaskStatus[];
    transform(value: any, metadata: ArgumentMetadata): any;
    private IsAllowed;
}
