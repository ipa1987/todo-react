import { FC, ReactElement } from 'react';
import { ITextField } from './interfaces/ITextField';
import PropTypes from 'prop-types';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';

const TaskTitleField: FC<ITextField> = (
  props,
): ReactElement => {
  // Destructure props
  const {
    onChange = (e) => console.log(e.currentTarget.value),
    disabled = false,
  } = props;

  return (
    <TextBoxComponent
      placeholder="Task Title"
      cssClass="e-outline"
      enabled={!disabled}
      change={onChange}
    />
  );
};

TaskTitleField.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

export default TaskTitleField;
