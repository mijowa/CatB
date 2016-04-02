// Avoid breaking small blocks of text across two pages.
$( 'p, blockquote, li' ).each( function() {
    // 100px works out to about 3 lines in this setup.
    if ( $( this ).height() < 100 ) {
        $( this ).css( 'page-break-inside', 'avoid' );
    }
});
