import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateQuestionTable1709806543727 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "question" (
                "id" SERIAL PRIMARY KEY,
                "questionText" character varying(255) NOT NULL,
                "options" json NOT NULL,
                "hint" character varying(255),
                "type" integer DEFAULT 1 NOT NULL,
                "correctOption" integer[] DEFAULT ARRAY[]::integer[] NOT NULL
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
