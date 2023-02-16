import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { useNavigate }  from 'react-router-dom';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID' },
  { field: 'userId', headerName: 'USERID' },
  { field: 'title', headerName: 'Title', width: 300 },
  { field: 'body', headerName: 'Body', width: 600 }
]

interface User {
  name: string;
  phoneNumber: string;
  email: string;
}


const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const userJson = localStorage.getItem('user');
    if (!userJson) {
      navigate('/', { state: { message: 'Please enter your details first.' } });
      return;
    }

    const user: User = JSON.parse(userJson);

    if (!user.name || !user.phoneNumber || !user.email) {
      navigate('/', { state: { message: 'Please enter your details first.' } });
    }
  }, [navigate]);


  
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(response.data);
    };

    fetchData();
  }, []);

  return (
    <div style={{ height: 600, width: '100%' , display: 'flex' }}>
      <DataGrid rows={posts} columns={columns} pageSize={9} />
    </div>
  );
};

export default Posts;





