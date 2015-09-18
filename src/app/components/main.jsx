var React = require('react');
var Bootstrap = require('react-bootstrap');
var GridSquare = require('./GridSquare.js');

var Main = React.createClass({

    render: function () {

        var names =    ['enshrinement',
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
                        'witness',
                        'calibrator',
                        'hitchiest',
                        'unimplicitly',
                        'collutory',
                        'antanarivo',
                        'ozona',
                        'licentiousness',
                        'nondefinitive',
                        'diaster',
                        'creaturely',
                        'kraus',
                        'mabinogion'];




        var elements = names.map(function(name, id) {
            return (<GridSquare name={name} key={id}/>);
        });

        return (
                <div className="grid">
                    {elements}
                </div>
        );
    }

});

module.exports = Main;