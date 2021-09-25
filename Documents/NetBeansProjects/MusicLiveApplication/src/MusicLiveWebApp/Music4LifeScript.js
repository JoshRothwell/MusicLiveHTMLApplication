var music = {
              "LicencePlatform": "Music4Life",
              "musicTitles": [
                {
                  "MusicId": 1,  
                  "Name": "All I Need",
                  "Artist": "Slushii",
                  "Platform": "Spotify",
                  "CopyrightStatus": "Free"
                },
                {
                  "MusicId": 2, 
                  "Name": "Wake Up",
                  "Artist": "Grant, Jeneau",
                  "Platform": "Spotify",
                  "CopyrightStatus": "Free"
                },
                {
                  "MusicId": 3, 
                  "Name": "Hero",
                  "Artist": "Monstercat",
                  "Platform": "Spotify",
                  "CopyrightStatus": "Licenced"
                },
                {
                  "MusicId": 4, 
                  "Name": "Fashion",
                  "Artist": "Electronic House Background",
                  "Platform": "Soundcloud",
                  "CopyrightStatus": "Licenced"
                },
                {
              "MusicId": 5, 
                  "Name": "ANtarticbreeze",
                  "Artist": "Prometheus",
                  "Platform": "Soundcloud",
                  "CopyrightStatus": "Free"
                },
                {
                  "MusicId": 6, 
                  "Name": "Riders On The Storm",
                  "Artist": "Wareika",
                  "Platform": "Soundcloud",
                  "CopyrightStatus": "Licenced"
                },
                {
                  "MusicId": 7, 
                  "Name": "Once Again",
                  "Artist": "Monstercat",
                  "Platform": "Spotfy",
                  "CopyrightStatus": "Licenced"
                }
              ]
            };

// Table of musicTitles
var musicTitlesEl = document.getElementById( "musicTitles" );
var musicTitles = music.musicTitles;

for ( var i = 0; i < musicTitles.length; i += 1 ) {
  var row = document.createElement( "tr" );

  var MusicIdEl = document.createElement( "td" );
  MusicIdEl.innerHTML = musicTitles[ i ].MusicId;
  row.appendChild( MusicIdEl );

  var NameEl = document.createElement( "td" );
  NameEl.innerHTML = musicTitles[ i ].Name;
  row.appendChild( NameEl );

  var ArtistEl = document.createElement( "td" );
  ArtistEl.innerHTML = musicTitles[ i ].Artist;
  row.appendChild( ArtistEl );
  
  var PlatformtEl = document.createElement( "td" );
  PlatformtEl.innerHTML = musicTitles[ i ].Platform;
  row.appendChild( PlatformEl );
  
  var CopyrightStatusEl = document.createElement( "td" );
  CopyrightStatusEl.innerHTML = musicTitles[ i ].CopyrightStatus;
  row.appendChild( CopyrightStatusEl );
  
}

