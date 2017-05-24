### 2. Radio on the Internet app

This app hosts a ton of radio stations, each featuring their own playlists of songs. The radio stations can be listed by genre or popularity.


Radio app has:

User has:
- User ID
- Password

Radio Stations
- genre
- popularity
- suggestions
- Artist
- liked songs
- skipped/disliked songs

user playlists has:
- artist
- liked songs
- Genere

var user = {
    username: string
    password: string
}

var radioStations = {
    radioStationsId: string
    genre: []
    popularity: []
    BySuggestionsId: []
    byArtistId:[]
    likedSongs:[]
}

var playlists = {
    playlistsId: string
    artist: []
    likedSongs: []
    genre: []
}

var exampleRadioApp = {
    username: bobmarely
    password: 2littlebirds
    Stations [{
        radioStationsbyId: [{
            id: 7893267823172
        }]
        radioStationsByGenreId: [{
            genreId: 7893267823170
        }]
        radioStationsByPopularityId: [{
            popularityId: 7893267823171
        }]
        


    }]
}