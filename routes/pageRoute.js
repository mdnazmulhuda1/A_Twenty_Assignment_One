const express = require('express');
const { showHomePage, showBlogPage, showSingleBlogPage, showShopPage } = require('../controllers/pageController')


// router init
const router = express.Router();





// router 
router.get('/', showHomePage);
router.get('/blog', showBlogPage);
router.get('/singleblog', showSingleBlogPage);
router.get('/shop', showShopPage);




// router.post('/age-check', (req, res) => {
    

//     // get form data
//     const {name, age} = req.body;

//     if (age >= 21) {
//         res.status(200).send(`Hi ${name}, <h1 style="color:red;">Congrats</h1> Your age is okay for Marriage`);
//     }else{
//         res.status(400).send(`Hi ${name}, Your age isn't okay for Marriage`);
//     };


// });


// // currency 
// router.get('/currency/:doller', (req, res) => {

//     const {doller} = req.params;

//     res.status(200).send(`${doller} Doller = ${doller * 96} BDT`);
// });




// export router 
module.exports = router;