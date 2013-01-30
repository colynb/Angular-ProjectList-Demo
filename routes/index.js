
/*
 * GET home page.
 */

exports.index = function(req, res){
	console.log(mongo_key);
  res.render('index', { title: "AngularJS Demo" });
};