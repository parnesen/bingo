var React = require('react');
var Bootstrap = require('react-bootstrap');
var GridSquare = require('./GridSquare.js');





var Grid = React.createClass({

    selections: [  false, false, false, false, false,
                        false, false, false, false, false,
                        false, false, true,  false, false,
                        false, false, false, false, false,
                        false, false, false, false, false],

    detectRowBingo: function() {
        for(var ii = 0; ii <= 20; ii += 5 ) {
            var allSelected = true;
            for(var jj = ii; allSelected && jj < ii + 5; jj++) {
                allSelected = allSelected && this.selections[jj];
            }
            if(allSelected) { 
                return true;
            }
        }
        return false;
    },

    detectColBingo: function() {
        for(var ii = 0; ii <= 4; ii++ ) {
            var allSelected = true;
            for(var jj = ii; allSelected && jj < 25; jj += 5) {
                allSelected = allSelected && this.selections[jj];
            }
            if(allSelected) { 
                return true;
            }
        }
        return false;
    },

    detectDiagonalBingo: function() {
        return this.selections[0] && this.selections[6] && this.selections[12] && this.selections[18] && this.selections[24];
    },

    squareSelected: function(id, isSelected) {
        console.log('squareSelected '  + id + ' ' + isSelected);
        this.selections[id] = isSelected;
        console.log(this.selections);
        var isBingo = this.detectRowBingo() || this.detectColBingo() || this.detectDiagonalBingo();
        this.setState({isBingo: isBingo});
        console.log("isBingo: " + isBingo);
    },

    createSquares: function() {
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

        var selectionFunc = this.squareSelected;
        return names.map(function(name, id) {
            return (<GridSquare name={name} isCenterSquare={id == 12} key={id} squareId={id} squareSelected={selectionFunc}/>);
        });
    },

    getInitialState: function() {
        this.squares = this.createSquares();
        return { isBingo: false };
    },

    render: function () {
        return (
                <div className="grid">
                    {this.squares}
                </div>
        );
    }

});

module.exports = Grid;