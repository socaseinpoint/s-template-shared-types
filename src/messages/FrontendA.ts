export interface FrontendAMessage {
  type: 'LOGIN' | 'LOGOUT';
  payload: {
    userId: string;
    timestamp: string;
  };
}

