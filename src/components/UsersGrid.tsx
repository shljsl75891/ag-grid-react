import { ColDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";
import { useMemo, useRef } from "react";
import { IAPIUsersDisplayData } from "../adaptors/types";
import useDummyFetchUsers from "../hooks/dummy-users.hook";

const UsersGrid: React.FC = () => {
  const [users, colDefs] = useDummyFetchUsers();
  const gridRef = useRef<AgGridReact<IAPIUsersDisplayData>>(null);

  const defaultColDef = useMemo<ColDef<IAPIUsersDisplayData>>(() => {
    return {
      sortable: true,
      filter: true,
      resizable: true,
    };
  }, []);

  return (
    <div className="ag-theme-alpine" style={{ height: "100vh" }}>
      <AgGridReact<IAPIUsersDisplayData>
        ref={gridRef}
        rowData={users}
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
        enableBrowserTooltips={true}
      />
    </div>
  );
};

export default UsersGrid;
