const Weight = require('../models/emp_weights');
//get records
exports.getweights = function(req,res){
		sql="SELECT * FROM EmployeeWeights"; 
		if(Weight.query(sql, function(err, result){  
			if(err){  
				return console.error('error:' +err.message);  
			};  
			res.json(result);  
		}));
};
//