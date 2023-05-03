
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const Professors = require('../models/professor');
const Students = require('../models/student');


var courseSchema = new Schema({
	courseId : { 
			type : String,
			required: true,
			},
	courseTitle : {
			type : String,
			required : true
	},
	professor: {
        type: String
    },
	students: {
        type: [String]
    },
	assignments: {
		type: [String]
    }
});

var Courses = mongoose.model('courses', courseSchema);

module.exports = Courses;