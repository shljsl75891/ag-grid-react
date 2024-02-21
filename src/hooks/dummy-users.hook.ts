import { useEffect, useState } from "react";
import { IAPIUsersDisplayData } from "../adaptors/types";
import UsersApdator from "../adaptors/users.adaptor";
import UsersService from "../services/users.service";

const useDummyFetchUsers = () => {
  const [users, setUsers] = useState<IAPIUsersDisplayData[]>([]);

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

  return users;
};

export default useDummyFetchUsers;
