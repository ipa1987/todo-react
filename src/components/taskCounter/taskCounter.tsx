import { FC, ReactElement } from 'react';
import { ITaskCounter } from './interfaces/ITaskCounter';
import { Status } from '../createTaskForm/enums/Status';
import { emitCorrectBorderColor } from './helpers/emitCorrectBorderColor';
import { emitCorrectLabel } from './helpers/emitCorrectLabel';
import PropTypes from 'prop-types';

const TaskCounter: FC<ITaskCounter> = (
  props,
): ReactElement => {
  const { status = Status.completed, count = 0 } = props;

  return (
    <>
      <div className="container text-center">
        <div className="row justify-content-center align-items-center">
          <div className="col">
            <div className="d-flex flex-column align-items-center">
              <div
                className="e-avatar e-avatar-xlarge e-avatar-circle"
                style={{
                  width: '96px',
                  height: '96px',
                  marginBottom: '16px',
                  border: `5px solid ${emitCorrectBorderColor(status)}`,
                }}
              >
                <span className="mb-1 fs-2 text-light">
                  {count}
                </span>
              </div>
              <p className="mt-1 fs-5 fw-bold">
                {emitCorrectLabel(status)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

TaskCounter.propTypes = {
  count: PropTypes.number,
  status: PropTypes.oneOf([
    Status.todo,
    Status.inProgress,
    Status.completed,
  ]),
};

export default TaskCounter;
