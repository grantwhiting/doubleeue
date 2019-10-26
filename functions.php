<?php
/**
 * Include the necessary content to make an Angular app work
 *
 * @link    https://goo.gl/jxZueN
 * @param   string  $dist_path  path to the `dist` folder of your app
 * @return  void
 */
function include_angular_app( $dist_path )
{
    $scripts = array(
        // 'runtime-es2015.js',
        // 'polyfills-es2015.js',
        // 'styles-es2015.js',
        // 'vendor-es2015.js',
        // 'main-es2015.js'
        'runtime.js',
        'polyfills.js',
        'styles.js',
        'vendor.js',
        'main.js'
    );
    echo "<du-root></du-root>";
    foreach ($scripts as $script) {
        echo "<script src='{$dist_path}/$script'></script>";
    }
}
?>
