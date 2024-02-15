import moment from 'moment';
import {
  FC,
  ReactElement,
  ChangeEvent,
  MouseEvent,
  useContext,
  useEffect,
} from 'react';
import TaskCounter from '../taskCounter/taskCounter';
import Task from '../task/task';
import {
  useQuery,
  useMutation,
} from '@tanstack/react-query';
import { sendApiRequest } from '../../helpers/sendApiRequest';
import { ITaskApi } from './interfaces/ITaskApi';
import { ProgressBarComponent } from '@syncfusion/ej2-react-progressbar';
import { MessageComponent } from '@syncfusion/ej2-react-notifications';
import { Status } from '../createTaskForm/enums/Status';
import { IUpdateTask } from '../createTaskForm/interfaces/IUpdateTask';
import { countTasks } from './helpers/countTasks';
import { TaskStatusChangedContext } from '../../context';

const TaskArea: FC = (): ReactElement => {
  const taskUpdatedContext = useContext(
    TaskStatusChangedContext,
  );

  const currentDate = moment();
  const formattedDate = currentDate.format('Do, MMMM YYYY');
  const { error, isLoading, data, refetch } = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      return await sendApiRequest<ITaskApi[]>(
        'http://localhost:3200/tasks',
        'GET',
      );
    },
  });

  const updateTaskMutation = useMutation({
    mutationFn: (data: IUpdateTask) => {
      return sendApiRequest(
        'http://localhost:3200/tasks',
        'PUT',
        data,
      );
    },
  });

  useEffect(() => {
    refetch();
  }, [taskUpdatedContext.updated]);

  useEffect(() => {
    if (updateTaskMutation.isSuccess) {
      taskUpdatedContext.toggle();
    }
  }, [updateTaskMutation.isSuccess]);

  function onStatusChangeHandler(
    e: ChangeEvent<HTMLInputElement>,
    id: string,
  ) {
    updateTaskMutation.mutate({
      id,
      status: e.target.checked
        ? Status.inProgress
        : Status.todo,
    });
  }

  function markCompleteHandler(
    _e:
      | MouseEvent<HTMLButtonElement>
      | MouseEvent<HTMLAnchorElement>,
    id: string,
  ) {
    updateTaskMutation.mutate({
      id,
      status: Status.completed,
    });
  }

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
          <TaskCounter
            count={
              data
                ? countTasks(data, Status.todo)
                : undefined
            }
            status={Status.todo}
          />
          <TaskCounter
            count={
              data
                ? countTasks(data, Status.inProgress)
                : undefined
            }
            status={Status.inProgress}
          />
          <TaskCounter
            count={
              data
                ? countTasks(data, Status.completed)
                : undefined
            }
            status={Status.completed}
          />
        </div>
        <div className="col-md-8 col-xs-10">
          {error && (
            <MessageComponent severity="Error">
              There is an error fetching your Tasks
            </MessageComponent>
          )}

          {!error &&
            Array.isArray(data) &&
            data.length === 0 && (
              <MessageComponent severity="Warning">
                You have no tasks created. Please start
                creating some tasks
              </MessageComponent>
            )}

          {isLoading ? (
            <ProgressBarComponent />
          ) : (
            Array.isArray(data) &&
            data.length > 0 &&
            data.map((each, index) => {
              return each.status === Status.todo ||
                each.status === Status.inProgress ? (
                <Task
                  key={index + each.priority}
                  id={each.id}
                  title={each.title}
                  date={new Date(each.date)}
                  description={each.description}
                  priority={each.priority}
                  status={each.status}
                  onStatusChange={onStatusChangeHandler}
                  onClick={markCompleteHandler}
                />
              ) : (
                false
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskArea;
