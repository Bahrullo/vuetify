<template>
    <v-contaiter fluid>
        <v-content>
            <v-toolbar dark class="dblue">
                <v-toolbar-title v-text="'LUCKYGRASS'"></v-toolbar-title>
            </v-toolbar>
        </v-content>
    </v-contaiter>
</template>

<script>
    export default {
        computed: {
            menuItems(){
            return [{
                icon: 'visibility',
                title:'Читать',
                route: '/books'
            }]
            }
        },
        data: () => ({
            //
        })
    }
</script>

<style>

</style>
