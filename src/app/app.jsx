(function () {
    var React = require('react'),
        injectTapEventPlugin = require("react-tap-event-plugin"),
        Grid = require('./components/grid.jsx');

    //Needed for React Developer Tools
    window.React = React;

    //Needed for onTouchTap
    //Can go away when react 1.0 release
    //Check this repo:
    //https://github.com/zilverline/react-tap-event-plugin
    injectTapEventPlugin();

    // Render the main app react component into the document body.
    // For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
    React.render(
        <div className="bingo-panel">
            <h1 className="title text-primary">CARMACK BINGO</h1>
            <Grid />
            <h3 className="instructions text-primary">What makes a fun talk even more fun -- Bingo! As you hear John Carmack use the phrases on your bingo card, mark the tile. When you get 5 in a row or diagonal, you&#39;ve won your game of BINGO!</h3>
        </div>
        , document.body);
})();