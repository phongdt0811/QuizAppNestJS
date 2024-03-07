// src/migrations/YYYYMMDDHHMMSS-AddExampleUsers.ts
import { MigrationInterface, QueryRunner } from 'typeorm';
import { User } from 'src/entities/user.entity';

export class InsertDemoUser1709807343892 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const userRepository = queryRunner.manager.getRepository(User);

    const user1 = new User();
    user1.phone = '0987654321';
    user1.password = '123456';
    user1.fullName = 'Jacky Chan';

    const user2 = new User();
    user2.phone = '0123456789';
    user2.password = '654321';
    user2.fullName = 'HongYumi';

    await userRepository.save([user1, user2]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Rollback logic if needed
  }
}
