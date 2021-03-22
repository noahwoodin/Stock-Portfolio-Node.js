const fs = require('fs');
const path = require('path');

let portfolio_list = [];
module.exports = class portfolio {
    constructor(ticker, shares){
        this.ticker = ticker;
        this.shares = Number(shares);
    }

    add() {
        // Only add shares if stock already exists in portfolio list
        for (let stock of portfolio_list) {
            if (this.ticker == stock.ticker){
                stock.shares = stock.shares + this.shares;
                return;
            }
        }
        portfolio_list.push(this);
    }

    static delete(ticker) {
        let index = 0;
        for (let stock of portfolio_list) {
            if ( ticker == stock.ticker) {
                portfolio_list.splice(index, 1);
                return;
            }
            index = index+1;
        }
    }

    static fetch_portfolio() {
        return portfolio_list;
    }
}