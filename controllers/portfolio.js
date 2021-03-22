const portfolio = require('../models/portfolio');

const request = require('request');
const yf = require('yahoo-finance')

exports.getAddStock = (req, res, next) => {
    let current_portfolio = portfolio.fetch_portfolio()
    res.render('landing', {current_portfolio: current_portfolio});
    let portfolio2 = portfolio.fetch_portfolio()
    console.log(portfolio2[0].ticker)
    console.log(portfolio.fetch_portfolio())
    //request('http://127.0.0.1:5000/confirm_ticker', (error, body, response) => {
    //console.log(error)
    //console.log(response)})
}

exports.postAddStock = (req, res, next) => {
    let ticker = req.body.ticker.toUpperCase();
    console.log(ticker);

    //Try ticker
    return yf.quote({
        symbol: ticker,
        modules: ['price', 'summaryDetail']
    }, (err, quotes) => {

        // If no error
        if (err == null){
            const stock = new portfolio(ticker, req.body.shares);
            stock.add();
            //res.redirect('/');
        }
        else{
            console.log('Error: '+ err);
            console.log('Need to handle above error');
        }
        res.redirect('/');
    })
}

exports.postDelete = (req, res, next) => {
    let ticker = req.body.deletes;
    portfolio.delete(ticker);
    res.redirect('/');
}

