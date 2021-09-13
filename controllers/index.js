const User = require('../models/user');

module.exports = {
    postRegister(req, res, next) {
        console.log('Registering user');
        User.register(new User({
            username: req.body.username}),
            req.body.password,
            (err) => {
                if (err) {
                    console.log('Error while user register!', err);
                    return next(err);
                }

                console.log('User registered!');

                res.redirect('/');
            });
    }
}