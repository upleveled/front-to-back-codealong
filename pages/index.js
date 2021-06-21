export default function Home() {
  // -------------------------------------
  // ---------- STARTING SECTION ---------
  // -------------------------------------
  //
  // --------------- Step 1 --------------
  //
  // In this exercise you are going to build a full-stack music App.
  //
  // First we are going to work on the front-end of the app creating a user interface:
  //
  //   1. Explore the prepared code for the app inside of directories assets and components
  //   2. Add a header around the h1 Element and add an img with source "/play.svg"
  //   3. Using the AudioPlayer component allow the user to reproduce a song.
  //   4. Using the songList array allow the user to choose which song reproduce.
  //   5. Using the FilterInput component and assets data allow the user to filter by genre, artist or album.
  //
  // Once The user interface is ready you need to setup your postgres database.
  // TODO: ADD UpLeveled leaning LINK OR INSTRUCTIONS TO WHERE TO CONTINUE
  // - after that please go to the next step in the first file in migrations directory

  return (
    <div>
      <h1>SOUNDIFY</h1>
    </div>
  );
}

// ⚠️⚠️⚠️
// ⚠️⚠️⚠️ PLEASE IGNORE this section until you have completed steps  1, 2 and 3 ⚠️⚠️⚠️
// ⚠️⚠️⚠️
//
// --------------- Step 4 --------------
//
// Now, we are going to connect our front-end and back-end.
// Using Get Server Side Props (aka. GSSp) get the app data from the database instead of the assets files.
//
// 1. Import the database Util functions from utils/database.js
// 2. Get the data for the app. (albumList, artistList, genreList, songList)
// 3. Pass the data to the Page Component through props object
// 4. modify the code in the Home component to receive the data from database instead of assets
// 5. remove assets directory and the files inside
