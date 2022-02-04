import "./productList.css"

// Dummy Data
import { productRows } from '../../dummyData';

// Material UI
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

// Material Icon
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

// Components
import { useState } from 'react';

export default function ProductList() {
  
    const [ data, setData ] = useState(productRows);
    
    const handleDelete = (id) => {
        setData(data.filter(item=>item.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'user', headerName: 'Product', width: 200, renderCell: (params) => {
            return (
                <div className="productListItem"> 
                    <img className="productListImage" src={params.row.img} alt="Image Not Found" />
                    {params.row.name}
                </div>
            );
        }},
        { field: 'stock', headerName: 'Stock', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
          field: 'price',
          headerName: 'Price',
          width: 160,
        },
        {
            field: 'action',
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/product/"+params.row.id} >
                            <button className="productListEdit">Edit</button>
                        </Link>
                        <DeleteOutlineIcon className="productListDelete" onClick={()=> handleDelete(params.row.id)} />
                    </>
                );
            }
        }
      ];
      

    return (
    <div className="productList">
        <DataGrid
                    rows={data}
                    columns={columns}
                    pageSize={8}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick
                />
    </div>
    );
}
