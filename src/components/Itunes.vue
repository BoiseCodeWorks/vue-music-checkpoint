<template>

    <div>
        <nav>
            <div class="nav-wrapper">
                <form @submit.prevent="getResults">
                    <div class="input-field">
                        <input id="search" type="search" v-model="searchStr" required>
                        <label class="label-icon waves-effect waves-light" for="search"><i class="material-icons">search</i></label>
                        <i class="material-icons">close</i>
                    </div>
                </form>
            </div>
        </nav>
        <div class="search-card">
            <div v-for="result in results">
                <div class="card horizontal">
                    <div class="card-image black valign-wrapper">
                        <img class="album-img center" :src="result.artworkUrl100">
                    </div>
                    <div class="card-stacked">
                        <div class="card-content">
                            <ul>
                                <li>{{result.artistName}}</li>
                                <li>{{result.trackName}}</li>
                                <li>{{result.collectionName}}</li>
                                <audio controls :src="result.previewUrl"></audio>
                            </ul>
                        </div>
                        <div class="card-action">
                            <a class="waves-effect waves-light btn-flat red white-text"><i class="material-icons left">cloud</i>button</a>
                            <a class="btn-floating btn-flat waves-effect waves-light red right-align" @click="addSong(result)"><i class="material-icons">add</i></a>
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
        name: 'itunes',
        data() {
            return {
                results: [],
                searchStr: ''
            }
        },
        methods: {
            getResults() {
                // this.results = 
                itunesService.getMusicByArtist(this.searchStr)

                    .then(res => { return res.json() })
                    .then(res => {
                        this.results = res.results.filter((song) => {
                            return song.kind === 'song'
                        })
                    })
            },


            addSong(result) {
                result.vote = 0
                mytunesService.addTrack(result)
            }
        }
    }

</script>

<style>
    .album-img {
        height: 100px;
        max-width: 100px;
    }
    
    .search-card {
        display: inline-block;
        min-width: 55%;
    }
</style>