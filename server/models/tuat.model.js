const monk = require('monk');
const Filter = require('bad-words');
const filter = new Filter();
const db = monk('localhost:27017/tuatter');
const tuats = db.get('tuats');

function isValidTuat(tuat){
    return tuat.name && tuat.name.toString().trim() !=''&&
        tuat.content && tuat.content.toString().trim() !='';
    }

exports.tuat_submit = function (req,res) {
    if(isValidTuat(req.body)){
        const tuat = {
            name: filter.clean(req.body.name.toString()),
            content: filter.clean(req.body.content.toString()),
            created : new Date()
        } 
        console.log(tuat);
        tuats.insert(tuat).then(createdTuat=>
            res.json(createdTuat));

    }else{
        res.sendStatus(422);
        res.json({
            message : ' Hey!, Name and content are requiered! :)'
        })
    }
};

exports.tuat_all = function (req,res){
    tuats.find().then( tuats =>{
        res.json(tuats);
    });
    
};