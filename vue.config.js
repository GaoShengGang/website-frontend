module.exports = {
    lintOnSave: false,       //关闭eslint检查
    outputDir: 'dist',      //打包输出文件夹名
    assetsDir: 'assets',    //打包静态资源文件夹名
    parallel: false,
    publicPath: '/',
    devServer: {
        // open: true, //auto open brower 项目启动后自动打开浏览器
        // host: 'localhost',
        // port: 8080,         //端口号默认8080
        proxy: process.env.NODE_ENV === 'production' ? 
            {
                '/gsg': {
                    //对应自己的 跨域地址 即请求的后端地址
                    // 服务器
                    // target: 'http://shuaigang.top:8090',
                    target: 'http://175.178.9.64:8090',
                    ws: true,   //代理websokets
                    changeOrigin: true,  //是否跨域，虚拟的站点需要更管origin
                    pathRewrite: {
                        '^/gsg': '',
                    },
                },
            } 
            : 
            {
                '/api': {
                    //对应自己的 跨域地址 即请求的后端地址
                    // 本地开发
                    target: 'http://localhost:8090',
                    ws: true,   //代理websokets
                    changeOrigin: true,  //是否跨域，虚拟的站点需要更管origin
                    pathRewrite: {
                        '^/api': '',
                    },
                },
            },

        // 正式环境
        // proxy: {
        //     '/gsg': {
        //         //对应自己的 跨域地址 即请求的后端地址
        //         // 服务器
        //         target: 'http://shuaigang.top:8090',
        //         ws: true,   //代理websokets
        //         changeOrigin: true,  //是否跨域，虚拟的站点需要更管origin
        //         pathRewrite: {
        //             '^/gsg': '',
        //         },
        //     },
        // },

        // 本地环境
        // proxy: {
        //     '/api': {
        //         //对应自己的 跨域地址 即请求的后端地址
        //         // 本地开发
        //         target: 'http://localhost:8090',
        //         ws: true,   //代理websokets
        //         changeOrigin: true,  //是否跨域，虚拟的站点需要更管origin
        //         pathRewrite: {
        //             '^/api': '',
        //         },
        //     },
        // },
    },
}