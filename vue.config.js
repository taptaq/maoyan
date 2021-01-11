module.exports= {
    devServer:{
        proxy:{
            '/json':{
                target:'http://localhost:8082',
                changeOrigin:true
            }
        },
        public:'192.168.0.102:8081',
    }
}