import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import MUIDataTable from "mui-datatables";
import debounce from "lodash/debounce";
import "../styles/Fixed_Key.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box } from "@mui/system";
import Add from "./PopUp/CategoriesPop"; //CloseButton
import ConfirmationDialog from "../components/PopUp/confirm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";import DeleteIcon from '../components/PopUp/Delete' //"../../assets/Phone.svg"


function createData(id, name, created_at, updated_at) {
  return { id, name, created_at, updated_at };
}

export default function BasicTable() {
  const [isLoading, setIsLoading] = useState(true);
  const [FixedKey, setCategory] = useState([]);
  const [editingRow, setEditingRow] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
    console.log(showPopup);
  };

  const rows = FixedKey.map((item) =>
    createData(
      item.id,
      item.name,
      item.created_at,
      item.updated_at
    )
  );

  const handleSearch = debounce((searchValue) => {
    console.log(searchValue);
  }, 500);

  const handleDelete = (rowsDeleted) => {
    axios
      .delete(`http://127.0.0.1:8000/api/categories/${rowsDeleted}`)
      .then((response) => {
        console.log(response);
        getData();
        toast.success("Data deleted successfully");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error);
      });
  };

  const getData = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/categories"
      );
      setCategory(response.data.data);

      setIsLoading(false);
      console.log(response);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    getData();
  };
  useEffect(() => {
    console.log("handlePopupClose");
    getData();
  }, []);
  const handleUpdate = (rowData) => {
    setEditingRow(true);
    console.log(rowData[2]);
    axios
      .patch(`http://127.0.0.1:8000/api/categories/${rowData[0]}`, {
        name: rowData[1],
      })
      .then((response) => {
        getData();
        toast.success(" Updated successfully!");
        console.log(rowData);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error);
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
      name: "name",
      label: "Name",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          const rowIndex = tableMeta.rowIndex;
          const isEditing = rowIndex === editingRow;

          return (
            <div
              style={{ textAlign: "center" }}
              onClick={() => setEditingRow(rowIndex)}
            >
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
      name: "created_at",
      label: "Created At",
    },
    {
      name: "updated_at",
      label: "Updatedd At",
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
              <ConfirmationDialog
                title="Delete Item"
                buttonText={            <DeleteIcon/>
              }
                confirmText="Yes, delete it"
                cancelText="Cancel"
                onConfirm={() => handleDelete(id)}
                color="error"
                variant=''
                onError={(message) => toast.error(message)}
              >
                Are you sure you want to delete this Admin?
              </ConfirmationDialog>      <button
                className="Deletebtn"
                onClick={() => handleDelete(rowData[0])}
              >
              </button>
            </>
          );
        },
      },
    },
  ];

  const options = {
    filterType: "checkbox",
    responsive: "vertical",
    rowsPerPageOptions: [5, 10, 20],
    selectableRows: "none",
    search: true,
    searchPlaceholder: "Search to a Category",
    onSearchChange: (searchValue) => handleSearch(searchValue),
    download: true,
    print: true,
    pagination: true,
    rowsPerPage: 5,
    rowsPerPageOptions: [5, 10, 20],
    onCellClick: (cellData, cellMeta) => {
      const rowIndex = cellMeta.rowIndex;
      if (cellMeta.colIndex === 3) {
        setEditingRow(rowIndex);
      }
    },
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
    <Box sx={{ width: "80%", marginLeft: "5%", marginY: "10%" }}>
      {showPopup ? (
        <>
          {" "}
          <Add
            sx={{ zIndex: 0 }}
            className="popUpAdd"
            open={showPopup}
            handleClose={handlePopupClose}
            onClick={getData}
          />
        </>
      ) : null}
      <MUIDataTable
        title={"Table Of Categories"}
        data={rows}
        columns={columns}
        options={options}
        className={showPopup ? "blur" : ""}
        sx={{
          width: "70%",
          marginLeft: "350px",
          marginY: "150px",
          zIndex: 1,
          textAlign: "center",
        }}
      />
      <ToastContainer />
    </Box>
  );
}
