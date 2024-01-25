class Useer {
  githubToken: string;
  jwtToken: string;
}

interface AuthStrategy {
  auth(user: Useer): boolean;
}

class Auth {
  constructor(private strategy: AuthStrategy) {}

  setStrategy(strategy: AuthStrategy) {
    this.strategy = strategy;
  }

  public authUser(user: Useer): boolean {
    return this.strategy.auth(user);
  }
}

class JWTStrategy implements AuthStrategy {
  auth(user: Useer): boolean {
    if (user.jwtToken) {
      return true;
    }
    return false;
  }
}

class GitHubStrategy implements AuthStrategy {
  auth(user: Useer): boolean {
    if (user.githubToken) {
      return true;
    }
    return false;
  }
}

const useer = new Useer();
useer.jwtToken = 'token';
const authh = new Auth(new JWTStrategy());
console.log(authh.authUser(useer));
