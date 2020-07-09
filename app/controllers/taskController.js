var app = angular.module("myApp", []);
app.controller("taskCtrl", function ($scope, $http) {
  $scope.inputField = 0;
  $scope.taskList = [];
  $scope.taskAdd = function () {
    $scope.inputField = 1;
  };
  $scope.loadData = function () {
    $http.get("http://localhost/todo-list-app/api/getTasks.php").then((res) => {
      angular.forEach(res.data, function (item, key) {
        $scope.taskList.push(item);
      });
    });
  };
  $scope.addToList = function (value) {
    $scope.taskList.push({
      task: value,
      status: 0,
      id: $scope.taskList.length,
    });
    $http.post("http://localhost/todo-list-app/api/addTask.php", {
      task: value,
      isComplete: false,
    });

    $scope.inputField = 0;
  };
  $scope.editTask = function (task) {
    var data = {
      id: task.id,
      status: task.status == 1 ? 0 : 1,
    };
    $http.patch("http://localhost/todo-list-app/api/editTask.php", data);
  };
  $scope.deleteTask = function (item) {
    var index = $scope.taskList.indexOf(item);
    $scope.taskList.splice(index, 1);
    var data = {
      task: item.id,
    };
    $http.post("http://localhost/todo-list-app/api/deleteTask.php", data);
  };
});
