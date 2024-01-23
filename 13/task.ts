interface IUserService {
  users: number;
  getUsersInDatabase(): number;
}

class UserService implements IUserService {
  users: number = 1000;

  @Catch
  getUsersInDatabase(): number {
    return this.users;
  }
}

function Catch(
  target: Object,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    try {
      const result = originalMethod.apply(this, args);
      return result;
    } catch (error) {
      console.log(`Error in method ${propertyKey}:`, error);
      throw error;
    }
  };

  return descriptor;
}
