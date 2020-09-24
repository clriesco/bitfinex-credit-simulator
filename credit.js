"use strict";

const debug = require('debug')('simulator:credit');
const inherits = require('util').inherits;  
const EventEmitter = require('events').EventEmitter;
const config = require('./config');

/**
 * Handles CurrencyBook for trading.
 * @param {sting} APIKey
 * @param {string} APISecret
 * @event
 * @class
 */
const Credit = function() {
    if (! (this instanceof Credit)) return new Credit();
    EventEmitter.call(this)
    //Equivalente a 30 USD el 7 de dic de 2017
    this.credit =  { 
        BTC: 0.002094972067039106,
        ETH: 0.07352941176470588,
        XMR: 0.11581222977146385,
        IOT: 8.674280757553854,
        LTC: 0.3202117667150542,
        EOS: 7.6923076923076925,
        XRP: 144.16838867797588,
        ZEC: 0.1016053647632595,
        DSH: 0.04588629376405268,
        OMG: 3.6131518728170535,
        BCH: 0.02371354043158644,
        USD: 30
    };
    this.USDCredit = {};
    this.totalUSDCredit = 0;
}
inherits(Credit, EventEmitter);

Credit.prototype.updateCredit = function(currencies) {
    this.totalUSDCredit = 0;
    for (let c of currencies) {
        if (~c[0].indexOf('USD') != false) {
            this.USDCredit[c[0].substring(1,4)] = this.credit[c[0].substring(1,4)]*c[1];
            this.totalUSDCredit += this.USDCredit[c[0].substring(1,4)];
        }
    }

    debug(this.totalUSDCredit);
} 

Credit.prototype.addProfit = function(profit) {
    let keys = Object.keys(this.credit);
    let key = keys[Math.floor(Math.random()*keys.length)];
    debug ('Old ' + key + ': '+this.credit[key]);
    this.credit[key] *= 1 + Math.random()*profit;
    debug ('New ' + key + ': '+this.credit[key]);
}

module.exports = Credit;