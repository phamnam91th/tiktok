import React from 'react';
import { connect } from 'react-redux';
import { setUser } from './userActions';

function UserProfile({ user, setUser }) {
  const handleNameChange = (e) => {
    setUser({ ...user, name: e.target.value });
  };

  const handleEmailChange = (e) => {
    setUser({ ...user, email: e.target.value });
  };

  return (
    <div>
      <input type="text" placeholder="Name" value={user.name} onChange={handleNameChange} />
      <input type="text" placeholder="Email" value={user.email} onChange={handleEmailChange} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user.user,
});

const mapDispatchToProps = {
  setUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);