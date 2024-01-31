import { Priority } from '../../createTaskForm/enums/Priority';

export const renderPriorityBorderColor = (
  priority: string,
): string => {
  switch (priority) {
    case Priority.normal:
      return '#212121'; // Hexadecimal equivalent of 'grey.900' in Material-UI
    case Priority.low:
      return '#63ccff'; // Hexadecimal equivalent of 'info.light' in Material-UI (an approximation, you might need to adjust based on your design)
    case Priority.high:
      return '#ff5c5e'; // Hexadecimal equivalent of 'error.light' in Material-UI (an approximation, you might need to adjust based on your design)
    default:
      return '#212121';
  }
};
