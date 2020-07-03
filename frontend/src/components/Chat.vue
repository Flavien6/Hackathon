<template>
    <div class="cat-container">
        <canvas :height="size" :width="size"></canvas>
    </div>
</template>

<script>
    import axios from 'axios'
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
            },
            error: {
                required: true,
                type: String
            }
        },
        computed: {
            srcLink() {return 'https://http.cat/' + this.statusCode + '.jpg' }
        },
        methods: {
            createCanvas() {
                var img = new Image();
                var canvas = this.$el.querySelector('canvas');
                var ctx = canvas.getContext('2d');

                img.onload = function() {

                    ctx.drawImage(img, 75, 50, 600, 400, 0, 0, canvas.width, canvas.height-50);
                };
                
                ctx.fillStyle = "#2c3e50";
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                ctx.font = "30px Arial";
                ctx.textAlign = "center";
                ctx.fillStyle = "#42b983";
                ctx.fillText(this.statusCode + " " + this.error, canvas.width/2, canvas.height-12);

                
                axios({
                    method: "get",
                    url: `http://127.0.0.1:3000/supersecret/chat/${this.statusCode}`,
                    responseType: 'blob',
                })
                    .then((resp) => {
                        //console.log(typeof(resp.data.blob()))
                        
                        //console.log(btoa(binary))
                        //img.src = 'data:image/jpeg;base64,' + binary;
                        
                        //console.log(resp.data.blob())
                        var imageUrl = URL.createObjectURL(resp.data);
                        
                        img.height=this.size
                        img.width=this.size
                        img.src=imageUrl
                        //this.$el.append(img)
                    })
                    .catch(err => {
                        console.log(err)
                    });
            }
        },
        mounted() {
            this.createCanvas();
        }
    }
</script>
