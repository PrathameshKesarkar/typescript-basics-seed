module.exports={
    entry: './src/app.ts',
    output:{
        filename:'app.js',
        path:__dirname+'./dist'
    },
    resolve:{
        extension:['.ts','.js']
    },
    module:{
        rules:[
            { test:/\.ts$/,use:'awesome-typescript-loader' }
        ]
    }
}