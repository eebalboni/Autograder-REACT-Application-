
const { Double } = require('mongodb');
const Student = require('../models/student');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var submissionSchema = new Schema({
	student : { 
			type: String,
			required: true,
			},
    grade : { 
        type : String,
        required: true,
        },
	assignment: {
		type: [String]
		}
});

var Submissions = mongoose.model('submissions', submissionSchema);

module.exports = Submissions;