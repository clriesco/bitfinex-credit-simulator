"use strict";

// Optional. You will see this name in eg. 'ps' or 'top' command
process.title = 'bitfinex-credit-simulator';
const debug = require('debug')('simulator:app');
const config = require('./config');
const bfxlib = require('./bfxlib')();
const credit = require('./credit')();


bfxlib.on('authenticated', () => {
});


setInterval(function() {
    bfxlib.getTickers(config.markets.map((x)=> {return 't'+x}), (err, res) => {
        if (err !== null) {
            debug(err);
            return;
        }
        credit.updateCredit(res);
    });
}, 10000)

setInterval(function() {
    credit.addProfit(config.maxEstimatedProfit);
}, 10000)