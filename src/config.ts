import session from '../types';

const appSession = session({
  secret: String(process.env.SESSION_SECRET),
  resave: false,
  saveUninitialized: true,
});

const serverPort = process.env.PORT || 5000;

export { appSession, serverPort };
