import { FC, ReactElement } from 'react';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ISelectField } from './interfaces/ISelectField';
import PropTypes from 'prop-types';

const TaskSelectField: FC<ISelectField> = (
  props,
): ReactElement => {
  // Destructure Props
  const {
    value = '',
    label = 'Select Box',
    name = 'selectBox',
    items = [{ value: '', label: 'Add Items' }],
    disabled = false,
    onChange = (e: any) => console.log(e.value), // Syncfusion's event may differ, check the documentation
  } = props;

  const dropDownData = items.map((item) => ({
    text: item.label,
    value: item.value,
  }));

  return (
    <div className="control-pane">
      <div className="control-section">
        <div id={`${name}-id`}>
          <form id="formId" className="form-horizontal">
            <div
              className="form-group"
              style={{ margin: '10px' }}
            >
              <DropDownListComponent
                id={`${name}-id-select`}
                dataSource={dropDownData}
                placeholder={label}
                value={value}
                change={onChange}
                enabled={!disabled}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

TaskSelectField.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }).isRequired,
  ),
};

export default TaskSelectField;
