import { registerAs } from '@nestjs/config';

export default registerAs('CONFIGS', () => ({
  DATABASE_URL:
    'mongodb+srv://demonrage725:iNAo4f759eDgSsvx@cluster0.tisppw9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0?directConnection=true',
  PORT: 3001,
  JWT_SECRET: '2EhG8u5VqW54W4Ux9A3f7RbE6S2e0BdK',
}));
