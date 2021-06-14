const artistList = [
  { id: 1, name: 'Mystery Mammal' },
  { id: 2, name: 'Monplaisir' },
  { id: 3, name: 'Arrizabalaga, Bravo, Laginestra, Martinez' },
];

// 2.2 Please automate the filling of the table artists with the data of our artistList array

exports.up = async function up(sql) {
  // 1. Define a SQL query that INSERT data into table artists from artistList array

  await sql`
	INSERT INTO artists ${sql(artistList, 'id', 'name')}
`;
};

exports.down = async function down(sql) {
  // 2. Define a SQL query that DELETE all data from table artists
};

// After the completion of this tasks please move to file utils/database.js to continue with the next step.
