import React, {Component} from 'react';

class City extends Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleClickId = this.handleClickId.bind(this);
    }

    handleClick = (event) => {
        return (event.props.city.city);
    };

    handleClickId = (event) => {
        return (event.props.city.id);
    };

    render() {
        let city = this.props.city.city;

        return (
                <p onClick={(() => {
                    this.props.updateCurrentCity(this.handleClick(this), this.handleClickId(this));
                })}>{city}</p>
        );
    }
}
export default City;