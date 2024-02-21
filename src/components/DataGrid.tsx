import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact, AgGridReactProps } from "ag-grid-react";

const DataGrid: React.FC<AgGridReactProps> = (props) => {
  return (
    <div className="ag-theme-alpine" style={{ height: "100vh" }}>
      <AgGridReact {...props} />
    </div>
  );
};

export default DataGrid;
