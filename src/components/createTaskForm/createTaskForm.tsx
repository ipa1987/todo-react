import { FC, ReactElement, useState } from 'react';
import TaskTitleField from './_taskTitleField';
import TaskDescriptionField from './_taskDescriptionField';
import TaskDateField from './_taskDateField';
import TaskSelectField from './_taskSelectField';
import { Status } from './enums/Status';
import { Priority } from './enums/Priority';

const CreateTaskForm: FC = (): ReactElement => {
  const [selectedDate, setSelectedDate] = useState<Date>(
    new Date(),
  ); // Specify the type

  const handleDateChange = (date: Date | undefined) => {
    // Update the type to Date | undefined
    setSelectedDate(date || new Date()); // Provide a default value if undefined
  };

  return (
    <>
      <div className="container mt-4">
        <div
          className="d-flex flex-column align-items-start px-4 my-6"
          style={{ width: '100%' }}
        >
          <h5 className="mb-3">Create A Task</h5>

          <div className="w-100 mb-3">
            <TaskTitleField />
          </div>

          <div className="w-100 mb-3">
            <TaskDescriptionField />
          </div>

          <div className="w-100 mb-3">
            <TaskDateField
              value={selectedDate}
              onChange={handleDateChange}
            />
          </div>

          <div className="w-100 mb-3">
            <div className="row">
              <div className="col-md-6 mb-3 p-1">
                <TaskSelectField
                  label="Status"
                  name="status"
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
                />
              </div>
              <div className="col-md-6 mb-3 p-1">
                <TaskSelectField
                  label="Priority"
                  name="priority"
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
                />
              </div>
            </div>
          </div>

          {/* Task Status */}
          {/* Task Priority */}
        </div>
      </div>
    </>
  );
};

export default CreateTaskForm;
