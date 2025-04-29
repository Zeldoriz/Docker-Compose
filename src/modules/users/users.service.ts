import { database } from '../../db/connectDB';
import User from './user.interface';

export default class UsersService {
  constructor() {}

  static async getAllUsers(): Promise<User[]> {
    try {
      const users = await database('users').select('*');
      console.log(users, 'Connection to DB successful!');
      return users;
    } catch (error) {
      console.error('Error fetching users:', error);
      return [] as User[];
    }
  }

  static async getUserById(userID: number): Promise<User | null> {
    try {
      const user = await database('users').where('user_id', userID).first();
      if (!user) return null;
      return user;
    } catch (error) {
      console.error('Error fetching user:', error);
      return null;
    }
  }
}
