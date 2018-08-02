import React, {Component} from 'react';

class City extends Component {

    constructor(props){
        super(props);
        this.handleClickId = this.handleClickId.bind(this);
    }

    handleClickId = (event) => {
        return (event.props.cities.id);
    };

    render() {
        const { updateCurrentCity, cities } = this.props;

        return (
                <p onClick={(() => {
                    updateCurrentCity(this.handleClickId(this));
                })}>{cities.city}</p>
        );
    }
}
export default City;