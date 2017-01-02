<!DOCTYPE html>
<html>
<head>
        <title>Laravel Angular</title>
        <base href="/lara_angular/server/" />
        <script src="<?php echo asset('node_modules/angular/angular.js') ?>"></script>
        <script src="<?php echo asset('node_modules/angular-ui-router/release/angular-ui-router.min.js') ?>"></script>

        <script src="<?php echo asset('public/js/final.js') ?>"></script>
        
</head>
<body data-ng-app='app' >
<a ui-sref="hello" ui-sref-active="active">Hello</a>
<?php echo asset('public/js/final.js') ?>
<ui-view></ui-view>

</body>
</html>