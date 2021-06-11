exports.up = async (sql) => {
  await sql`
    CREATE TABLE albums (
      id integer PRIMARY KEY UNIQUE NOT NULL,
      name varchar(40) NOT NULL,
      year integer NOT NULL
    )
  `;
};

exports.down = async (sql) => {
  await sql`
    DROP TABLE albums
  `;
};
