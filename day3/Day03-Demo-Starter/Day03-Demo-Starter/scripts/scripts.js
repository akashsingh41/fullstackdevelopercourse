let file = "json.txt";
let url = "http://localhost:8000/getallrecords";
//
let app = angular.module('SkillsApp', [] );
app.controller('Weights', function($scope, $http) {
  $http.get(url).then(function(response){
  		$scope.allWeights = response.data;
  	});
//
  $scope.frmSubmit = function(){
  		$http({
  			method  : 'POST',
  			url     : 'http://localhost:8000/putnewdoc',
  			headers : {'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'},
  			data    : 'empName='+$scope.empName + '&empWeight='+$scope.empWeight
  		})
    };
});
//
function displayData(arr){
  let outHTML = "";
  for(let i=0; i < arr.length; i++){
    outHTML+="<p>"+arr[i].empName + " weighed " + arr[i].empWeight + " Kgs</p>";
  }
  document.getElementById("records").innerHTML = outHTML;
}
//
