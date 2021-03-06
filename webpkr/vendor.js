const webpack = require( 'webpack' )

// entry( { vendor: ['jquery', 'foundation', 'highlight'] } )

resolve( () => {
  alias( { jquery: 'jquery/src/jquery' } )
  alias( { foundation: './js/foundation/foundation' } )
  // alias( { foundation: 'foundation-sites/js/foundation.core' } )
  // alias( { highlight: 'highlight.js/lib/highlight' } )
} )

provide( {
  $: 'jquery',
  jQuery: 'jquery',
  foundation: 'foundation',
} )

// plugin( new webpack.optimize.CommonsChunkPlugin( {
//   name: 'vendor',
//   minChunks: Infinity
// } ) )

