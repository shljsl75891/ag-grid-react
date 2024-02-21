import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact, AgGridReactProps } from "ag-grid-react";
import { AnyObject } from "../types";

const DataGrid = <T extends AnyObject>(props: AgGridReactProps<T>) => {
  return (
    <div className="ag-theme-alpine" style={{ height: "100vh" }}>
      <AgGridReact {...props} />
    </div>
  );
};

export default DataGrid;
