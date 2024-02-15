import { FC, ReactElement } from 'react';
import PropTypes from 'prop-types';
import { ITaskDescription } from './interfaces/ITaskDescription';

const TaskDescription: FC<ITaskDescription> = (
  props,
): ReactElement => {
  // Destructure Props
  const { description = 'Lorem ipsum dolor sit amet' } =
    props;

  return (
    <div>
      <p>{description}</p>
    </div>
  );
};

TaskDescription.propTypes = {
  description: PropTypes.string,
};

export default TaskDescription;
