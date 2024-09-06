import { Pool } from "pg";
import { PostgresDialect } from "kysely";
import { defineConfig } from "kysely-ctl";

export default defineConfig({
  // replace me with a real dialect instance OR a dialect name + `dialectConfig` prop.
  dialect: new PostgresDialect({
    pool: new Pool({
      host: "localhost",
      database: "myDB",
    }),
  }),
  migrations: {
    migrationFolder: "migrations",
  },
  plugins: [],
//   seeds: {
//     seedFolder: "seeds",
//   },
});
