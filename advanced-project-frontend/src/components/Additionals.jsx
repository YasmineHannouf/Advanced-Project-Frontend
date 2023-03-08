import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function DataGridDemo() {
  const [data, setData] = useState([]);
  // const [columns, setcolumns] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const [loading, setLoading] = useState(true);

  function fetchData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/todos/';
    setLoading(true);
    axios.get(apiUrl)
      .then((response) => {
        const data = response.data.map((item) => ({
          id: item.id,
          col1: item.title,
          col2: item.completed ? 'Completed' : 'Incomplete',
          
        })); 
        setData(data); 
        setLoading(false); 
      });
  }
  const columns = [
    { field: 'col1', headerName: 'Username', width: 150 },
        { field: 'col2', headerName: 'Password', width: 150 },
  ];

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}