angular.module('barrelApp')
	.controller('BarrelCtrl', function(){
		var self = this;
		self.see_more = false;

		var day = moment().utc().startOf('day').add(12,'hours');
		var now = moment();
		if (day.isBefore(now)){
			console.log('day is before');
			day.subtract(1, 'days');
		}

		self.day_num = day.dayOfYear();
		self.day = day.clone().add(1, 'days').format('x');
		console.log(day.local().format('MM/dd HH:mm:ss'));
		
		self.range = function(num) {
			return new Array(num);
		};

	});