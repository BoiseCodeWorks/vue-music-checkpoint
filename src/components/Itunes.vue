<template>
    <div>
        <div class="panel panel-default col-xs-6 col-md-6 col-lg-6">
            <div class="panel-body">
                <form @submit.prevent="getSongs">
                    <div class="form-group text-align: center">
                        <input type="text" v-model="artist" placeholder="Artist Name" />
                        <button type="submit" class="btn btn-primary">Find Songs</button>
                    </div>
                </form>
                <div v-for="(song, index) in songList" :key="song">
                    <div class="img-container text-center">
                        <img :src="song.albumArt" />
                        <span class="glyphicon glyphicon-music align-left" aria-hidden="true"></span>
                        <span class="glyphicon glyphicon-music align-left" aria-hidden="true"></span>
                        <span class="glyphicon glyphicon-music align-left" aria-hidden="true"></span>
                        <span class="glyphicon glyphicon-music align-right" aria-hidden="true"></span>
                        <span class="glyphicon glyphicon-music align-right" aria-hidden="true"></span>
                        <span class="glyphicon glyphicon-music align-right" aria-hidden="true"></span>

                        <h3>Song: {{song.title}}</h3>
                        <h4>By: {{song.artist}}</h4>
                        <h5>Album: {{song.collection}}</h5>
                        <h5>${{song.price}}</h5>

                        <button v-if="!track.isThere" class="btn btn-primary" @click="addMyTunes(index,song)">Add to MyTunes</button>
                        <audio controls preload="none">
                            <source :src="song.preview" type="audio/mp4">
                        </audio>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import itunesService from '../services/itunes-service'
    import myTunesService from '../services/mytunes-service'

    export default {
        name: 'i-tunes',
        data() {
            return {
                artist: '',
                track: {},
                songList: []

            }
        },
        methods: {
            getSongs() {
                itunesService.getMusicByArtist(this.artist).then(res => {
                    res.json().then(data => {
                        console.log(data)
                        this.songList = data.results.map(function (song) {
                            return {
                                title: song.trackName,
                                albumArt: song.artworkUrl60,
                                artist: song.artistName,
                                collection: song.collectionName,
                                price: song.collectionPrice,
                                preview: song.previewUrl,
                                id: song.trackId
                            };
                        })
                        this.artist = ''
                    }).catch(console.log('The song fetch request has succeeded'))

                })
            },
            addMyTunes(index, song) {

                myTunesService.addTrack(song)
                console.log(song)
                myTunesService.getTracks()

            }
        }
    }

</script>

<style>

</style>