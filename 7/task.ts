abstract class Logger {
  abstract log(messsage: string): void;

  printDate() {
    return new Date();
  }
}

class LoggerWithDate extends Logger {
  log(message: string): void {
    console.log(message);
  }

  logWithDate(message: string) {
    const date = this.printDate();
    const log = this.log(message);
    return `Message ${log}. Created at: ${date}`;
  }
}
