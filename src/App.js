import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <h1>Bookmarks</h1>
        <ul>
            <li>My Links
                <ul>
                    <li><a href="https://www.ikea.pt" target="_blank">Ikea</a></li>
                    <li><a href="https://www.noticiasaominuto.com/" target="_blank">Noticias</a></li>
                    <li><a href="https://www.spotify.com/" target="_blank">Spotify</a></li>
                </ul>
            </li>
        </ul>
    </div>
  );
}

export default App;
