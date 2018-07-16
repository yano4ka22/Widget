import React, {Component} from 'react';
import DateSelection from './DateSelection';
import SelectedLocation from './SelectedLocation';

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            cityIsDisabled: true,
            calendarIsDisabled: true,
            currentCity: "Черногория",
            wrapperRef: ''
        };
        this.showHide = this.showHide.bind(this);
        this.updateCurrentCity = this.updateCurrentCity.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.setWrapperRef = this.setWrapperRef.bind(this);
    }

    showHide(name, isDisabled){
        this.setState(() => ({
            [name]: !isDisabled
        }));
    }

    updateCurrentCity(newCity) {
        this.setState({
            currentCity: newCity
        });
    }

    handleClickOutside(event){
        if (this.isOutside(event)) {
            this.setState(() => ({
                cityIsDisabled: !this.state.cityIsDisabled
            }));
        }
    }

    isOutside(event) {
        return this.wrapperRef && !this.wrapperRef.contains(event.target) && !this.state.cityIsDisabled;
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    render() {
        let redirectUrl = "https://myrentacar.com/#!sochi/170718/250718";

        return (
            <div className="form-cars">
                <form action={redirectUrl} method="post">
                    <SelectedLocation
                        cities={this.props.cities}
                        currentCity={this.state.currentCity}
                        cityIsDisabled={this.state.cityIsDisabled}
                        showHide={this.showHide}
                        updateCurrentCity={this.updateCurrentCity}
                        handleClickOutside={this.handleClickOutside}
                        setWrapperRef={this.setWrapperRef}
                    />
                    <DateSelection
                        calendarIsDisabled={this.state.calendarIsDisabled}
                        showHide={this.showHide}
                    />
                    <button className={"button-find"}>Найти</button>
                </form>
            </div>
        );
    }
}
export default Form;