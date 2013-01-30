angular.module('mongolab', ['ngResource']).
	factory('Project', function($resource) {
		var Project = $resource('https://api.mongolab.com/api/1/databases/develop/collections/projects/:id',
			{ apiKey: '51083006e4b0ef648be692d5' }, { update: { method: 'PUT' } }
	);

	Project.prototype.update = function(cb) {
		return Project.update({id: this._id.$oid},
		angular.extend({}, this, {_id:undefined}), cb);
	};

	Project.prototype.destroy = function(cb) {
		return Project.remove({id: this._id.$oid}, cb);
	};

	return Project;
});