import { PostgresDialect } from "kysely";
import { Pool } from "pg";

// This adapter exports a wrapper of the original `Kysely` class called `KyselyAuth`,
// that can be used to provide additional type-safety.
// While using it isn't required, it is recommended as it will verify
// that the database interface has all the fields that Auth.js expects.
import { KyselyAuth } from "@auth/kysely-adapter";

import type { GeneratedAlways } from "kysely";

interface Database {
  User: {
    id: GeneratedAlways<string>;
    name: string | null;
    email: string;
    emailVerified: Date | null;
    image: string | null;
  };
  Account: {
    id: GeneratedAlways<string>;
    userId: string;
    type: string;
    provider: string;
    providerAccountId: string;
    refresh_token: string | null;
    access_token: string | null;
    expires_at: number | null;
    token_type: string | null;
    scope: string | null;
    id_token: string | null;
    session_state: string | null;
  };
  Session: {
    id: GeneratedAlways<string>;
    userId: string;
    sessionToken: string;
    expires: Date;
  };
  VerificationToken: {
    identifier: string;
    token: string;
    expires: Date;
  };
}

export const db = new KyselyAuth({
  dialect: new PostgresDialect({
    pool: new Pool({
      connectionString: process.env.DATABASE_URL,
    }),
  }),
});

// this file allows postgreSQL to connect to our application.

// 1. Create Database by downloading Postgreapp OR Postgre Server.

// 2. Optionally download pgAdmin or Postico(mac only) or use the command line GUI "psql" to interact with the db.
//   2a. This allows you to create and drop dbs, tables, insert dummy info and many other db configurations.

// 3. Install necessary packages / drivers - 'pg' for Postgre. Kysely for typesafety, their various @types...
//   3a. Install kysely dependencies, generate types with codegen, perform db migration... follow their documentation for more.

// 4.  Create .env or .env.local file and add Postgre database URL
//   4a. ex; DATABASE_URL=postgresql://user:password@hostName:portNumber/nameOfDatabase.

// 5. Create file like this one that connect your database to the application
