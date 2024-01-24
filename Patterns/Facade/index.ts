class Notify {
  send(template: string, to: string) {
    console.log(`Sent ${template}: ${to}`);
  }
}

class Log {
  log(message: string) {
    console.log(message);
  }
}

class Template {
  private templates = [{ name: 'other', template: '<h1>Template</h1>' }];

  getByName(name: string) {
    return this.templates.find((t) => t.name === name);
  }
}

class NotificationFacade {
  private notification: Notify;
  private log: Log;
  private template: Template;

  constructor() {
    this.notification = new Notify();
    this.template = new Template();
    this.log = new Log();
  }

  send(to: string, templateName: string) {
    const data = this.template.getByName(templateName);
    if (!data) {
      this.log.log('Template not found');
      return;
    }
    this.notification.send(data.template, to);
    this.log.log('Template sent');
  }
}

const s = new NotificationFacade();
s.send('a@a.com', 'other');
