<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>DoubleEue Design Company</title>
  <base href="/wordpress">

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>
<body>
  <?php include_angular_app(get_stylesheet_directory_uri() . '/dist/browser'); ?>
</body>
<script>
window.nonce = "<?php echo wp_create_nonce( 'wp_rest' ); ?>";
</script>
</html>
