
const config = {
    markets: ['BTCUSD', 'ETHUSD', 'ETHBTC', 'XMRUSD', 'XMRBTC', 'IOTUSD', 
              'IOTBTC', 'LTCUSD', 'LTCBTC', 'EOSUSD', 'EOSBTC', 'XRPUSD', 
              'XRPBTC', 'ZECUSD', 'ZECBTC', 'DSHUSD', 'DSHBTC', 'IOTETH',
              'EOSETH', 'OMGUSD', 'OMGBTC',
              'OMGETH', 'BCHUSD', 'BCHBTC', 'BCHETH'
            ],
    fee: 0.0018,
    profitability: 1.0001, //Relative
    profitThreshold: 0.05, //USD
    measureUnit: 'USD',
    writeAPIKey: '********************************', //BITFINEX WRITE API KEY
    writeAPISecret: '********************************', //BITFINEX WRITE API SECRET
    readAPIKey: '********************************', //BITFINEX READ API KEY
    readAPISecret: '********************************', //BITFINEX READ API KEY
    maxEstimatedProfit: 0.006,

    testing: true

};

module.exports = config;