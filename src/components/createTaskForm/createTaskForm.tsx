import {
  FC,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from 'react';
import TaskTitleField from './_taskTitleField';
import TaskDescriptionField from './_taskDescriptionField';
import TaskDateField from './_taskDateField';
import TaskSelectField from './_taskSelectField';
import { Status } from './enums/Status';
import { Priority } from './enums/Priority';
import { ProgressBarComponent } from '@syncfusion/ej2-react-progressbar';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { MessageComponent } from '@syncfusion/ej2-react-notifications';
import { useMutation } from '@tanstack/react-query';
import { sendApiRequest } from '../../helpers/sendApiRequest';
import { ICreateTask } from '../taskArea/interfaces/ICreateTask';
import { TaskStatusChangedContext } from '../../context';

const CreateTaskForm: FC = (): ReactElement => {
  const [title, setTitle] = useState<string | undefined>(
    undefined,
  );
  const [description, setDescription] = useState<
    string | undefined
  >(undefined);

  const [date, setDate] = useState<Date | undefined>(
    new Date(),
  ); // Specify the type
  const [status, setStatus] = useState<string>(Status.todo);
  const [priority, setPriority] = useState<string>(
    Priority.normal,
  );

  const tasksUpdatedContext = useContext(
    TaskStatusChangedContext,
  );

  const createTaskMutation = useMutation({
    mutationFn: (data: ICreateTask) => {
      return sendApiRequest(
        'http://localhost:3200/tasks',
        'POST',
        data,
      );
    },
    onSuccess: () => {
      setShowSuccess(true);
    },
  });

  function createTaskHandler() {
    if (!title || !date || !description) {
      return;
    }

    const task: ICreateTask = {
      title,
      description,
      date: new Date(date),
      status,
      priority,
    };
    createTaskMutation.mutate(task);
  }

  const [showSuccess, setShowSuccess] =
    useState<boolean>(false);

  useEffect(() => {
    if (createTaskMutation.isSuccess) {
      setShowSuccess(true);
      tasksUpdatedContext.toggle();
    }

    const successTimeout = setTimeout(() => {
      setShowSuccess(false);
    }, 7000);

    return () => clearTimeout(successTimeout);
  }, [createTaskMutation.isSuccess]);

  return (
    <>
      <div className="container mt-4">
        <div
          className="d-flex flex-column align-items-start px-4 my-6"
          style={{ width: '100%' }}
        >
          <h5 className="mb-3">Create A Task</h5>

          {showSuccess && (
            <MessageComponent
              content="Your message has been sent successfully"
              severity="Success"
            ></MessageComponent>
          )}

          <div className="w-100 mb-3">
            <TaskTitleField
              onChange={(e) => setTitle(e.target.value)}
              disabled={createTaskMutation.isPending}
            />
          </div>

          <div className="w-100 mb-3">
            <TaskDescriptionField
              onChange={(e) =>
                setDescription(e.target.value)
              }
              disabled={createTaskMutation.isPending}
            />
          </div>

          <div className="w-100 mb-3">
            <TaskDateField
              value={date}
              onChange={(date) => setDate(date)}
              disabled={createTaskMutation.isPending}
            />
          </div>

          <div className="w-100 mb-3">
            <div className="row">
              <div className="col-md-6 mb-3 p-1">
                <TaskSelectField
                  label="Status"
                  name="status"
                  value={status}
                  onChange={(e) =>
                    setStatus(e.target.value as string)
                  }
                  items={[
                    {
                      value: Status.todo,
                      label: Status.todo.toUpperCase(),
                    },
                    {
                      value: Status.inProgress,
                      label:
                        Status.inProgress.toUpperCase(),
                    },
                  ]}
                  disabled={createTaskMutation.isPending}
                />
              </div>
              <div className="col-md-6 mb-3 p-1">
                <TaskSelectField
                  label="Priority"
                  name="priority"
                  value={priority}
                  onChange={(e) =>
                    setPriority(e.target.value as string)
                  }
                  items={[
                    {
                      value: Priority.low,
                      label: Priority.low,
                    },
                    {
                      value: Priority.normal,
                      label: Priority.normal,
                    },
                    {
                      value: Priority.high,
                      label: Priority.high,
                    },
                  ]}
                  disabled={createTaskMutation.isPending}
                />
              </div>
            </div>
            {createTaskMutation.isPending && (
              <ProgressBarComponent type="Linear" />
            )}
            <ButtonComponent
              cssClass="e-block e-success"
              onClick={createTaskHandler}
              // disabled={
              //   !title ||
              //   !date ||
              //   !description ||
              //   !status ||
              //   !priority
              // }
            >
              Create A Task
            </ButtonComponent>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateTaskForm;
