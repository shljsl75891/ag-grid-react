import { AnyObject } from "../types";

class UsersService {
  private url: string;
  constructor() {
    this.url = import.meta.env.VITE_MOCK_USERS_API;
  }

  async getUsers(): Promise<Array<AnyObject>> {
    const response = await fetch(this.url);
    const data = await response.json();
    return data?.users;
  }

  async getUserById(id: number): Promise<AnyObject> {
    const response = await fetch(this.url + id);
    const data = await response.json();
    return data;
  }
}

export default UsersService;
