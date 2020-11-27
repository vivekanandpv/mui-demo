import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue('firstName') || ''} ${
        params.getValue('lastName') || ''
      }`,
  },
  {
    field: 'options',
    headerName: 'Options',
    width: 130,
    renderCell: (params) => {
      return <button onClick={() => console.log(params.data)}>Edit</button>;
    },
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: 'Shubhit', age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function SearchableDataTable() {
  const [baseData, setBaseData] = useState(rows);

  const filterHandler = (term) => {
    const filteredData = rows.filter(
      (r) => r.firstName.toLowerCase().indexOf(term.toLowerCase()) !== -1
    );
    setBaseData(filteredData);
  };

  return (
    <React.Fragment>
      <input onInput={(e) => filterHandler(e.target.value)} />
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={baseData} columns={columns} pageSize={5} />
      </div>
    </React.Fragment>
  );
}
