exports.up = async (sql) => {
  const { current_database } = (await sql`SELECT current_database()`)[0];
  console.log('Your current database is ===>', current_database);
  if (
    current_database !== 'upleveled_front_to_back' &&
    process.env.NODE_ENV !== 'production'
  ) {
    throw Error('⚠️ ⚠️ ⚠️ ⚠️ -------> wrong DATABASE setup ⚠️ ⚠️ ⚠️ ⚠️');
  }
};

exports.down = async (sql) => {
  const { current_database } = (await sql`SELECT current_database()`)[0];
  console.log('Your current database is ===>', current_database);
};
