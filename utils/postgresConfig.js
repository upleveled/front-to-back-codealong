import postgres from 'postgres';
import setPostgresDefaultsOnHeroku from './setPostgresDefaultsOnHeroku';

setPostgresDefaultsOnHeroku();

require('dotenv-safe').config();
function connectOneTimeToDatabase() {
  let sql;

  if (process.env.NODE_ENV === 'production') {
    sql = postgres({ ssl: { rejectUnauthorized: false } });
  } else {
    if (!globalThis.__postgresSqlClient) {
      globalThis.__postgresSqlClient = postgres();
    }
    sql = globalThis.__postgresSqlClient;
  }
  return sql;
}
export const sql = connectOneTimeToDatabase();
