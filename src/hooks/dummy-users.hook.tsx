import { ColDef } from "ag-grid-community";
import { useEffect, useMemo, useState } from "react";
import { IAPIUsersDisplayData } from "../adaptors/types";
import UsersApdator from "../adaptors/users.adaptor";
import UsersService from "../services/users.service";
import { dateLocalize, pascalize } from "../utils/helper";

const useDummyFetchUsers = () => {
  const [users, setUsers] = useState<IAPIUsersDisplayData[]>([]);

  const colDefs = useMemo<ColDef<IAPIUsersDisplayData>[]>(
    () => [
      {
        headerName: "Id",
        field: "id",
        checkboxSelection: true,
      },
      {
        headerName: "Name",
        field: "fullName",
        suppressSizeToFit: true,
        width: 150,
      },
      {
        headerName: "Age",
        field: "age",
      },
      {
        headerName: "Gender",
        field: "gender",
        valueFormatter: (params) => pascalize(params.value),
      },
      {
        headerName: "DOB",
        field: "dateOfBirth",
        valueFormatter: (params) => dateLocalize(params.value),
      },
      { headerName: "Email", field: "email" },
      {
        headerName: "University",
        field: "university",
        tooltipField: "university",
      },
      {
        headerName: "Role",
        field: "role",
      },
      {
        headerName: "Department",
        field: "department",
        tooltipField: "department",
      },
      {
        headerName: "Company",
        field: "company",
        tooltipField: "company",
      },
      {
        headerName: "Height",
        field: "height",
        valueFormatter: (params) => {
          return params.value + " cm";
        },
      },
      {
        headerName: "Weight",
        field: "weight",
        valueFormatter: (params) => {
          return params.value + " kg";
        },
      },
      {
        headerName: "Address",
        field: "address",
        tooltipField: "address",
      },
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
