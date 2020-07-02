<template>
    <div v-show="statusCode != 200" class="cat-container">
        <img class="chat" :alt="statusCode" :src="srcLink" :height="size" :width="size" />
    </div>
</template>

<script>
    export default {
        name: "Chat",

        props: {
            statusCode: {
                required: true,
                type: Number
            },
            size: {
                required: true,
                type: Number
            }
        },
        computed: {
            srcLink() {return 'https://http.cat/' + this.statusCode + '.jpg' }
        }
    };
</script>
