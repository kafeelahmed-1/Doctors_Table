import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { IconButton, TextField, Button, MenuItem, Select } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

import SearchIcon from "@mui/icons-material/Search";
import "./tablestyle.css";

const CustomTable = () => {
  const [rows, setRows] = useState([
    {
      id: 1,
      drname: "Dr.Ali Khan",
      designation: "Cardiologist",
      sun: "Closed",
      mon: "9:00 AM - 5:00 PM",
      tue: "9:00 AM - 5:00 PM",
      wed: "9:00 AM - 5:00 PM",
      thu: "9:00 AM - 5:00 PM",
      fri: "9:00 AM - 5:00 PM",
      sat: "8:00 AM - 2:00 PM",
    },
    {
      id: 2,
      drname: "Dr.Hassan",
      designation: "Dermatologist",
      sun: "Closed",
      mon: "9:00 AM - 5:00 PM",
      tue: "9:00 AM - 5:00 PM",
      wed: "9:00 AM - 5:00 PM",
      thu: "9:00 AM - 5:00 PM",
      fri: "9:00 AM - 5:00 PM",
      sat: "8:00 AM - 2:00 PM",
    },
    {
      id: 3,
      drname: "Dr.Usman",
      designation: "Pediatrician",
      sun: "Closed",
      mon: "9:00 AM - 5:00 PM",
      tue: "9:00 AM - 5:00 PM",
      wed: "9:00 AM - 5:00 PM",
      thu: "9:00 AM - 5:00 PM",
      fri: "9:00 AM - 5:00 PM",
      sat: "8:00 AM - 2:00 PM",
    },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [recordsPerPage, setRecordsPerPage] = useState(5);

  const filteredRows = rows.filter(
    (row) =>
      row.drname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.sun.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.mon.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.tue.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.wed.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.thu.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.fri.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.sat.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "drname", headerName: "Doctor Name", width: 130 },
    { field: "designation", headerName: "Designation", width: 130 },
    {
      field: "sun",
      headerName: "Sun",
      width: 90,
      renderCell: (params) => {
        // Apply red color if the Sunday value is "Closed" or "NA"
        const isClosed = params.value === "Closed" || params.value === "NA";
        return (
          <span style={{ color: isClosed ? "red" : "black" }}>
            {isClosed ? "Closed" : params.value}
          </span>
        );
      },
    },
    { field: "mon", headerName: "Mon", width: 90 },
    { field: "tue", headerName: "Tue", width: 90 },
    { field: "wed", headerName: "Wed", width: 90 },
    { field: "thu", headerName: "Thu", width: 90 },
    { field: "fri", headerName: "Fri", width: 90 },
    { field: "sat", headerName: "Sat", width: 90 },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => (
        <div
          style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
        >
          <div
            style={{
              border: "1px solid green",
              borderRadius: "3px",
              padding: "2px",
              height: "25px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "5px",
            }}
          >
            <IconButton
              color="primary"
              style={{ fontSize: "14px", padding: "3px" }}
            >
              <EditOutlinedIcon style={{ color: "black", fontSize: "18px" }} />
            </IconButton>
          </div>
          <div
            style={{
              border: "1px solid red",
              borderRadius: "3px",
              padding: "2px",
              height: "25px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "5px",
            }}
          >
            <IconButton
              color="secondary"
              style={{ fontSize: "14px", padding: "3px" }}
            >
              <DeleteOutlinedIcon
                style={{ color: "black", fontSize: "18px" }}
              />
            </IconButton>
          </div>
          <div
            style={{
              border: "1px solid deepskyblue",
              borderRadius: "3px",
              padding: "2px",
              height: "25px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconButton
              color="default"
              style={{ fontSize: "14px", padding: "3px" }}
            >
              <VisibilityOutlinedIcon
                style={{ color: "black", fontSize: "18px" }}
              />
            </IconButton>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="main-container">
      <h2>Doctors List</h2>
      <div className="add-button-container">
        <Button className="add-btn" variant="contained">
          Add Doctor
        </Button>
      </div>

      <div className="table-controls">
        <div className="records-per-page">
          <span>
            Display
            <Select
              value={recordsPerPage}
              onChange={(e) => setRecordsPerPage(e.target.value)}
              size="small"
              style={{ marginLeft: "10px" }}
            >
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={20}>20</MenuItem>
            </Select>{" "}
            Records per page:
          </span>
        </div>
        <div className="search-container">
          <span>Search:</span>
          <TextField
            variant="outlined"
            size="small"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <IconButton
                  position="start"
                  style={{ margin: 0, paddingRight: "15px" }}
                >
                  <SearchIcon />
                </IconButton>
              ),
            }}
            className="search-field"
            style={{
              height: "30px",
              padding: "0px",
            }}
          />
        </div>
      </div>
      <div className="data-grid-container">
        <DataGrid
          rows={filteredRows}
          columns={columns}
          pageSize={recordsPerPage}
          sx={{
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "blue",
              color: "black",
              fontWeight: "600",
            },
            "& .MuiDataGrid-columnHeaderTitle": {
              fontWeight: "600",
              textAlign: "center",
              justifyContent: "center",
              display: "flex",
            },
            "& .MuiDataGrid-cell": {
              textAlign: "center",
            },
          }}
        />
      </div>
    </div>
  );
};

export default CustomTable;
