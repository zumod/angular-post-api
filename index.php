<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
  <title>Homepage</title>
</head>
<body>
  <div class="container">
    <h1>Data</h1>
      <div ng-app="insert" ng-controller="controller">
        <label>Name</label> <input type="text" name="name" ng-model="name" class="form-control"><br>
        <label>Age</label><input type="text" name="age" ng-model="age" class="form-control"><br>
        <label>Email</label> <input type="text" name="email" ng-model="email" class="form-control"><br>
        <input type="submit" name="insert" class="btn btn-success" ng-click="insert()" value="Submit">
      </div>
  </div>

  <script src="app/controllers/postController.js/"></script>
</body>
</html>