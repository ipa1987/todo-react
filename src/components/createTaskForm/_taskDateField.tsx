import { FC, ReactElement } from 'react';
import {
  DatePickerComponent,
  Inject,
  CalendarComponent,
} from '@syncfusion/ej2-react-calendars';
import { IDateField } from './interfaces/IDateField';
import PropTypes from 'prop-types';

const TaskDateField: FC<IDateField> = (
  props,
): ReactElement => {
  // Destructure props
  const {
    value = new Date(),
    disabled = false,
    onChange = (date) => console.log(date),
  } = props;

  return (
    <>
      <DatePickerComponent
        placeholder="Task Date (dd/mm/yyyy)"
        format="dd/MM/yyyy"
        value={value}
        onChange={(args: any) => onChange(args.value)}
        enabled={!disabled}
      >
        <Inject services={[CalendarComponent]} />
      </DatePickerComponent>
    </>
  );
};

TaskDateField.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.instanceOf(Date),
};

export default TaskDateField;
