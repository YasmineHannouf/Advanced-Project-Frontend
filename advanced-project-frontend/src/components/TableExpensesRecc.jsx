import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import MUIDataTable from "mui-datatables";
import debounce from "lodash/debounce";
import "../styles/Fixed_Key.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box } from "@mui/system";
import Add from "./PopUp/ReccuringPop"; //CloseButton

function createData(id, title, description, amount,category_id,type,date_time,start_date,end_date) {
  return { id, title, description, amount,category_id,type,date_time,start_date,end_date };
}

export default function BasicTable() {
  const [isLoading, setIsLoading] = useState(true);
  const [Category, setCategory] = useState([]);
  const [editingRow, setEditingRow] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
    console.log("show"+showPopup);
  };
  const handlePopupClose = () => {
    setShowPopup(false);
  };
  useEffect(() => {
    getData();
  }, []);

  const rows = Category.map((item,index) =>
    createData(
      item.id,
      item.title,
      item.description,
      item.amount,
      item.category.name,
      item.type,
      item.start_date,
      item.end_date
    )
  );

  const handleSearch = debounce((searchValue) => {
    console.log(searchValue);
  }, 500);

  const handleDelete = (rowsDeleted) => {
    console.log(rowsDeleted);
    axios.delete(`http://127.0.0.1:8000/api/reccurings/${rowsDeleted}`)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
      // setIsLoading(false);
    });
  };
  
  const getData = () => axios
  .get("http://127.0.0.1:8000/api/reccurings")
  .then((response) => {
    setCategory(response.data.data.data);
    // setIsLoading(false);
    console.log(response.data.data.data[0].category.name);
  })
  .catch((error) => {
    console.log(error);
    // setIsLoading(false);
  });

  const handleUpdate = (rowData) => {
    setEditingRow(true);
    console.log(rowData[2]);
   axios.patch(`http://127.0.0.1:8000/api/reccurings/${rowData[0]}`, {title:rowData[1],description:rowData[2],amount:rowData[3]})
    .then((response) => {
      getData();
      console.log(rowData);
      console.log(rowData);
    })
    .catch((error) => {
      console.log(error);
      // setIsLoading(false);
    });
  };

  const columns = [
    {
      name: "id",
      label: "ID",
      options: {
        display: "excluded",
      },
    },
    {
      name: "title",
      label: "Title",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          const rowIndex = tableMeta.rowIndex;
          const isEditing = rowIndex === editingRow;

          return (
            <div style={{ textAlign: "center" }} onClick={() => setEditingRow(rowIndex)}>
              {isEditing ? (
                <input
                  className="EditInput"
                  value={value}
                  onChange={(e) => updateValue(e.target.value)}
                />
              ) : (
                value
              )}
            </div>
          );
        },
        editable: true,
      },
    },
   
    {
      name: "description",
      label: "Description",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          const rowIndex = tableMeta.rowIndex;
          const isEditing = rowIndex === editingRow;

          return (
            <div style={{ textAlign: "center" }} onClick={() => setEditingRow(rowIndex)}>
              {isEditing ? (
                <input
                  className="EditInput"
                  value={value}
                  onChange={(e) => updateValue(e.target.value)}
                />
              ) : (
                value
              )}
            </div>
          );
        },
        editable: true,
      },
    },
    {
      name: "amount",
      label: "Amount",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          const rowIndex = tableMeta.rowIndex;
          const isEditing = rowIndex === editingRow;

          return (
            <div style={{ textAlign: "center" }} onClick={() => setEditingRow(rowIndex)}>
              {isEditing ? (
                <input
                  className="EditInput"
                  value={value}
                  onChange={(e) => updateValue(e.target.value)}
                />
              ) : (
                value
              )}
            </div>
          );
        },
        editable: true,
      },
    },
    {
      name: "category_id",
      label: "Category_id",
      
    },
    {
      name: "type",
      label: "Type",
     
    },
    {
      name: "start_date",
      label: "Start_date",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          const rowIndex = tableMeta.rowIndex;
          const isEditing = rowIndex === editingRow;

          return (
            <div style={{ textAlign: "center" }} onClick={() => setEditingRow(rowIndex)}>
              {isEditing ? (
                <input
                  className="EditInput"
                  value={value}
                  onChange={(e) => updateValue(e.target.value)}
                />
              ) : (
                value
              )}
            </div>
          );
        },
        editable: true,
      },
    },
    {
      name: "end_date",
      label: "End_date",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          const rowIndex = tableMeta.rowIndex;
          const isEditing = rowIndex === editingRow;

          return (
            <div style={{ textAlign: "center" }} onClick={() => setEditingRow(rowIndex)}>
              {isEditing ? (
                <input
                  className="EditInput"
                  value={value}
                  onChange={(e) => updateValue(e.target.value)}
                />
              ) : (
                value
              )}
            </div>
          );
        },
        editable: true,
      },
    },
    {
      name: "actions",
      label: "Actions",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          const rowData = tableMeta.rowData;
          const id = rowData[0]; 
          return (
            <>
              <button className="Editbtn" onClick={() => handleUpdate(rowData)}>
                <FontAwesomeIcon
                  icon="fas fa-edit"
                  className="Editbtn"
                  color="#234567"
                />
              </button>
              &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
              <button className="Deletebtn" onClick={() => handleDelete(rowData[0])}>
                <svg
                  viewBox="0 0 15 17.5"
                  height="15"
                  width="15"
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                  fill="red"
                >
                  <path
                    transform="translate(-2.5 -1.25)"
                    d="M15,18.75H5A1.251,1.251,0,0,1,3.75,17.5V5H2.5V3.75h15V5H16.25V17.5A1.251,1.251,0,0,1,15,18.75ZM5,5V17.5H15V5Zm7.5,10H11.25V7.5H12.5V15ZM8.75,15H7.5V7.5H8.75V15ZM12.5,2.5h-5V1.25h5V2.5Z"
                    id="Fill"
                  ></path>
                </svg>
              </button>
            </>
          );
        },
      },
    },
  ];

  const options = {
    filterType: "checkbox",
    responsive: "standard",
    rowsPerPageOptions: [5, 10, 20],
    selectableRows: "none",
    search: true,
    searchPlaceholder: "Search for a Reccuring Table",
    onSearchChange: (searchValue) => handleSearch(searchValue),
    download: true,
    print: true,
    pagination: true,
    rowsPerPage: 5,
    loaded:true,
    rowsPerPageOptions: [5, 10, 20],
    onCellClick: (cellData, cellMeta) => {
      const rowIndex = cellMeta.rowIndex;
      if (cellMeta.colIndex === 3) {
        setEditingRow(rowIndex);
      }
    },
    // onCellEditCommit: handleCellEditCommit,
    onRowsDelete: handleDelete,
    customToolbar: () => {
      return (
        <button className="cta" onClick={togglePopup}>
          <span>Add New</span>
          <svg viewBox="0 0 13 10" height="10px" width="15px">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </button>
      );
    },
  };
  return (
    <Box sx={{ width: "70%", marginLeft: "350px", marginY: "150px" }}>
      {showPopup ? (
        <>
          {" "}
          <Add sx={{ zIndex: 0 }} className="popUpAdd" onClick={togglePopup} />
          {/* <ButtonClose onClick={() => {
  handlePopupClose();
  getData();
}} /> */}
        </>
      ) : null}
      <MUIDataTable
        title={"Reccuring"}
        data={rows}
        columns={columns}
        options={options}
        className={showPopup ? "blur" : ""}
        sx={{ width: "70%", marginLeft: "350px", marginY: "150px", zIndex: 1 ,textAlign: "center" }}

      />
    </Box>
  );
}
