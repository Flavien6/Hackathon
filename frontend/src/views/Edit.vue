<template>
    <div class="edit">
        <img alt="Vue logo" src="../assets/logo.png" />
        <!--<HelloWorld msg="C'est ma bite"/>-->
        <canvas height="200" width="400"></canvas>
        <Chat :statusCode="statusCode" :size="400" />
        <button @click="request">Request</button>
    </div>
</template>

<style lang="scss">
</style>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
    import Chat from '@/components/Chat.vue'
    import axios from 'axios'

    export default {
        name: 'Edit',
        components: {
            // HelloWorld
            Chat
        },
        data() {
            return {
                statusCode: 200
            }
        },
        methods: {
            request() {
                axios({
                    method: 'get',
                    url: 'https://get.geojs.io/v1/ip/country/'
                })
                    .then(rep => {
                        console.log('test')
                        console.log(rep)
                        if(rep.status != 200) {
                            this.statusCode = rep.status
                        }
                    })
                    .catch(err => {
                        console.log(err.response)
                        if(err.response)
                            this.statusCode = err.response.status
                        console.log(this.statusCode)
                    })
            }
        },
        mounted() {
            console.log(this)
            let srcImage = this.$el.querySelector('img')

            srcImage.style.display = 'none'
            var img = new Image();
            var canvas = this.$el.querySelector('canvas');
            var ctx = canvas.getContext('2d');

            img.onload = function() {

                ctx.drawImage(img, canvas.width/2-img.width/2, 0);
                var imageData = ctx.getImageData(0+img.width/2, 0, img.width, img.height);
                var newImage = ctx.createImageData(200,200)
                var data = imageData.data;

                //img.style.display = 'block';
                for(let i = 0; i <= data.length; i+=4) {
                    /*data[i] = 255 - data[i] //red
                    data[i+1] = 255 - data[i+1] //green
                    data[i+2] = 255 - data[i+2] //blue
                    data[i+3] = data[i+3] //alpha*/

                    if(!((data[i] <= 110) && (data[i+1] <= 110) && (data[i+2] <= 110))) {
                        data[i] = 220 //red
                        data[i+1] = 60 //green
                        data[i+2] = 100 //blue
                        data[i+3] = data[i+3] //Alpha
                    }

                    /*data[i] = (data[i] == 44 || data[i] != 255) ? data[i] : 255 //red
                    data[i+1] = (data[i+1] == 62 || data[i+1] != 255) ? data[i+1] : 255 //green
                    data[i+2] = (data[i+2] == 80 || data[i+2] != 255) ? data[i+2] : 255 //blue
                    data[i+3] = data[i+3] //alpha*/

                    newImage.data[i] = data[i]
                    newImage.data[i+1] = data[i+1]
                    newImage.data[i+2] = data[i+2]
                    newImage.data[i+3] = data[i+3]
                }

                //console.log(data)
                ctx.putImageData(newImage, canvas.width/2-img.width/2, 0);

                /*ctx.font = "30px Arial";
                ctx.textAlign = "center";
                ctx.fillStyle = "#fff";
                ctx.fillText("2 heures cette merde à faire", canvas.width/2, canvas.height/2);
                ctx.fillText("KESKIA", canvas.width/2, canvas.height/2+30);
                ctx.fillText("En full pixel processing", canvas.width/2, canvas.height/2+60);
                ctx.fillText("Il est 6h35 !", canvas.width/2, canvas.height/2+90);*/
            };

            img.src = srcImage.src;

            /*window.$(this.$el).find('canvas').on('click', () => {
                console.log("c'est ma bite")
            })*/
        }
    }
</script>
