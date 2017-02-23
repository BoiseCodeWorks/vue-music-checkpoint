<template>
    <div class="panel panel-default col-xs-6 col-md-6 col-lg-6">
        <h3>My Playlist:</h3>
        <div class="panel-body">

            <div v-if="track.isThere">
                <div v-for="(song, index) in myTracks">
                    <img :src="song.albumArt">
                    <h3>{{song.title}}</h3>
                    <audio ref="player" controls preload="none">
                        <source src="${song.preview}" type="audio/mp4" />
                    </audio>
                    <span>Album: {{song.collection}}</span>
                    <span>By: {{song.artist}}</span><br><br>
                </div>

                <button class="btn btn-warning" @click="deleteMyTunes">Remove from MyTunes</button>
                <i class="glyphicon glyphicon-thumbs-up" aria-hidden="true" @click="promoteMyTunes"></i> {{track.promote}}
                <i class="glyphicon glyphicon-thumbs-down" aria-hidden="true" @click="demoteMyTunes"></i> {{track.demote}}
            </div>
        </div>

    </div>
</template>

<script>
    import myTunesService from '../services/mytunes-service'
    import itunesService from '../services/itunes-service'

    export default {
        name: 'my-tunes',
        data() {
            return {
                track: {},
                myTracks: myTunesService.getTracks()
            }
        },
        methods: {
            deleteMyTunes(track) {
                // var i = this.myTracks.indexOf(track)
                // this.myTracks.splice(i, 1)
                myTunesService.removeTrack(track)

            },
            promoteMyTunes(track) {
                myTunesService.promoteTrack(track)
            },
            demoteMyTunes(track) {
                myTunesService.demoteTrack(track)
            }

        }
    }

</script>

<style>

</style>