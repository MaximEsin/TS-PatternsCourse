interface IMiddleware {
  next(middleware: IMiddleware): IMiddleware;
  handle(request: any): any;
}

abstract class AbstractMiddleware implements IMiddleware {
  private nextMiddleware: IMiddleware;

  next(middleware: IMiddleware): IMiddleware {
    this.nextMiddleware = middleware;
    return middleware;
  }

  handle(request: any) {
    if (this.nextMiddleware) {
      return this.nextMiddleware.handle(request);
    }

    return;
  }
}

class AuthMiddleware extends AbstractMiddleware {
  override handle(request: any) {
    console.log('AuthMiddleware');
    if (request.userId === 1) {
      return super.handle(request);
    }
    return { error: 'You are not authorised' };
  }
}

class ValidateMiddleware extends AbstractMiddleware {
  override handle(request: any) {
    console.log('Validation');
    if (request.body) {
      return super.handle(request);
    }
    return { error: 'No body' };
  }
}

class Controller extends AbstractMiddleware {
  override handle(request: any) {
    console.log('Controller');
    if (request.userId === 1) {
      return super.handle(request);
    }
    return { success: 'request' };
  }
}

const controller = new Controller();
const validate = new ValidateMiddleware();
const auth = new AuthMiddleware();

auth.next(validate).next(controller);

// We split 1 middleware in 3 specific and we can call then 1 by 1 in a chain
