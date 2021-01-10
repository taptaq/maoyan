module.exports= {
    devServer:{
        proxy:{
            '/json':{
                target:'http://localhost:8082',
                changeOrigin:true
            }
        }
    }
}