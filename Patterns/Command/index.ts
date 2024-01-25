class Userr {
  constructor(public userId: number) {}
}

class CommandHistory {
  public commands: Command[] = [];
  push(command: Command) {
    this.commands.push(command);
  }

  remove(command: Command) {
    this.commands = this.commands.filter(
      (c) => c.commandId !== command.commandId
    );
  }
}

abstract class Command {
  public commandId: number;

  abstract execute(): void;

  constructor(public history: CommandHistory) {
    this.commandId = Math.random();
  }
}

class AddUserCommand extends Command {
  constructor(
    private user: Userr,
    private reciever: UserServicee,
    history: CommandHistory
  ) {
    super(history);
  }

  execute(): void {
    this.reciever.saveUser(this.user);
    this.history.push(this);
  }

  undo() {
    this.reciever.delete(this.user.userId);
    this.history.remove(this);
  }
}

class UserServicee {
  saveUser(user: Userr) {
    console.log('Saving a user with id');
  }

  delete(userId: number) {
    console.log('Deleting user by id');
  }
}
