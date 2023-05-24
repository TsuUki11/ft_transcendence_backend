import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { TaskStatus } from "../task-status.enum";

export class TasksStatusValidationPipe implements PipeTransform {
    readonly AllowedStatus = [
        TaskStatus.DONE,
        TaskStatus.IN_PROGRESS,
        TaskStatus.OPEN
    ];

    transform(value: any, metadata: ArgumentMetadata) {
        value = value.toUpperCase();
        if (!this.IsAllowed(value))
            throw new BadRequestException();
        return value;
    }

    private IsAllowed (value: any): boolean{
        return this.AllowedStatus.indexOf(value) !== -1 ? true : false;
    }
}