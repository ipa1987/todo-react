import { FC, ReactElement } from 'react';
import TaskHeader from './_taskHeader';
import TaskDescription from './_taskDescription';
import TaskFooter from './_taskFooter';
import { ITask } from './interfaces/ITask';
import { Status } from '../createTaskForm/enums/Status';
import { Priority } from '../createTaskForm/enums/Priority';
import PropTypes from 'prop-types';
import { renderPriorityBorderColor } from './helpers/renderPriorityBorderColor';

const Task: FC<ITask> = (props): ReactElement => {
  const {
    title = 'Test Title',
    date = new Date(),
    description = 'Lorem ipsum dolor sit amet',
    priority = Priority.normal,
    status = Status.completed,
    onStatusChange = (e) => console.log(e),
    onClick = (e) => console.log(e),
  } = props;

  return (
    <div
      className="d-flex flex-column w-100 justify-content-start mb-4 p-3"
      style={{
        borderRadius: '8px',
        border: '1px solid',
        borderColor: renderPriorityBorderColor(priority), // Bootstrap error.light equivalent
      }}
    >
      <TaskHeader title={title} date={date} />
      <TaskDescription description={description} />
      <TaskFooter
        onClick={onClick}
        onStatusChange={onStatusChange}
      />
    </div>
  );
};

Task.propTypes = {
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  description: PropTypes.string,
  onStatusChange: PropTypes.func,
  onClick: PropTypes.func,
  priority: PropTypes.string,
  status: PropTypes.string,
};

export default Task;
