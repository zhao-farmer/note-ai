import { defineConfig } from 'vitepress'

import fancyboxSet from './theme/fancybox-set.mjs'

import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid({

  // markdown 设置
  markdown: {
      // 开启数学公式
      math: true,
      // 图片点击可以放大
      config: (md) => {
        md.use(fancyboxSet)
      }

  },


  // 应用配置信息
  lang:'zh-cn',
  title: "AI相关技术文档",
  description: "包含模型部署使用,AI工具使用,大模型应用,AI学习等",

  // markdown所在目录
  // srcDir: './src',
  base:'/note-ai',

  // 主题配置
  themeConfig: {
    // 标题栏
    nav: [
      {
        text: "AI工具使用",
        items: [
          {
            text: "AI画图工具",
            items:[
              {text:'sd-webui', link: "/markdown/application/picture/sd-webui/"},
              {text:'sd-ComfyUI', link: "/markdown/application/picture/ComfyUI/"},
            ]
          },
          {
            text: "AI声音工具",
            link: "/markdown/application/sound/",
          },
          {
            text: "AI视频",
            link: "/markdown/application/vedio/",
          },
        ], 
      },
      {
        text: "AI编码",
        items: [
          {
            text: "编码工具",
            link: "/markdown/code/tool/",
          },
          {
            text: "python使用模型",
            link: "/markdown/code/python/",
          },
          {
            text: "java使用模型",
            link: "/markdown/code/java/",
          },
        ], 
      },
      {
        text: "AI模型相关",
        items: [
          {
            text: "模型网站",
            link: "/markdown/model/network/",
          },
        ], 
      },
      {
        text: "AI理论学习",
        items: [
            
        ], 
      },
    ],

    // 侧边栏
    sidebar: {

        //============================ AI工具使用 ==============================
        '/markdown/application/picture/sd-webui/': [
            {
                text: 'sd-webui 课程学习',
                items: [
                  {text:'第一章：认识',link:'/markdown/application/picture/sd-webui/study/01'},
                  {text:'第二章：提示词与参数',link:'/markdown/application/picture/sd-webui/study/02'},
                  {text:'第三章：图生图',link:'/markdown/application/picture/sd-webui/study/03'},
                  {text:'第四章：绘画模型',link:'/markdown/application/picture/sd-webui/study/04'},
                  {text:'第五章：高清修复与放大',link:'/markdown/application/picture/sd-webui/study/05'},
                  {text:'第六章: Embeddings、LoRa、Hypernetwork模型原理解析',link:'/markdown/application/picture/sd-webui/study/06'},
                  {text:'第七章：局部重绘',link:'/markdown/application/picture/sd-webui/study/07'},
                  {text:'第八章：插件安装',link:'/markdown/application/picture/sd-webui/study/08'},
                  {text:'第九章: lora',link:'/markdown/application/picture/sd-webui/study/09'},
                  {text:'第十章: ControlNet',link:'/markdown/application/picture/sd-webui/study/10'},
                  {text:'第十一章：超高清放大',link:'/markdown/application/picture/sd-webui/study/11'},
                  {text:'第十二章: AI文字与二维码',link:'/markdown/application/picture/sd-webui/study/12'},
                ],
            },
            {
              text: 'sd-webui 其他功能',
              items: [
                {text:'动画AnimateDiff',link:'/markdown/application/picture/sd-webui/other/01'},
                {text:'透明图rembg',link:'/markdown/application/picture/sd-webui/other/02'},
                {text:'换脸sd-webui-reactor',link:'/markdown/application/picture/sd-webui/other/03'},
                {text:'敏感词过滤',link:'/markdown/application/picture/sd-webui/other/04'},
                {text:'本地翻译部署',link:'/markdown/application/picture/sd-webui/other/05'},
                {text:'老照片修复',link:'/markdown/application/picture/sd-webui/other/06'},
              ],
            },
            {
              text: 'sd-webui 接口使用',
              items: [
                {text:'一、查询接口的方式',link:'/markdown/application/picture/sd-webui/api/01'},
                {text:'二、webui接口使用',link:'/markdown/application/picture/sd-webui/api/02'},
                {text:'三、插件接口使用',link:'/markdown/application/picture/sd-webui/api/03'},
              ],
            },
        ],
        '/markdown/application/picture/ComfyUI/': [
            {
                text: '',
                // 相对路径会自动追加子路径前缀
                items: [
               
                ],
            },
        ],
        '/markdown/application/sound/': [
            {
                text: 'ChatTTS',
                // 相对路径会自动追加子路径前缀
                items: [
                  {text:'一、安装（初始版本-已作废）',link:'/markdown/application/sound/chatTTS/01'},
                  {text:'二、安装（20240628版本）',link:'/markdown/application/sound/chatTTS/02'},
                  {text:'三、chatTTS学习笔记',link:'/markdown/application/sound/chatTTS/03'},
                  {text:'四、resemble-enhance音频降噪',link:'/markdown/application/sound/chatTTS/04'},
                ],
            },
        ],

        //============================ AI编码 ==============================
        "/markdown/code/tool/": [
          {
            text: 'Cursor',
            items: [
              {text:'一、快速上手',link:'/markdown/code/tool/cursor/01'},
              {text:'二、cursor三大核心功能',link:'/markdown/code/tool/cursor/02'},
              {text:'三、cursor上下文指定',link:'/markdown/code/tool/cursor/03'},
              {text:'四、cursor智能插件开发',link:'/markdown/code/tool/cursor/04'},
            ],
          },
          {
            text: 'Claude Code',
            items: [
              {text:'一、初始化Claude Code',link:'/markdown/code/tool/claude/01'},
              {text:'二、Claude Code应用',link:'/markdown/code/tool/claude/02'},
            ],
          },
          {
            text: 'Github Copilot',
            items: [
              {text:'一、快速入门',link:'/markdown/code/tool/copilot/01'},
            ],
          },
        ],


        '/markdown/model/network/': [
          {
            text: 'Huggingface(抱脸)',
            items: [
              {text:'一、注册用户与token',link:'/markdown/model/network/huggingface/01.md'},
              {text:'二、huggingface网站使用',link:'/markdown/model/network/huggingface/02.md'},
              {text:'三、镜像与下载',link:'/markdown/other/model/huggingface/03.md'},
            ],
          },
          {
            text: 'modelscope(魔塔)',
            items: [
              {text:'一、快速入门',link:'/markdown/model/network/modelscope/01.md'},
            ],
          },
          
       ],
    },

    // 右边目录是否关闭
    aside:true,
    // 右边目录配置
    outline:{
      level:[2,4],
      label:'目录'
    },
    


  }
})
