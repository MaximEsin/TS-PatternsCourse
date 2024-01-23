interface IUserService {
  users: number;
  getUsersInDatabase(): number;
}

@AddCreatedAt
class UserService implements IUserService {
  users: number = 1000;

  getUsersInDatabase(): number {
    return this.users;
  }
}

function AddCreatedAt<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    createdAt: Date = new Date();
  };
}

type CreatedAt = {
  createdAt: Date;
};

console.log((new UserService() as IUserService & CreatedAt).createdAt);
