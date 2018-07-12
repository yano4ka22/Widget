import React, {Component} from 'react';
import City from './City';

class SelectedLocation extends Component {
    componentDidMount() {
        window.addEventListener('mousedown', this.props.handleClickOutside);
    }
    componentWillUnmount() {
        window.removeEventListener('mousedown', this.props.handleClickOutside);
    }

    render() {
        let cities = this.props.cities;
        let citiesTemplate = cities.map((item, index) =>
            <div key={index}>
                <City city={item} updateCurrentCity={this.props.updateCurrentCity}/>
            </div>
        );

        return (
            <div className={"container-select-city"} ref={this.props.setWrapperRef}>
                <div className={"select-city"}
                     onClick={this.props.showHide.bind(this, "cityIsDisabled", this.props.cityIsDisabled)}
                >
                    <div className={(this.props.cityIsDisabled ? "down" : "up")}/>
                    {this.props.currentCity}
                </div>
                {
                    this.props.cityIsDisabled ? null :
                        <div className={"city-value"} >
                            <div className="fragment">
                                {citiesTemplate}
                            </div>
                        </div>
                }
            </div>
        );
    }
}
export default SelectedLocation;