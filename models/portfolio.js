const fs = require('fs');
const path = require('path');

const portfolio_list = [];
module.exports = class portfolio {
    constructor(ticker, shares){
        this.ticker = ticker;
        this.shares = shares;
    }

    add() {
        portfolio_list.push(this);
    }

    static fetch_portfolio() {
        return portfolio;
    }
}