import dotenv from 'dotenv';
import mongoose from 'mongoose';

import ApiApp from './ApiApp';

dotenv.config();

(async () => {
  await mongoose.connect(process.env.MONGO_URI as string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  ApiApp.start(process.env.PORT);
})();
