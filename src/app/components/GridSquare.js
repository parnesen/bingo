var React = require('react');
var Bootstrap = require('react-bootstrap');

var Button = Bootstrap.Button;

module.exports = React.createClass({

    getInitialState: function() {
        return { selected: this.props.isCenterSquare };
    },

    squareToggled: function() {
        var isSelected = this.props.isCenterSquare || !this.state.selected;
        this.setState({selected: isSelected});
        this.props.squareSelected(this.props.squareId, isSelected);
    },

    render: function() {
        var style = this.state.selected ? "danger" : "primary";

        return (
            <Button className="grid-square" bsStyle={style} disabled={false} onClick={this.squareToggled}>{this.props.name}</Button>
        );
    }
});