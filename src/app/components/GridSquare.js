var React = require('react');
var Bootstrap = require('react-bootstrap');

var Button = Bootstrap.Button;

module.exports = React.createClass({

    getInitialState: function() {
        return { selected: this.props.isCenterSquare };
    },

    squareToggled: function() {
        console.log("squareToggled")
        this.setState({selected: !this.state.selected});
    },

    render: function() {
        var style = this.state.selected ? "danger" : "primary";

        return (
            <Button className="grid-square" bsStyle={style} disabled={this.props.isCenterSquare} onClick={this.squareToggled}>{this.props.name}</Button>
        );
    }
});