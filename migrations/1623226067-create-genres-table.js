exports.up = async (sql) => {
  await sql`
    CREATE TABLE genres (
      id integer PRIMARY KEY UNIQUE NOT NULL,
      name varchar(40) NOT NULL
    )
  `;
};

exports.down = async (sql) => {
  await sql`
    DROP TABLE genres
  `;
};
