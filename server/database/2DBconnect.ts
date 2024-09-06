import { Kysely, PostgresDialect } from "kysely";
import { DB as Database } from "kysely-codegen";
import { Pool } from "pg";

const db = new Kysely<Database>({
  dialect: new PostgresDialect({
    pool: new Pool({
      connectionString: process.env.DATABASE_URL,
    }),
  }),
});

export default db

