//  This script numbers links on the printed page
//  and adds a list to the bottom of the document
//  showing the href of each link.


/*  The document you're printing should have the
    following HTML, most likely at the very end:
    `````````````````````````````````````````````

    <section id="js-link-reference">
        <h2>Link Reference</h2>
        <ol id="js-link-reference__list"></ol>
    </section>
*/


/*  Add the following CSS to your stylesheet:
    `````````````````````````````````````````````

    @media print {
        a[data-link-number]::after {
            content: " [" attr(data-link-number) "]";
        }
    }

    @media not print {
        #js-link-reference {
            display: none;
        }
    }
*/

$( document ).ready( function() {

    (function() {
        var count = 1;

        // Don't target internal links.
        $( 'a:not([href^="#"])' ).each( function() {
            var text = $( this ).text();
            var href = $( this ).attr( 'href' );

            // Don't add to references if the url is already spelled out.
            if ( text !== href ) {

                // Give the anchor a data attribute to be used by CSS.
                $( this ).attr( 'data-link-number', count );
                count = count + 1;

                $( '#js-link-reference__list' ).append( '<li>' + href + '</li>' );
            }
        });
    }());

});
