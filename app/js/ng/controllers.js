modernWebApp.controller('menuListCtrl', function ($scope) {
  $scope.mainNav = [
    {'name': 'Personal',
     'icon': 'fa-male'},
    {'name': 'Business',
     'icon': 'fa-briefcase'},
    {'name': 'Treasury Management',
     'icon': 'fa-line-chart'},
	{'name': 'About Zions Bank',
	 'icon': 'fa-institution'}
  ];
});