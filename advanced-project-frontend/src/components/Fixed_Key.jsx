import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import MUIDataTable from "mui-datatables";
import debounce from "lodash/debounce";
import "../styles/Fixed_Key.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box } from "@mui/system";
import Add from "./PopUp/FixedKeyPop"; //CloseButton
import ButtonClose from "./PopUp/CloseBtton";

function createData(id, name, is_active, created_at, updated_at) {
  return { id, name, is_active, created_at, updated_at };
}

export default function BasicTable() {
  const [isLoading, setIsLoading] = useState(true);
  const [FixedKey, setFixedKey] = useState([]);
  const [editingRow, setEditingRow] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
    console.log(showPopup);
  };
  const handlePopupClose = () => {
    setShowPopup(false);
    getData();
  };
  useEffect(() => {
    getData();
  }, []);

  const rows = FixedKey.map((item) =>
    createData(
      item.id,
      item.name,
      item.is_active,
      item.created_at,
      item.updated_at
    )
  );

  const handleSearch = debounce((searchValue) => {
    console.log(searchValue);
  }, 500);

  const handleDelete = (rowsDeleted) => {
    axios
      .delete(`http://127.0.0.1:8000/api/Fixedkeys/delete/${rowsDeleted}`)
      .then((response) => {
        console.log(response);
        getData();
      })
      .catch((error) => {
        console.log(error);
        // setIsLoading(false);
      });
  };

  const getData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/Fixedkeys/show");
      setFixedKey(response.data.Fixed_keysByDesc);
      setIsLoading(false);
      console.log(response);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  

  const handleUpdate = (rowData) => {
    setEditingRow(true);
    console.log(rowData[2]);
    axios
      .patch(`http://127.0.0.1:8000/api/Fixedkeys/update/${rowData[0]}`, {
        name: rowData[1],
        is_active: rowData[2],
      })
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
      name: "is_active",
      label: "Status",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          const rowIndex = tableMeta.rowIndex;
          const isEditing = rowIndex === editingRow;

          return (
            <div style={{}} onClick={() => setEditingRow(rowIndex)}>
              {isEditing ? (
                <input
                  type="checkbox"
                  className="EditInput"
                  onChange={(e) =>
                    updateValue(Number(e.target.checked ? 1 : 0))
                  }
                />
              ) : (
                <span>
                  {value === 1 ? (
                    // <input
                    //   type="checkbox"
                    //   className="EditInput"
                    //   checked={value === 1}
                    //   onChange={(e) => updateValue(Number(e.target.checked))}
                    // />
                    <strong className="ActiveLabel">
                      <>Active</>
                    </strong>
                  ) : (
                    <strong className="DisActiveLabel">
                      <>Disabel</>
                    </strong>
                  )}
                </span>
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
              &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
              <button
                className="Deletebtn"
                onClick={() => handleDelete(rowData[0])}
              >
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
    searchPlaceholder: "Search Fixed Key",
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
    <Box sx={{ width: "70%", marginLeft: "300px", marginY: "150px" }}>
      {showPopup ? (
        <>
          {" "}
          <Add
            sx={{ zIndex: 0 }}
            className="popUpAdd"
            onClick={handlePopupClose}
          />
          <ButtonClose
            onClick={() => {
              handlePopupClose();
              getData();
            }}
          />
        </>
      ) : null}
      <MUIDataTable
        title={"Fixed Keys"}
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
    </Box>
  );
}
