import express, { Application } from 'express';

import router from './routers/ShortenerRoute';

class ApiApp {
  private application: Application;

  constructor() {
    this.application = express();
    this.setupGlobalMiddleware();
    this.setupRouters();
  }

  start(port: string | number = 3000) {
    return this.application.listen(port, () => {
      // eslint-disable-next-line no-console
      console.log(`listening on port ${port}`);
    });
  }

  getApplication() {
    return this.application;
  }

  private setupGlobalMiddleware() {
    this.application.use(express.json());
  }

  private setupRouters() {
    this.application.get('/', (_, res) => {
      res.json({ message: 'Welcome to our service!'});
    });

    this.application.use('/urls', router.getRouter());
  }
}

export default new ApiApp();
