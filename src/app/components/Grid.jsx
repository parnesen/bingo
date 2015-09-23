var React = require('react');
var Bootstrap = require('react-bootstrap');
var GridSquare = require('./GridSquare.js');





var Grid = React.createClass({

    detectRowBingo: function() {
        for(var ii = 0; ii <= 20; ii += 5 ) {
            var allSelected = true;
            for(var jj = ii; allSelected && jj < ii + 5; jj++) {
                allSelected = allSelected && this.state.selections[jj];
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
                allSelected = allSelected && this.state.selections[jj];
            }
            if(allSelected) { 
                return true;
            }
        }
        return false;
    },

    detectDiagonalBingo: function() {
        return    this.state.selections[0] && this.state.selections[6] && this.state.selections[12] && this.state.selections[18] && this.state.selections[24]
               || this.state.selections[4] && this.state.selections[8] && this.state.selections[12] && this.state.selections[16] && this.state.selections[20];
    },

    detectBingo: function() {
        var isBingo  = this.detectRowBingo() || this.detectColBingo() || this.detectDiagonalBingo();
        this.setState({isBingo: isBingo});
        console.log("isBingo: " + isBingo + " " + this.state.selections);
        if(!this.hasPlayedSound && isBingo) {
            this.hasPlayedSound = true;
            new Audio('assets/win.wav').play();
        }
    },

    toggleSquare: function(id) {
        var selections = this.state.selections;
        selections[id] = !selections[id];
        this.setState({selections: selections});
        console.log(selections);
        this.detectBingo();
    },

    createSquares: function() {
        console.log("createSquares: " + this.state.names.length);
        var squares = [];
        for(var id = 0; id < this.state.names.length; id++) {
            var name = this.state.names[id];
            var isCenter = id == 12;
            if(isCenter && this.state.isBingo) {
                name = "!!BINGO!!"
            }
            squares.push(<GridSquare name={name} selected={this.state.selections[id]} isBingo={this.state.isBingo} isCenterSquare={isCenter} key={id} squareId={id} toggleSelected={this.toggleSquare}/>);
        }
        return squares;
    },

    getInitialState: function() {
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

        return {    names: names,
                    isBingo: false, 
                    selections: [   false, false, false, false, false,
                                    false, false, false, false, false,
                                    false, false, true,  false, false,
                                    false, false, false, false, false,
                                    false, false, false, false, false],

                    hasPlayedSound: false,
        };
    },

    render: function () {
        return (
                <div className="grid">
                    {this.createSquares()}
                </div>
        );
    }

});

module.exports = Grid;