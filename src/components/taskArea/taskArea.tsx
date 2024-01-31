import moment from 'moment';
import { FC, ReactElement } from 'react';
import TaskCounter from '../taskCounter/taskCounter';
import Task from '../task/task';

const TaskArea: FC = (): ReactElement => {
  const currentDate = moment();
  const formattedDate = currentDate.format('Do, MMMM YYYY');

  return (
    <div className="col-md-8 px-4">
      <div className="mb-8 px-4">
        <h2 className="text-center fw-bold">
          Status Of Your Tasks As On:&nbsp;{formattedDate}
        </h2>
      </div>
      <div className="row justify-content-center">
        <div
          className="col-md-10 col-xs-12 mb-8 d-flex justify-content-around align-items-center"
          style={{ margin: '50px' }}
        >
          <TaskCounter />
          <TaskCounter />
          <TaskCounter />
        </div>
        <div className="col-md-8 col-xs-10">
          <Task />
          <Task />
          <Task />
        </div>
      </div>
    </div>
  );
};

export default TaskArea;
