
const path=require('path');

module.exports={
    
    // target: 'node',
    node: {
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty',
      },
    entry:'./olscript.js'
    ,output:{
        path:path.join(__dirname,'edit')
        ,filename:'bundle.js'
    },
    module:{
        rules:[{
            loader:'babel-loader',
            test:/\.js$/,
            exclude:/node_modules/
        }
    ,{
    test:/\.s?css$/,
    use:[
        'style-loader',
        'css-loader',
        'sass-loader'
    ]}]},

    devtool:'cheap-module-eval-source-map',
    devServer:{
        contentBase:path.join(__dirname),
    historyApiFallback:true

    }
};



