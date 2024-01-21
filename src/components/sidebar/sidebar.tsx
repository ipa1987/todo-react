// Sidebar.tsx
import { FC, ReactElement } from 'react';
import Profile from '../profile/profile';

const Sidebar: FC = (): ReactElement => {
  return (
    <div className="col-md-4 sidebar-area">
      <Profile name="Manik" />
    </div>
  );
};

export default Sidebar;
