<template>
    <div class="prompt">
        <button class="prompt-copy" 
                :class="{'prompt-copied':!promptActive}"  
                @click="copyContent">
        </button>
        <slot name="content"></slot>
    </div>
</template>

<script setup>
    import {ref} from 'vue'

    let promptActive = ref(true)

    function copyContent(e){
        // 修改样式状态
        promptActive.value = false
        
        // 触发定时器
        setTimeout(() => {
            promptActive.value = true
        }, 2000);

        let parent = e.target.parentElement;
        copyText(parent)
       
    }

    // 复制具体内容
    function copyText(dom) {
        var copyText = dom.innerText;
        navigator.clipboard.writeText(copyText).then(function() {
            console.log('复制成功');
        }, function(err) {
            console.error('复制失败', err);
        });
    }
</script>

<style scoped>
    .prompt{
        padding:20px;position: relative;
        background-color: var(--vp-code-block-bg);
        font-family: var(--vp-font-family-mono);
        font-size: 12px;

        display: flex;
        flex-direction: column;
    }
    .prompt-copy{
        direction: ltr;
        position: absolute;
        top: 12px;
        right: 12px;
        z-index: 3;
        border: 1px solid #e2e2e3;
        border-radius: 4px;
        width: 40px;
        height: 40px;
        background-color: #fff;
        opacity: 0;
        cursor: pointer;
        background-image: var(--vp-icon-copy);
        background-position: 50%;
        background-size: 20px;
        background-repeat: no-repeat;
        transition: border-color 0.25s, background-color 0.25s, opacity 0.25s;
    }
    .prompt-copy:hover{
        opacity:1;
        background-color:#fff;
        border-color: #e2e2e3;
    }
    .prompt-copied{
        border-radius:0 4px 4px 0;
        background-color: #fff;
        background-image: var(--vp-icon-copied);
    }
    .prompt-copied::before{
        position:relative;
        top:-1px;
        transform:translateX(calc(-100% - 1px));
        display:flex;
        justify-content:center;
        align-items:center;
        border: 1px solid #e2e2e3;
        border-right:0;
        border-radius:4px 0 0 4px;
        padding: 0 10px;
        width:fit-content;
        height:40px;
        text-align:center;
        font-size:12px;
        font-weight:500;
        background-color: #fff;
        white-space:nowrap;
        content: "已复制";
    }
</style>