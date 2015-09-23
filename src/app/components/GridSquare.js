var React = require('react');
var Bootstrap = require('react-bootstrap');

var Button = Bootstrap.Button;

module.exports = React.createClass({

    getInitialState: function() {
        return { selected: this.props.isCenterSquare };
    },

    toggleSelected: function() {
        this.props.toggleSelected(this.props.squareId);
    },

    render: function() {
        var style = this.props.selected ? "danger" : "primary";
        var bingo = this.props.isCenterSquare && this.props.isBingo ? " bingo" : "";

        return (
            <Button className={"grid-square" + bingo } bsStyle={style} disabled={false} onClick={this.toggleSelected}>{this.props.name}</Button>
        );
    }
});