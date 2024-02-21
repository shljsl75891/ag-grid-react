import { AnyObject } from "../types";
import { IAPIUsersDisplayData, IAdaptor } from "./types";

class ApiUsersApdator implements IAdaptor<IAPIUsersDisplayData> {
  adaptToModel(response: AnyObject): IAPIUsersDisplayData {
    return {
      id: response?.id,
      fullName: response?.fullName,
      age: response?.age,
      gender: response?.gender,
      email: response?.email,
      dateOfBirth: response?.birthDate,
      height: response?.height,
      weight: response?.weight,
      department: response?.company?.department,
      role: response?.company?.title,
      address: `${response?.address?.address}, ${response?.address?.city}`,
      university: response?.university,
      company: `${response?.company?.address?.address}, ${response?.company?.address?.city}`,
    };
  }
}

export default ApiUsersApdator;
