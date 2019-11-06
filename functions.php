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
        'runtime.js',
        'polyfills.js',
        'styles.js',
        'vendor.js',
        'main.js',
        'common.js',
        'about-about-module.js',
        'contact-contact-module.js',
        'cards-cards-module.js',
        'custom-custom-module.js',
        'weddings-weddings-module.js'
    );
    echo "<app-root></app-root>";
    foreach ($scripts as $script) {
        echo "<script src='{$dist_path}/$script'></script>";
    }
}
?>
