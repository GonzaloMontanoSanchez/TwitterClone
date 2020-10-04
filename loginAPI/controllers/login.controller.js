const User = require('../controllers/model.user')

exports.user_create = function (req, res) {
    let user = new User(
        {
            email : req.body.email,
            username : req.body.username,
            password: req.body.password
        }
    );

    user.save(function(err){
        if(err){
            console.log(err)
            return( res.sendStatus(400));
        }
        return res.send(user);
    })
}