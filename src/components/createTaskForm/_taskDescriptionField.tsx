import { FC, ReactElement } from 'react';
import { ITextField } from './interfaces/ITextField';
import PropTypes from 'prop-types';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';

const TaskDescriptionField: FC<ITextField> = (
  props,
): ReactElement => {
  // Destructure props
  const {
    onChange = (e) => console.log(e),
    disabled = false,
  } = props;

  return (
    <TextBoxComponent
      placeholder="Description"
      cssClass="e-outline"
      multiline={true}
      enabled={!disabled}
      change={onChange}
    />
  );
};

TaskDescriptionField.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

export default TaskDescriptionField;
