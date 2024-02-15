// Sidebar.tsx
import { FC, ReactElement } from 'react';
import Profile from '../profile/profile';
import CreateTaskForm from '../createTaskForm/createTaskForm';

const Sidebar: FC = (): ReactElement => {
  return (
    <div className="col-md-4 sidebar-area">
      <Profile name="Manik" />
      <CreateTaskForm />
    </div>
  );
};

export default Sidebar;
