import { FC, ReactElement } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { ITaskHeader } from './interfaces/ITaskHeader';

const TaskHeader: FC<ITaskHeader> = (
  props,
): ReactElement => {
  // Destructure props
  const { title = 'Default Title', date = new Date() } =
    props;

  return (
    <div className="d-flex justify-content-between mb-3">
      <div>
        <h6 className="fw-bold">{title}</h6>
      </div>
      <div>
        <span className="badge border">
          {moment(date).format('Do, MMM YYYY')}
        </span>
      </div>
    </div>
  );
};

TaskHeader.propTypes = {
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date),
};

export default TaskHeader;
