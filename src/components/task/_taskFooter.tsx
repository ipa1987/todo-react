import { FC, ReactElement } from 'react';
import { ITaskFooter } from './interfaces/ITaskFooter';
import PropTypes from 'prop-types';
import { SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

const TaskFooter: FC<ITaskFooter> = (
  props,
): ReactElement => {
  const {
    onStatusChange = (e) => console.log(e),
    onClick = (e) => console.log(e),
  } = props;

  return (
    <div className="d-flex justify-content-between align-items-center mt-4">
      <div
        className="form-check form-switch text-warning"
        style={{ paddingLeft: '0px' }}
      >
        <SwitchComponent
          id="customSwitch"
          change={(e) => onStatusChange(e)}
        />
        <label
          className="form-check-label"
          style={{ paddingLeft: '15px' }}
          htmlFor="customSwitch"
        >
          In Progress
        </label>
      </div>
      <ButtonComponent
        cssClass="e-success e-small"
        onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
          onClick(e)
        }
      >
        Mark Complete
      </ButtonComponent>
    </div>
  );
};

TaskFooter.propTypes = {
  onStatusChange: PropTypes.func,
  onClick: PropTypes.func,
};

export default TaskFooter;
