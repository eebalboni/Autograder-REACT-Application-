var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");


var professorSchema = new Schema({
	firstname : { 
			type : String,
			required: true,
			},
	lastname : {
			type : String,
			required : true
	},
    username : {
            type: String,
            required: true
    },
    password : {
        type: String,
        required: true
    },
    professorId : {
        type : Number,
        required: false
    },
    courses: [{
        type: [String]
    }]
});


professorSchema.plugin(passportLocalMongoose,{usernameField: 'username'});

module.exports = mongoose.model('Professor', professorSchema);