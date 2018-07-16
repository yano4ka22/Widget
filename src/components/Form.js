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
            wrapperRefCalendar: '',
            wrapperRef: ''
        };
        this.showHide = this.showHide.bind(this);
        this.updateCurrentCity = this.updateCurrentCity.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutsideCalendar = this.handleClickOutsideCalendar.bind(this);
        this.isOutsideCalendar = this.isOutsideCalendar.bind(this);
        this.setWrapperRefCalendar = this.setWrapperRefCalendar.bind(this);
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

    handleClickOutsideCalendar(event){
        if (this.isOutsideCalendar(event)) {
            this.setState(() => ({
                calendarIsDisabled: !this.state.calendarIsDisabled
            }));
        }
    }

    isOutsideCalendar(event) {
        return this.wrapperRefCalendar && !this.wrapperRefCalendar.contains(event.target) && !this.state.calendarIsDisabled;
    }

    setWrapperRefCalendar(node) {
        this.wrapperRefCalendar = node;
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
                        width={this.props.width}
                        showHide={this.showHide}
                        handleClickOutsideCalendar={this.handleClickOutsideCalendar}
                        setWrapperRefCalendar={this.setWrapperRefCalendar}
                    />
                    <button className={"button-find"}>Найти</button>
                </form>
            </div>
        );
    }
}
export default Form;