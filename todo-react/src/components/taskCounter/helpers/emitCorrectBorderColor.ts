import { Status } from '../../createTaskForm/enums/Status';
import { TaskCounterStatusType } from '../interfaces/ITaskCounter';

export const emitCorrectBorderColor = (
  status: TaskCounterStatusType,
): string => {
  switch (status) {
    case Status.todo:
      return '#dc3545'; // Bootstrap red color
    case Status.inProgress:
      return '#ffc107'; // Bootstrap yellow color
    case Status.completed:
      return '#28a745'; // Bootstrap green color
    default:
      return ''; // Handle the default case as needed
  }
};
