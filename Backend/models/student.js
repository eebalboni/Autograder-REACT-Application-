var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

var studentSchema = new Schema({
	firstName : { 
			type : String,
			required: true,
			},
	lastName : {
			type : String,
			required : true
	},
    username : {
            type: String,
            required: true
    },
    password : {
        type: String,
        required: false
    },
    studentId : {
        type : Number,
        required: false
    },
    courses: {
        type: [String],
        required: false
    },
    submissions: {
        type: [String]
    }

});

 
studentSchema.plugin(passportLocalMongoose,{usernameField: 'username'});

module.exports = mongoose.model('Student', studentSchema);
