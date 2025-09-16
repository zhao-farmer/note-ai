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
            link: "/markdown/application/round/",
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
              {text:'一、引言',link:'/markdown/code/tool/claude/01'},
              {text:'二、Claude Code的安装',link:'/markdown/code/tool/claude/02'},
              {text:'三、Claude Code 自然语言输入',link:'/markdown/code/tool/claude/03'},
              {text:'四、Claude Code的命令行输入',link:'/markdown/code/tool/claude/04'},
              {text:'四、Claude Code集成IDE',link:'/markdown/code/tool/claude/05'},
            ],
          },
          {
            text: 'Github Copilot',
            items: [
              {text:'一、快速入门',link:'/markdown/code/tool/copilot/01'},
            ],
          },
        ],



        //============================ 其他技术 ==============================
        '/markdown/other/install/': [
            {
                text: 'Jenkins',
                // 相对路径会自动追加子路径前缀
                items: [
                  {text:'一、快速入门',link:'/markdown/other/install/Jenkins/01.md'},
                ],
            },
            {
              text: '其他',
              // 相对路径会自动追加子路径前缀
              items: [
                {text:'github Actions',link:'/markdown/other/install/other/01.md'},
              ],
          },
        ],
        '/markdown/other/version/': [
            {
                text: 'git工具',
                // 相对路径会自动追加子路径前缀
                items: [
                  {text:'一、概述',link:'/markdown/other/version/git/01.md'},
                  {text:'二、安装软件',link:'/markdown/other/version/git/02.md'},
                  {text:'三、使用githubDestop',link:'/markdown/other/version/git/03.md'},
                  {text:'四、Git之版本号',link:'/markdown/other/version/git/04.md'},
                  {text:'五、git命令',link:'/markdown/other/version/git/05.md'},
                  {text:'六、gitlab',link:'/markdown/other/version/git/06.md'},
                ],
            },
            {
                text: 'github网站',
                // 相对路径会自动追加子路径前缀
                items: [
                  {text:'一、基础使用',link:'/markdown/other/version/github/01.md'},
                  {text:'二、github Actions',link:'/markdown/other/version/github/02.md'},
                  {text:'三、github Pages',link:'/markdown/other/version/github/03.md'},
                  {text:'四、vuePress项目部署github',link:'/markdown/other/version/github/04.md'},
                ],
            },
            {
                text: 'svn工具',
                // 相对路径会自动追加子路径前缀
                items: [
                  {text:'一、VisualSVN(svn服务端)',link:'/markdown/other/version/svn/01.md'},
                  {text:'二、TortoiseSVN(svn客户端)',link:'/markdown/other/version/svn/02.md'},
                  {text:'三、开发工具安装svn',link:'/markdown/other/version/svn/03.md'},
                ],
            },
        ],
        '/markdown/other/document/': [
          {
            
              text: 'vuePress静态站点',
              // 相对路径会自动追加子路径前缀
              items: [
                {text:'一、快速上手',link:'/markdown/other/document/vuepress/01.md'},
                {text:'二、配置文件修改',link:'/markdown/other/document/vuepress/02.md'},
                {text:'三、页面',link:'/markdown/other/document/vuepress/03.md'},
                {text:'四、makdown语法扩展',link:'/markdown/other/document/vuepress/04.md'},
                {text:'五、静态资源',link:'/markdown/other/document/vuepress/05.md'},
                {text:'六、github部署',link:'/markdown/other/document/vuepress/06.md'},
                {text:'七、样式相关配置',link:'/markdown/other/document/vuepress/07.md'},
                {text:'八、插件配置',link:'/markdown/other/document/vuepress/08.md'},
              ],
          },
          {
            text: 'vitePress静态站点',
            // 相对路径会自动追加子路径前缀
            items: [
              {text:'一、快速上手',link:'/markdown/other/document/vitepress/01.md'},
              {text:'二、配置文件',link:'/markdown/other/document/vitepress/02.md'},
              {text:'三、插件配置',link:'/markdown/other/document/vitepress/03.md'},
              {text:'四、其他配置',link:'/markdown/other/document/vitepress/04.md'},
              {text:'五、问题与解决方案',link:'/markdown/other/document/vitepress/05.md'},
            ],
          },
          {
            text: 'Jekyll静态站点',
            // 相对路径会自动追加子路径前缀
            items: [
              {text:'一、Jekyll介绍',link:'/markdown/other/document/Jekyll/01.md'},
              {text:'二、安装与测试',link:'/markdown/other/document/Jekyll/02.md'},
              {text:'三、命令与配置',link:'/markdown/other/document/Jekyll/03.md'},
              {text:'四、目录结构',link:'/markdown/other/document/Jekyll/04.md'},
              {text:'五、配置信息',link:'/markdown/other/document/Jekyll/05.md'},
              {text:'六、minima默认主题',link:'/markdown/other/document/Jekyll/06.md'},
              {text:'七、Jekyll 主题 Chirpy 使用教程',link:'/markdown/other/document/Jekyll/07.md'},
            ],
          },
          {
            text: 'hugo静态站点',
            // 相对路径会自动追加子路径前缀
            items: [
              {text:'一、快速上手',link:'/markdown/other/document/hugo/01.md'},
            ],
          },
          {
            text: 'Docusaurus静态站点',
            // 相对路径会自动追加子路径前缀
            items: [
              {text:'待补充',link:'/markdown/other/document/Docusaurus/01.md'},
            ],
          },
        ],
        
        '/markdown/other/network/': [
          {
              text: 'shadowsocks小飞机',
              // 相对路径会自动追加子路径前缀
              items: [
                {text:'Shadowsocks 服务端安装',link:'/markdown/other/network/shadowsocks/01.md'},
                {text:'Shadowsocks 客户端安装',link:'/markdown/other/network/shadowsocks/02.md'},
              ],
          },
          {
            text: 'Huggingface',
            // 相对路径会自动追加子路径前缀
            items: [
              {text:'一、注册用户与token',link:'/markdown/other/network/huggingface/01.md'},
              {text:'二、huggingface网站使用',link:'/markdown/other/network/huggingface/02.md'},
              {text:'三、镜像与下载',link:'/markdown/other/network/huggingface/03.md'},
            ],
          },
          {
            text: '其他网络问题',
            // 相对路径会自动追加子路径前缀
            items: [
              {text:'CDN插件安装',link:'/markdown/other/network/cdn/01.md'},
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
