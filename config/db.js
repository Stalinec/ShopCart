module.exports = {
    dev: {
        mongourl: "localhost:27017/shopping", // local mongodb
    },
    heroku: {
        mongourl: "mongodb://shop:shop@ds129610.mlab.com:29610/games-shop", // mLab cloud test mongodb
    }
};
