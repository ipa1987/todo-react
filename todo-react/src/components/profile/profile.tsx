import { FC, ReactElement } from 'react';
import PropTypes from 'prop-types';

interface IProfile {
  name?: string;
}

const Profile: FC<IProfile> = (props): ReactElement => {
  // Destructuring props
  const { name = 'John' } = props;

  const customAvatarStyle = {
    width: '120px',
    height: '120px',
    backgroundColor: 'rgba(168,85,247,.65)', // Using primary.main color from custom theme
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <div
        className="e-avatar e-avatar-circle mb-3"
        style={customAvatarStyle}
      >
        <span className="text-light xxl display-3 mb-1">
          {`${name.substring(0, 1)}`}
        </span>
      </div>
      <h4 className="fw-semibold">{`Welcome, ${name}`}</h4>
      <p className="md text-center">
        This is your personal tasks manager
      </p>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string,
};

export default Profile;
