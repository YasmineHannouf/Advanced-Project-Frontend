import React, { useState, useEffect, useRef } from 'react'; 
import axios from 'axios';
import MaterialReactTable, {
  MaterialReactTableProps,
  MRT_Cell,
  MRT_ColumnDef,
  MRT_Row,
} from 'material-react-table';

const FixedKey = () => { 

  const [data, setData] = useState([]);
  const [formattedColumns, setColumns] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/Fixedkeys/show')
      .then(response => {
        console.log(response.data);
        if (response.data ) { 
          const formattedColumns = [
            { accessorKey: 'id', header: 'ID', type: 'numeric' },
            { accessorKey: 'name', header: 'Name' },
            { accessorKey: 'is_active', header: 'Active' ,},
            
            {
              accessorKey: 'actions',
              header: 'Actions',
              type: 'custom',
              customComponent: ({ rowData }) => (
                <>
                  <button onClick={() => handleEdit(rowData.id)}>Edit</button>
                  <button onClick={() => handleDelete(rowData.id)}>Delete</button>
                </>
              )
            }
          ];
          setColumns(formattedColumns);
          setData(response.data.Fixed_keysByDesc);
        } else {
          console.error('Invalid response format');
          setData([]);
        }
      })
      .catch(error => console.error(error));
  }, []);

  const [formData, setFormData] = useState({ name: '', is_acrive: '' });

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleAdd = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8000/api/section', formData)
      .then(response => {
        console.log(response.data);
        setData([...data, response.data]);
        setFormData({ name: '', description: '' });
      });
  }

  const handleEdit = (id) => {
    console.log(`Edit clicked for id: ${id}`);
  }

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/api/section/${id}`)
      .then(response => {
        console.log(response.data);
      });
  }
// 
  const [rowSelection, setRowSelection] = useState({});

  useEffect(() => {
  }, [rowSelection]);

  const tableInstanceRef = useRef(null);

  const someEventHandler = () => {
    console.log(tableInstanceRef.current.getState().sorting);
  }

  return (
    <div>
    
      <div className='table-container'>
        <MaterialReactTable
          columns={formattedColumns}
          data={data}
          enableColumnOrdering
          enableRowSelection
          enablePagination
          onRowSelectionChange={setRowSelection}
          state={{ rowSelection }}
        tableInstanceRef={tableInstanceRef} 
        />
    </div>
    </div>
  )
}
export default FixedKey 