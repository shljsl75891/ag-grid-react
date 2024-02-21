import { useEffect, useMemo, useState } from "react";
import { IAPIUsersDisplayData } from "../adaptors/types";
import UsersApdator from "../adaptors/users.adaptor";
import UsersService from "../services/users.service";
import { ColDef } from "ag-grid-community";
import { dateLocalize, pascalize } from "../utils/helper";

const useDummyFetchUsers = () => {
  const [users, setUsers] = useState<IAPIUsersDisplayData[]>([]);

  const colDefs = useMemo<ColDef<IAPIUsersDisplayData>[]>(
    () => [
      { headerName: "Id", field: "id" },
      { headerName: "Name", field: "fullName" },
      { headerName: "Age", field: "age" },
      {
        headerName: "Gender",
        field: "gender",
        valueFormatter: (p) => pascalize(p.value),
      },
      {
        headerName: "DOB",
        field: "dateOfBirth",
        valueFormatter: (p) => dateLocalize(p.value),
      },
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

  return [users, colDefs] as const;
};

export default useDummyFetchUsers;
