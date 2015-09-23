var React = require('react');
var Bootstrap = require('react-bootstrap');
var GridSquare = require('./GridSquare.js');

function createSquares() {
    var names =  _.shuffle([
        'the royal we',
        'motion to photon',
        'racket',
        'APK',
        'hygienic macros',
        'pure functions',
        'side effects',
        'let bindings',
        'eye buffers',
        'aliasing',
        'GearVR',
        'mobile VR',
        'low persistence',
        'refresh rate',
        'flicker sensitivity',
        'motion blur',
        'latency',
        'lightfields',
        'webGL',
        'webVR',
        'positional tracking',
        '"run me off the stage"',
        'homoiconic',
        'moral imperative',
        ]);

    names.splice(12, 0, "FREE");

    return names.map(function(name, id) {
        return (<GridSquare name={name} isCenterSquare={id == 12} key={id}/>);
    });
}

var Grid = React.createClass({

    squares: createSquares(),

    render: function () {

        return (
                <div className="grid">
                    {this.squares}
                </div>
        );
    }

});

module.exports = Grid;