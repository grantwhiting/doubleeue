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
          'main.js'
        );
        echo "<app-root></app-root>";
        foreach ( $scripts as $script ) {
            echo "<script src='{$dist_path}/$script'></script>";
        }
    }

    //
    //
    // get main navigation items from wp backend
    function get_main_nav() {
        return wp_get_nav_menu_items('main-nav');
    }

    add_action( 'rest_api_init', function () {
        register_rest_route( 'routes', '/main', array(
            'methods' => 'GET',
            'callback' => 'get_main_nav',
        ) );
    });


    //
    //
    // get products navigation items from wp backend
    function get_products_nav() {
        return wp_get_nav_menu_items('products-nav');
    }

    add_action( 'rest_api_init', function () {
        register_rest_route( 'routes', '/products', array(
            'methods' => 'GET',
            'callback' => 'get_products_nav',
        ) );
    });

    //
    //
    // make custom endpoint for getting only the images and ids of the projects pod items
    function get_custom_projects() {
        $params = array(
            'limit' => -1,
            'where' => 'project_type.slug = "custom" '
        );

        $pods = pods( 'project', $params );
        $projectIds = array();

        if ( $pods->total() > 0 ) {
            while ( $pods->fetch() ) {
                array_push(
                    $projectIds,
                    array(
                        "id" => $pods->field( 'id' ),
                        "image" => $pods->field( 'project_image' )
                    )
                );
            }
        }

        return $projectIds;
    }

    add_action( 'rest_api_init', function() {
        register_rest_route( 'pods', '/custom', array(
            'methods' => 'GET',
            'callback' => 'get_custom_projects'
        ) );
    } );

    //
    //
    //
    function get_wedding_projects() {
        $params = array(
            'limit' => -1,
            'where' => 'project_type.slug = "wedding" '
        );

        $pods = pods( 'project', $params );
        $projectIds = array();

        if ( $pods->total() > 0 ) {
            while ( $pods->fetch() ) {
                array_push(
                    $projectIds,
                    array(
                        "id" => $pods->field( 'id' ),
                        "image" => $pods->field( 'project_image' )
                    )
                );
            }
        }

        return $projectIds;
    }

    add_action( 'rest_api_init', function() {
        register_rest_route( 'pods', '/weddings', array(
            'methods' => 'GET',
            'callback' => 'get_wedding_projects'
        ) );
    } );

?>
