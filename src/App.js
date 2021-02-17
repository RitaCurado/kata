import React from 'react';
import logo from './logo.svg';
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
        <h1>UC Test in iframes</h1>
        <iframe
            id="s8dd3b9d025e401361d1d7054d2ab776f"
            src="https://app.usercentrics.eu/browser-ui/preview/index.html?settingsId=I_VOBxm_v"
            frameborder="0"
            scrolling="no"
            allowfullscreen="true"
            allow="autoplay; fullscreen"
            style={{ minWidth: '100%', width: '100px', height: '548px', margin: '0px', padding: '0px', border: '0px', display: 'block' }}>
        </iframe>
    </div>
  );
}

export default App;
