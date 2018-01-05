import React from 'react';

class NotFound extends React.Component {
  render() {
    return (
      <div>
        <h1>Oops! Not Found for <code>{location.pathname}</code></h1>
      </div>
    );
  }
};

export default NotFound;