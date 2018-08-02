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
        const { cities, updateCurrentCity, setWrapperRef, cityIsDisabled, showHide, currentCity } = this.props;

        let citiesTemplate = cities.map((item, index) =>
            <div key={index}>
                <City cities={item} updateCurrentCity={updateCurrentCity}/>
            </div>
        );

        return (
            <div className={"container-select-city"} ref={setWrapperRef}>
                <div className={"select-city"}
                     onClick={showHide.bind(this, "cityIsDisabled", cityIsDisabled)}
                >
                    <div className={(cityIsDisabled ? "down" : "up")}/>
                    {currentCity}
                </div>
                {
                    cityIsDisabled ? null :
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