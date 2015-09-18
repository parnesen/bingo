var React = require('react');
var Bootstrap = require('react-bootstrap');
var GridSquare = require('./GridSquare.js');

function createSquares() {
    var names =  _.shuffle(['enshrinement',
        'reinstitution',
        'anomia',
        'tarentism',
        'neutralizing',
        'heathlike',
        'imbrices',
        'mavin',
        'lip',
        'sublenticular',
        'separationist',
        'abigail',
        'calibrator',
        'hitchiest',
        'unimplicitly',
        'collutory',
        'antanarivo',
        'ozona',
        'licent iousness',
        'nondefinitive',
        'diaster',
        'creaturely',
        'kraus',
        'mabinogion']);

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