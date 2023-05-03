
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var assignmentSchema = new Schema({
    assignmentId : {
        type: Number
    },
	title : { 
		type : String,
		required: false,
	},
	description : {
		type : String,
		required : false
	},
    dueDate : {
        type: Date,
        required: false
    },
    studentSubmission : {
        type: String,
        required: false
    },
    solutionFile : {
        type : String,
        required: false
    },
    course: {
        type: String
    },
    submissions: {
        type: [String]
    }
});

var Assignments = mongoose.model('assignments', assignmentSchema);

module.exports = Assignments;