import { ColDef } from "ag-grid-community";
import { useMemo } from "react";
import { IAPIUsersDisplayData } from "./adaptors/types";
import DataGrid from "./components/DataGrid";
import useDummyFetchUsers from "./hooks/dummy-users.hook";

const App: React.FC = () => {
  const users = useDummyFetchUsers();
  const colDefs = useMemo<ColDef<IAPIUsersDisplayData, string | number>[]>(
    () => [
      { headerName: "Id", field: "id" },
      { headerName: "Name", field: "fullName" },
      { headerName: "Age", field: "age" },
      { headerName: "Gender", field: "gender" },
      { headerName: "DOB", field: "dateOfBirth" },
      { headerName: "Email", field: "email" },
      { headerName: "University", field: "university" },
      { headerName: "Role", field: "role" },
      { headerName: "Department", field: "department" },
      { headerName: "Company", field: "company" },
      { headerName: "Height", field: "height" },
      { headerName: "Weight", field: "weight" },
      { headerName: "Address", field: "address" },
    ],
    [],
  );

  const defaultColDef = useMemo(() => {
    return {
      sortable: true,
      filter: true,
      resizable: true,
    };
  }, []);

  return (
    <DataGrid
      rowData={users}
      columnDefs={colDefs}
      defaultColDef={defaultColDef}
    />
  );
};

export default App;
