import React, {Component} from 'react';
import DateSelection from './calendar/DateSelection';
import SelectedLocation from './location/SelectedLocation';
import {redirectUrl} from './redirectData';

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            cityIsDisabled: true,
            calendarIsDisabled: true,
            currentCity: "Сочи",
            currentCityId: 21,
            wrapperRefCalendar: '',
            wrapperRef: '',
            from: null,
            to: null,
            isRange: false,
            urlDateFrom: "",
            urlDateTo: ""
        };
        this.showHide = this.showHide.bind(this);
        this.updateCurrentCity = this.updateCurrentCity.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutsideCalendar = this.handleClickOutsideCalendar.bind(this);
        this.isOutsideCalendar = this.isOutsideCalendar.bind(this);
        this.setWrapperRefCalendar = this.setWrapperRefCalendar.bind(this);
        this.updateCurrentRange = this.updateCurrentRange.bind(this);
        this.makeDateUrl = this.makeDateUrl.bind(this);
    }

    componentWillMount(){
        this.makeDateUrl(this.state.from);
    }

    componentWillUpdate(nextProps, nextState){
        if(nextState.from !== this.state.from){
            this.makeDateUrl(nextState.from)
        }
        if(nextState.to !== this.state.to){
            this.makeDateUrl(nextState.to)
        }
    }

    showHide(name, isDisabled){
        this.setState({
            [name]: !isDisabled
        });
    }

    updateCurrentCity(idCity) {
        this.setState({
            currentCity: this.props.cities[idCity - 1].city,
            currentCityId: idCity
        });
    }

    handleClickOutside(event){
        if (this.isOutside(event)) {
            this.setState({
                cityIsDisabled: !this.state.cityIsDisabled
            });
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
            this.setState({
                calendarIsDisabled: !this.state.calendarIsDisabled
            });
        }
    }

    isOutsideCalendar(event) {
        return this.wrapperRefCalendar && !this.wrapperRefCalendar.contains(event.target) && !this.state.calendarIsDisabled;
    }

    setWrapperRefCalendar(node) {
        this.wrapperRefCalendar = node;
    }

    updateCurrentRange(day, month, year) {
        let newDate = new Date(year, month, day);

        if(!this.state.isRange){
            this.setState({
                from: newDate,
                isRange: true
            });
        } else {
            this.setState({
                to: newDate,
                isRange: false
            });
        }
    }

    makeDateUrl = date => {
        let newDate = (date) ? date : new Date(),
            result = newDate.getDate();

        result += (newDate.getMonth() < 10) ? '0' + (newDate.getMonth() + 1) : '' + (newDate.getMonth() + 1);
        result += (newDate.getFullYear().toString().substr(-2));

        if(!this.state.isRange){
            this.setState(state => state.urlDateFrom === result ? null : ({
                urlDateFrom: result
            }));
        } else {
            this.setState(state => state.urlDateTo === result ? null : ({
                urlDateTo: result
            }));
        }

    };

    render() {
        const { translit, cities, width, maxWidth } = this.props;
        let redirectUrlResult = redirectUrl(translit[this.state.currentCityId-1].city, this.state.urlDateFrom, this.state.urlDateTo);

        return (
            <div className="form-cars">
                <form action={redirectUrlResult} method="post">
                    <SelectedLocation
                        cities={cities}
                        currentCity={this.state.currentCity}
                        cityIsDisabled={this.state.cityIsDisabled}
                        showHide={this.showHide}
                        updateCurrentCity={this.updateCurrentCity}
                        handleClickOutside={this.handleClickOutside}
                        setWrapperRef={this.setWrapperRef}
                    />
                    <DateSelection
                        calendarIsDisabled={this.state.calendarIsDisabled}
                        width={width}
                        maxWidth={maxWidth}
                        from={this.state.from}
                        to={this.state.to}
                        showHide={this.showHide}
                        handleClickOutsideCalendar={this.handleClickOutsideCalendar}
                        setWrapperRefCalendar={this.setWrapperRefCalendar}
                        updateCurrentRange={this.updateCurrentRange}
                    />
                    <button className={"button-find"}>Найти</button>
                </form>
            </div>
        );
    }
}
export default Form;