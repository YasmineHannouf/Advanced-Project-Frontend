import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import MUIDataTable from "mui-datatables";
import debounce from "lodash/debounce";
import "../styles/Fixed_Key.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box } from "@mui/system";
// import Add from "./PopUp/ReccuringPop"; //CloseButton
import Add from '../components/PopUp/FixedPop';

function createData(id, title, description, amount,category_id, key_id, is_paid, type = 'exp', scheduled_date) {
    return { id, title, description, amount, category_id, key_id, is_paid, type, scheduled_date};
  }

export default function BasicTable() {
  const [isLoading, setIsLoading] = useState(true);
  const [Fixed, setFixed] = useState([]);
  const [editingRow, setEditingRow] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
    console.log(showPopup);
  };
  const handlePopupClose = () => {
    setShowPopup(false);
  };
  useEffect(() => {
    getData();
  }, []);

  const rows = Fixed.map((item) =>
  createData(
    item.id,
    item.title,
    item.description,
    item.amount,
    item.category_id,
    item.key_id,
    item.is_paid,
    item.type,
    item.scheduled_date
   
  )
);
  const handleSearch = debounce((searchValue) => {
    console.log(searchValue);
  }, 500);

  const handleDelete = (rowsDeleted) => {
    console.log(rowsDeleted);
    axios.delete(`http://127.0.0.1:8000/api/fixed/delete/${rowsDeleted}`)
    .then((response) => {
      console.log(response);
      getData();
    })
    .catch((error) => {
      console.log(error);
      // setIsLoading(false);
    });
  };



  const getData = () => axios
  .get("http://127.0.0.1:8000/api/fixed")
  .then((response) => {
    setFixed(response.data.fixed.data);
    console.log('res'+response);
  })
  .catch((error) => {
    console.log(error);
    setIsLoading(false);
  });

  const handleUpdate = (rowData) => {
    setEditingRow(true);
    console.log(rowData[2]);
   axios.patch(`http://127.0.0.1:8000/api/fixed/update/${rowData[0]}`, {name:rowData[1],is_active:rowData[2]})
    .then((response) => {
      getData();
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
      name: "key_id",
      label: "key",
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
      name: "is_paid",
      label: "Paid?",
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
        name: "scheduled_date",
        label: "Scheduled_date",
        options: {
          customBodyRender: (value, tableMeta, updateValue) => {
            const rowIndex = tableMeta.rowIndex;
            const isEditing = rowIndex === editingRow;
  
            return (
                <div style={{ textAlign: "center" }} onClick={() => setEditingRow(rowIndex)}>
                {isEditing ? (
                  <select className="EditInput" value={value} onChange={(e) => updateValue(e.target.value)}>
                    <option value="yearly">Yearly</option>
                    <option value="monthly">Monthly</option>
                    <option value="weekly">Weekly</option>
                    <option value="daily">Daily</option>
                    <option value="hourly">Hourly</option>
                  </select>
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
                  class="icon"
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

    onRowsDelete: handleDelete,
    fullScreen: true,
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
          <Add sx={{ zIndex: 0 }} className="popUpAdd"   onClick={  handlePopupClose} />
          {/* <ButtonClose onClick={() => {
  handlePopupClose();
  getData();
}} /> */}
        </>
      ) : null}
      <MUIDataTable
        title={"Fixed"}
        data={rows}
        columns={columns}
        options={options}
        className={showPopup ? "blur" : ""}
        sx={{ width: "70%", marginLeft: "350px", marginY: "150px", zIndex: 1 ,textAlign: "center" }}
      />
    </Box>
  );
}

