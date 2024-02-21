import { ColDef, ColGroupDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useMemo } from "react";
import { IAPIUsersDisplayData } from "./adaptors/types";
import useDummyFetchUsers from "./hooks/dummy-users.hook";
import { AgGridReact } from "ag-grid-react";

const App: React.FC = () => {
  const users = useDummyFetchUsers();
  const colDefs: (
    | ColDef<IAPIUsersDisplayData, string | number>
    | ColGroupDef<IAPIUsersDisplayData>
  )[] = useMemo(
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
      sortable: false,
      filter: true,
      resizable: true,
    };
  }, []);

  return (
    <div className="ag-theme-alpine" style={{ height: 500 }}>
      <AgGridReact
        columnDefs={colDefs}
        rowData={users}
        defaultColDef={defaultColDef}
      />
    </div>
  );
};

export default App;
