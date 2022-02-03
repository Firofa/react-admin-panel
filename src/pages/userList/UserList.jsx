import './userList.css'
import '../../app.css'
 
// Material UI
import { DataGrid } from '@mui/x-data-grid';

// Material Icon
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

// Components
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';

 export default function UserList() {
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
                        <button className="userListEdit">Edit</button>
                        <DeleteOutlineIcon className="userListDelete" />
                    </>
                );
            }
        }
      ];
      
      const rows = [
        { 
            id: 1, 
            username: 'Jon Snow',   
            avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
            email: 'jonsnow@gmail.com',
            status: 'active',
            transaction: '$120.00'
        },
        { 
            id: 2, 
            username: 'Jon Winter',   
            avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
            email: 'jonsnow@gmail.com',
            status: 'active',
            transaction: '$120.00'
        },
        { 
            id: 3, 
            username: 'Jon Snow',   
            avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
            email: 'jonsnow@gmail.com',
            status: 'active',
            transaction: '$120.00'
        },
        { 
            id: 4, 
            username: 'Jon Snow',   
            avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
            email: 'jonsnow@gmail.com',
            status: 'active',
            transaction: '$120.00'
        },
        { 
            id: 5, 
            username: 'Jon Snow',   
            avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
            email: 'jonsnow@gmail.com',
            status: 'active',
            transaction: '$120.00'
        },
        { 
            id: 6, 
            username: 'Jon Snow',   
            avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
            email: 'jonsnow@gmail.com',
            status: 'active',
            transaction: '$120.00'
        },
        { 
            id: 7, 
            username: 'Jon Snow',   
            avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
            email: 'jonsnow@gmail.com',
            status: 'active',
            transaction: '$120.00'
        },
        { 
            id: 8, 
            username: 'Jon Snow',   
            avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
            email: 'jonsnow@gmail.com',
            status: 'active',
            transaction: '$120.00'
        },
        { 
            id: 9, 
            username: 'Jon Snow',   
            avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
            email: 'jonsnow@gmail.com',
            status: 'active',
            transaction: '$120.00'
        },
      ];

   return (
       <>   
        <Topbar />
        <div className='container'>
            <Sidebar />
            <div className="userList">
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={8}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick
                />
            </div>
        </div>
       </>

   );
 }
 