// dashboard.tsx
import { FC, ReactElement } from 'react';
import TaskArea from '../../components/taskArea/taskArea';
import Sidebar from '../../components/sidebar/sidebar';

const Dashboard: FC = (): ReactElement => {
  return (
    <div className="container-fluid p-0 overflow-hidden">
      <div className="row">
        <TaskArea />
        <Sidebar />
      </div>
    </div>
  );
};

export default Dashboard;
