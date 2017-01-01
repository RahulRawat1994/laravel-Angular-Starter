<!DOCTYPE html>
<html>
<head>
        <title>Laravel Angular</title>
        <base href="/">
        <script src="http://localhost/lara_angular/server/node_modules/angular/angular.js"></script>
        <script src="http://localhost/lara_angular/server/node_modules/angular-ui-router/release/angular-ui-router.min.js"></script>

        <script src="http://localhost/lara_angular/server/public/js/final.js"></script>
</head>
<body data-ng-app='app' >
<a ui-sref="hello" ui-sref-active="active">Hello</a>
<?php echo dirname(__FILE__).''.URL::asset('.') ?>
<ui-view></ui-view>

</body>
</html>