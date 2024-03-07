import { createConnection } from 'typeorm';
import { User } from '../entities/user.entity';

const insertDemoUsers = async () => {
  const connection = await createConnection();

  const userRepository = connection.getRepository(User);

  const usersData = [
    { phone: '0987654321', password: '123456', fullName: 'User demo 1' },
    { phone: '0123456789', password: '654321', fullName: 'User demo 2' },
  ];

  const users = userRepository.create(usersData);

  await userRepository.save(users);

  await connection.close();
};

insertDemoUsers();
