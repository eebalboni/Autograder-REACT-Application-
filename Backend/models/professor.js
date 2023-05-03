
var mongoose = require('mongoose');
const Courses = require('../models/courses');
var Schema = mongoose.Schema;


var professorSchema = new Schema({
	firstName : { 
			type : String,
			required: true,
			},
	lastName : {
			type : String,
			required : true
	},
    userName : {
            type: String,
            required: true
    },
    password : {
        type: String,
        required: true
    },
    professorId : {
        type : Number,
        required: true
    },
    courses: [{
        type: [String]
    }]
});

var Professors = mongoose.model('Professors', professorSchema);

module.exports = Professors;