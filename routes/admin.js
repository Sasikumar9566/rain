var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function (req, res, next) {
//     res.render('admin-login', { title: 'Rain Admin Login' });
// });

router.post('/', (req, res) => {
    if (req.body.username == 'admin' && req.body.password == 'admin1') {
        req.session.name = Date.now().toString()
        res.redirect('/15987');
    }
    else {
        res.redirect('/15987')
    }
})



router.get('/', (req, res, next) => {    
    if (req.session.name) {
        res.render('admin-page', {title: 'RAIN'})
        
    } else {
        res.render('admin-login', {title: 'Rain | Admin Log-in'})
    }
})

router.get('/logout', (req, res, next) => {    
    req.session.destroy();
    res.redirect('/15987');
})
module.exports = router;
