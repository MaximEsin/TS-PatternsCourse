interface Mediator {
  notify(sender: string, event: string): void;
}

abstract class Mediated {
  mediator: Mediator;

  setMediator(mediator: Mediator) {
    this.mediator = mediator;
  }
}

class Notifications {
  send() {
    console.log('Sending notification');
  }
}

class Logg {
  log(message: string) {
    console.log('Message');
  }
}

class EventHandler extends Mediated {
  myEvent() {
    this.mediator.notify('EventHandler', 'myEvent');
  }
}

class NotificationMediator implements Mediator {
  constructor(
    public notifications: Notifications,
    public log: Logg,
    public eventHandler: EventHandler
  ) {}

  notify(sender: string, event: string): void {
    switch (event) {
      case 'myEvent':
        this.notifications.send();
        this.log.log('Sent');
        break;
    }
  }
}

const handler = new EventHandler();
const logger = new Logg();
const notifications = new Notifications();

const m = new NotificationMediator(notifications, logger, handler);

handler.setMediator(m);
handler.myEvent();
