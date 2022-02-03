// Css
import './userList.css'
import '../../app.css'

// Dummy Data
import { userRows } from '../../dummyData';

// Material UI
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

// Material Icon
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

// Components
import { useState } from 'react';

 export default function UserList() {

    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter(item=>item.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'user', headerName: 'User', width: 200, renderCell: (params) => {
            return (
                <div className="userListUser"> 
                    <img className="userListImage" src={params.row.avatar} alt="Avatar Not Found" />
                    {params.row.username}
                </div>
            );
        }},
        { field: 'email', headerName: 'Email', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
          field: 'transaction',
          headerName: 'Transaction Volume',
          width: 160,
        },
        {
            field: 'action',
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/user/"+params.row.id} >
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutlineIcon className="userListDelete" onClick={()=> handleDelete(params.row.id)} />
                    </>
                );
            }
        }
      ];
      
   return (
       <>   
            <div className="userList">
                
                <DataGrid
                    rows={data}
                    columns={columns}
                    pageSize={8}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick
                />

            </div>
       </>

   );
 }
 