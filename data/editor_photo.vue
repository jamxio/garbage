<template>
    <div :id="'changeExtrance'+this.readMode">
        <vue-editor
                :id="'editor'+this.readMode"
                v-model="content"
                :disabled="isDisabled"
                :editorToolbar="customToolbar"
                :editorOptions="editorSettings"
                useCustomImageHandler
                @imageAdded="handleImageAdded">
        </vue-editor>
    </div>
</template>

<script>
    import { VueEditor } from 'vue2-editor';
    import { ImageDrop } from 'quill-image-drop-module'
    import ImageResize from 'quill-image-resize-module'
    let Quill = window.Quill;
    Quill.register('modules/imageDrop', ImageDrop);
    //import 的时候已经将 ImageResize 注册，再次注册会有警告
    //Quill.register('modules/imageResize', ImageResize);
    export default {
        name: 'public-vue-editor',
        components: {
            VueEditor
        },
        props: ['orgContent', 'orgCustomToolbar','readMode'],
        data() {
            return {
                //阅读模式true，编辑模式undefined，添加模式false
                isDisabled:false||this.readMode,
                content:this.orgContent,
                initcustomToolbar: [
                    [{header: [!1, 1, 2, 3, 4, 5, 6]}],
                    ["bold", "italic", "underline", "strike"],
                    [{align: ""}, {align: "center"}, {align: "right"}, {align: "justify"}],
                    ["blockquote", "code-block"],
                    [{list: "ordered"}, {list: "bullet"}, {list: "check"}],
                    [{indent: "-1"}, {indent: "+1"}],
                    [{ 'size': ['small', false, 'large', 'huge'] }],
                    [{color: []}, {background: []}],
                    ["link", "image", "video"],
                    ["clean"]
                ],
                customToolbar:this.readMode?[]:this.orgCustomToolbar,
                editorSettings: {
                    modules: {
                        history: {
                            delay: 1000,
                            maxStack: 50,
                            userOnly: false
                        },
                        imageDrop: true,
                        imageResize: {
                            displayStyles: {
                                backgroundColor: 'black',
                                border: 'none',
                                color: 'white'
                            },
                            modules: [ 'Resize', 'DisplaySize', 'Toolbar' ]
                        }
                    }
                }
            }
        },
        watch:{
            content(val){
                this.$emit('editorChange',{content:val});
            }
        },
        mounted(){
            //阅读模式，去掉边框和工具栏
            if(this.readMode && this.readMode===true){
                $('#changeExtrancetrue .ql-toolbar').remove();
                $('#changeExtrancetrue .ql-container').css('border','0');
            }else{
                //否则要滚动编辑框，不至于编辑内容过高导致工具栏太远
                $('.ql-container').prop('style','height: 500px;');
            }
        },
        methods:{
            handleImageAdded(file, Editor, cursorLocation, resetUploader){
                let dataUrl = '';
                let ready = new FileReader();
                /*开始读取指定的Blob对象或File对象中的内容.
                当读取操作完成时,readyState属性的值会成为DONE,如果设置了onloadend事件处理程序,则调用之.
                同时,result属性中将包含一个data: URL格式的字符串以表示所读取文件的内容.
                */
                let maxsize = 10;
                if(file.size/1024/1024 > 10){
                    //大于十兆无法压缩
                    this.$message({
                        message: '图片太大，无法进行压缩，请手动压缩'+maxsize+'兆一下',
                        type: 'error'
                    });
                    resetUploader();
                    return;
                }
                ready.readAsDataURL(file);
                let thisVue = this;
                ready.onload=function(){
                    dataUrl = this.result;
                    //图片目标大小，单位 kilobytes
                    let targetSize = 200;
                    if(file.size/1024 > targetSize){
                        let img = new Image();
                        img.src = dataUrl;
                        img.onload = function(){
                            Editor.insertEmbed(cursorLocation, 'image', thisVue.photoCompress(this));
                        };
                    }else{
                        //如果小于targetSize 则直接返回；
                        Editor.insertEmbed(cursorLocation, 'image', dataUrl);
                    }
                };
                resetUploader();
            },
            photoCompress(imgobj){
                // 默认按比例压缩
                let height = imgobj.naturalHeight;
                let width = imgobj.naturalWidth;

                //如果图片大于四百万像素，计算压缩比并将大小压至400万以下
                let ratio;
                if ((ratio = width * height / 4000000)>1) {
                    ratio = Math.sqrt(ratio);
                    width = width/ratio;
                    height = height/ratio;
                }else {
                    ratio = 1;
                }

                //生成canvas
                let canvas = document.createElement('canvas');
                let ctx = canvas.getContext('2d');
                canvas.width = width;
                canvas.height = height;
                // 铺底色
                ctx.fillStyle = "#fff";
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                //如果图片像素大于100万则使用瓦片绘制
                let count;
                if ((count = width * height / 1000000) > 1) {
                    count = ~~(Math.sqrt(count)+1); //计算要分成多少块瓦片
                    // 计算每块瓦片的宽和高
                    let nw = ~~(width / count);
                    let nh = ~~(height / count);
                    // 瓦片canvas
                    let tCanvas = document.createElement("canvas");
                    let tctx = tCanvas.getContext("2d");

                    tCanvas.width = nw;
                    tCanvas.height = nh;
                    for (let i = 0; i < count; i++) {
                        for (let j = 0; j < count; j++) {
                            tctx.drawImage(imgobj, i * nw * ratio, j * nh * ratio, nw * ratio, nh * ratio, 0, 0, nw, nh);
                            ctx.drawImage(tCanvas, i * nw, j * nh, nw, nh);
                        }
                    }
                } else {
                    ctx.drawImage(imgobj, 0, 0, width, height);
                }
                //进行最小压缩
                let ndata = canvas.toDataURL('image/jpeg', 0.2);
                return ndata;
            }
        }
    }
</script>
<style scoped>
</style>