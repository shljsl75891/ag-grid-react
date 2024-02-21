import { useMemo } from "react";
import DataGrid from "./components/DataGrid";
import useDummyFetchUsers from "./hooks/dummy-users.hook";
import { IAPIUsersDisplayData } from "./adaptors/types";
import { ColDef } from "ag-grid-community";

const App: React.FC = () => {
  const [users, colDefs] = useDummyFetchUsers();

  const defaultColDef = useMemo<ColDef<IAPIUsersDisplayData>>(() => {
    return {
      sortable: true,
      filter: true,
      resizable: true,
    };
  }, []);

  return (
    <DataGrid<IAPIUsersDisplayData>
      rowData={users}
      columnDefs={colDefs}
      defaultColDef={defaultColDef}
      enableBrowserTooltips={true}
    />
  );
};

export default App;
