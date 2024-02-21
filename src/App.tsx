import { ColDef, ColGroupDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";
import { useEffect, useMemo, useState } from "react";
import { IAPIUsersDisplayData } from "./adaptors/types";
import UsersApdator from "./adaptors/users.adaptor";
import UsersService from "./services/users.service";

const App: React.FC = () => {
  const [users, setUsers] = useState<IAPIUsersDisplayData[]>([]);

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

  const populateData = async () => {
    const usersService = new UsersService();
    const usersAdaptor = new UsersApdator();
    const data = await usersService.getUsers();
    const adaptedData = data.map((user) => usersAdaptor.adaptToModel(user));
    setUsers(adaptedData);
  };

  useEffect(() => {
    populateData();
  }, []);

  return (
    <div className="ag-theme-alpine" style={{ height: 500 }}>
      <AgGridReact columnDefs={colDefs} rowData={users} />
    </div>
  );
};

export default App;
