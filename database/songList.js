export const genres = {
  rock: 'rock',
  pop: 'pop',
};

export const artists = {
  John: 'John',
  Alexandra: 'Alexandra',
};

export const albums = {
  exampleAlbum1: {
    name: 'album example john',
    year: 2020,
  },
  exampleAlbum2: {
    name: 'album example alexandra',
    year: 2021,
  },
};

export const songs = [
  {
    id: 1,
    name: 'song example one',
    slug: 'example1',
    artist: artists.John,
    genre: genres.rock,
    album: albums.exampleAlbum1,
  },
  {
    id: 2,
    name: 'song example two',
    slug: 'example2',
    artist: artists.Alexandra,
    genre: genres.pop,
    album: albums.exampleAlbum2,
  },
  {
    id: 3,
    name: 'song example three',
    slug: 'example2',
    artist: artists.Alexandra,
    genre: genres.rock,
    album: albums.exampleAlbum2,
  },
];
