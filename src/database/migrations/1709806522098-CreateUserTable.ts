import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateUserTable1709806522098 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "user" (
                "id" SERIAL PRIMARY KEY,
                "phone" character varying(255) NOT NULL,
                "password" character varying(255) NOT NULL,
                "fullName" character varying(255) NOT NULL
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
