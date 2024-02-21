import { ColDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";
import { useCallback, useMemo, useRef } from "react";
import { IAPIUsersDisplayData } from "../adaptors/types";
import useDummyFetchUsers from "../hooks/dummy-users.hook";

const UsersGrid: React.FC = () => {
  const [users, colDefs] = useDummyFetchUsers();
  const gridRef = useRef<AgGridReact<IAPIUsersDisplayData>>(null);

  const defaultColDef = useMemo<ColDef<IAPIUsersDisplayData>>(() => {
    return {
      sortable: true,
      filter: false,
      resizable: true,
    };
  }, []);

  const handleAutoSize = useCallback((skipHeader: boolean) => {
    const allColumnIds: Array<string> = [];
    gridRef.current?.api?.getColumns()?.forEach((column) => {
      allColumnIds.push(column.getId());
    });
    gridRef.current?.api?.autoSizeColumns(allColumnIds, skipHeader);
  }, []);

  const handleSelectAll = () => {
    gridRef.current?.api?.selectAll();
  };
  const handleDeselectAll = () => {
    gridRef.current?.api?.deselectAll();
  };

  return (
    <>
      <div className="grid-operations-button-container">
        <button className="button-primary" onClick={handleSelectAll}>
          Select All
        </button>
        <button className="button-primary" onClick={handleDeselectAll}>
          Deselect All
        </button>
        <button className="button-primary" onClick={() => handleAutoSize(true)}>
          AutoSize Columns
        </button>
      </div>
      <div className="ag-theme-alpine" style={{ height: "88vh" }}>
        <AgGridReact<IAPIUsersDisplayData>
          ref={gridRef}
          rowData={users}
          columnDefs={colDefs}
          defaultColDef={defaultColDef}
          pagination={true}
          paginationAutoPageSize={true}
          enableBrowserTooltips={true}
        />
      </div>
    </>
  );
};

export default UsersGrid;
