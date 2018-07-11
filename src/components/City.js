import React, {Component} from 'react';

class City extends Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick = (e) => {
        return (e.props.data.city);
    };
    render() {
        let city = this.props.data.city;

        return (
                <p onClick={(() => {
                    this.props.updateData(this.handleClick(this));
                })}>{city}</p>
        );
    }
}
export default City;