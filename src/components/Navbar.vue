<template>
    <div>
        <nav>
            <div class="nav-wrapper">
                <a href="#!" class="brand-logo center">Muesic</a>
                <ul class="left hide-on-med-and-down">
                    <li><router-link to="/"><a>Home</a></router-link></li>
                    <li><router-link to="/itunes"><a>Itunes</a></router-link></li>
                    <li><router-link to="/itunes/mytunes"><a>MyTunes</a></router-link></li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>

export default {
    name: 'navbar'
}

</script>

<style>

</style>