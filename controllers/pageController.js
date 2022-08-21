const path = require('path');



// show all page with controllers

const showHomePage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/index.html'));
};

const showBlogPage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/blog.html'));
};

const showSingleBlogPage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/singleblog.html'));
}

const showShopPage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/shop.html'));
};





// export module
module.exports = {
    showHomePage,
    showBlogPage,
    showSingleBlogPage,
    showShopPage
}