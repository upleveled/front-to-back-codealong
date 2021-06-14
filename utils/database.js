import camelcaseKeys from 'camelcase-keys';
import { sql } from './postgresConfig';

// --------------- Step 3 --------------
//
// In this step we are going to create javascript functions that allow us to get data from our database Programmatically
//
// 1. Please create a function getArtists() that perform a SQL query to our database and return an array of artists

export async function getArtists() {
  // add code here...
}

// After this task is complete
// - add to "scripts" inpackage.json
//    - "heroku-postbuild": "yarn migrate up && yarn build",
// -
// move to pages/index.js file for the step 4 (code for step 4 is at the end of the file)

export async function getAlbums() {
  const albums = await sql`
  SELECT * FROM albums
  `;
  return albums;
}

export async function getGenres() {
  const genres = await sql`
  SELECT * FROM genres
  `;
  return genres;
}

export async function getSongs() {
  const songs = await sql`
SELECT
  s.id,
  s.name,
  s.slug,
  g.name as genre,
  ar.name as artist,
  al.name as album,
  al.year as release
FROM
  songs as s,
  genres as g,
  artists as ar,
  albums as al
WHERE
  s.genre_id = g.id
AND
  s.artist_id = ar.id
AND
  s.album_id = al.id
`;
  return songs.map((song) => camelcaseKeys(song));
}
