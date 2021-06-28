import { useState } from 'react';
import { AudioPlayer } from '../components/AudioPlayer';
import { FilterInput } from '../components/FilterInput';

export default function Home({ albums, artists, genres, songs }) {
  const [genreFilter, setGenreFilter] = useState('');
  const [artistFilter, setArtistFilter] = useState('');
  const [albumFilter, setAlbumFilter] = useState('');
  const [activeSong, setActiveSong] = useState();

  return (
    <div>
      <header>
        <img src="/play.svg" alt="play" />
        <h1>SOUNDIFY</h1>
      </header>
      <AudioPlayer activeSong={activeSong} />
      <section className="filter-section">
        <FilterInput
          options={genres}
          value={genreFilter}
          filterSetter={setGenreFilter}
          name="genre"
        />
        <FilterInput
          options={artists}
          value={artistFilter}
          filterSetter={setArtistFilter}
          name="artist"
        />
        <FilterInput
          options={albums}
          value={albumFilter}
          filterSetter={setAlbumFilter}
          name="album"
        />
      </section>
      <div className="song-list">
        <div className="song-header">
          <div>Name</div>
          <div>Album </div>
          <div>Year </div>
          <div>Artist </div>
          <div>Play</div>
          <div>Genre</div>
        </div>
        {songs
          .filter((song) => {
            let isVisible = true;
            if (genreFilter && genreFilter !== song.genre) {
              isVisible = false;
            }
            if (artistFilter && artistFilter !== song.artist) {
              isVisible = false;
            }
            if (albumFilter && albumFilter !== song.album) {
              isVisible = false;
            }
            return isVisible;
          })
          .map((song) => {
            return (
              <div
                key={song.id}
                className="song-container"
                onDoubleClick={() => {
                  setActiveSong(song);
                }}
              >
                <div className="song-title">{song.name}</div>
                <div>{song.album}</div>
                <div>{song.release}</div>
                <div>{song.artist}</div>
                <button
                  className="song-play"
                  onClick={() => {
                    setActiveSong(song);
                  }}
                >
                  <img src="/play.svg" alt="play" />
                </button>
                <div>{song.genre}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const { getAlbums, getArtists, getGenres, getSongs } = await import(
    '../utils/database'
  );
  const albums = await getAlbums();
  const artists = await getArtists();
  const genres = await getGenres();
  const songs = await getSongs();
  return {
    props: {
      albums,
      artists,
      genres,
      songs,
    },
  };
}
