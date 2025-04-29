import User from './user.interface';

export default interface Payload {
  clientPayload: string | null;
  responsePayload: User | User[] | null;
  time: string;
}
