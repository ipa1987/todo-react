import { FC, ReactElement } from 'react';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

const TaskSelectField: FC = (): ReactElement => {
  const data = [
    { value: 10, label: 'Ten' },
    { value: 20, label: 'Twenty' },
    { value: 30, label: 'Thirty' },
  ];

  return (
    <>
      <div>
        <DropDownListComponent
          dataSource={data}
          fields={{ value: 'value', text: 'label' }}
          placeholder="Select a status"
        />
      </div>
    </>
  );
};

export default TaskSelectField;
