<template>
    <div>
        <div class="playlist-card">
            <div v-for="song in playlist">
                <div class="card horizontal">
                    <div class="card-image black valign-wrapper">
                        <img class="album-img center" :src="song.artworkUrl100">
                    </div>
                    <div class="card-stacked">
                        <div class="card-content">
                            <ul>
                                <li>{{song.artistName}}</li>
                                <li>{{song.trackName}}</li>
                                <li>{{song.collectionName}}</li>
                                <audio controls :src="song.previewUrl"></audio>
                            </ul>
                        </div>
                        <div class="card-action">
                            <a class="btn-floating btn-flat waves-effect waves-light red left-align" @click="downVote(song)"><i class="material-icons ">thumb_down</i></a>
                            <a class="btn-floating btn-flat waves-effect waves-light red left-align" @click="upVote(song)"><i class="material-icons">thumb_up</i></a>
                            <a class="btn-floating btn-flat waves-effect waves-light red left-align" @click="deleteSong(song)"><i class="material-icons">not_interested</i></a>
                            <div v-if="song.vote === 1">
                                <a class="btn-flat red white-text">Liked</a>   
                            </div>
                            <div v-else-if="song.vote === -1">
                                <a class="btn-flat red white-text">Disliked</a>
                            </div>
                            <div v-else-if="song.vote === 0">
                                <a class="btn-flat red white-text">Not voted</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import itunesService from '../services/itunes-service.js'
    import mytunesService from '../services/mytunes-service.js'
    export default {
        name: 'mytunes',
        data() {
            return {
                playlist: {}
            }
        },
        mounted() {
            this.playlist = mytunesService.getTracks()

        },
        methods: {

            deleteSong(song) {
                mytunesService.removeTrack(song)
            },
            upVote(song) {
                mytunesService.promoteTrack(song)
            },
            downVote(song) {
                mytunesService.demoteTrack(song)
            }

        }
    }

</script>

<style>

</style>