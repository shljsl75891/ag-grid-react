import { AnyObject } from "../types";
import { IAPIUsersDisplayData, IAdaptor } from "./types";

class UsersApdator implements IAdaptor<IAPIUsersDisplayData> {
  adaptToModel(response: AnyObject): IAPIUsersDisplayData {
    return {
      id: response?.id,
      fullName: response?.firstName + " " + response?.lastName,
      age: response?.age,
      gender: response?.gender,
      email: response?.email,
      dateOfBirth: response?.birthDate,
      role: response?.company?.title,
      height: response?.height,
      weight: response?.weight,
      department: response?.company?.department,
      address: `${response?.address?.address}, ${response?.address?.city}`,
      university: response?.university,
      company: `${response?.company?.address?.address}, ${response?.company?.address?.city}`,
    };
  }
}

export default UsersApdator;
