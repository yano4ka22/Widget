import React, {Component} from 'react';

class City extends Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (event) => {
        return (event.props.city.city);
    };

    render() {
        let city = this.props.city.city;

        return (
                <p onClick={(() => {
                    this.props.updateCurrentCity(this.handleClick(this));
                })}>{city}</p>
        );
    }
}
export default City;