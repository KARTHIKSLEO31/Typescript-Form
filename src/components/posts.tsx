import React from 'react';
import { Navigate }  from 'react-router-dom';

const Posts: React.FC = () => {
  const user = localStorage.getItem('user');
  if (!user) {
    return <Navigate to="/" />;
  }
  return <h1>Welcome to the Second Page</h1>;
};

export default Posts;





