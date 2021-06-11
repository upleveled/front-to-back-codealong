import { useEffect, useRef } from 'react';

const defaultSong = {
  name: '---',
  artist: '---',
  album: '---',
  release: '---',
  genre: '---',
};

export function AudioPlayer({ activeSong = defaultSong }) {
  const firstRender = useRef(false);
  const controlRef = useRef(null);

  useEffect(() => {
    if (firstRender.current) {
      controlRef.current.pause();
      controlRef.current.currentTime = 0;
      controlRef.current.load();
      controlRef.current.play();
    } else {
      firstRender.current = true;
    }
  }, [activeSong]);

  return (
    <div key={activeSong.id} className={`song-player`}>
      <div className="song-info">
        <div>
          <strong>{activeSong.name} </strong>- {activeSong.artist}
        </div>
        <div>
          {activeSong.album} - {activeSong.release}
        </div>
        <div>{activeSong.genre}</div>
      </div>
      <div className="audio-element">
        <audio ref={controlRef} controls>
          <source
            src={activeSong.slug ? `/songs/${activeSong.slug}.mp3` : ''}
            type="audio/mpeg"
          />
          Your browser does not support the audio tag.
        </audio>
      </div>
    </div>
  );
}
