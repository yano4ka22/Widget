import React, {Component} from 'react';
import DateSelection from './DateSelection';
import SelectedLocation from './SelectedLocation';

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
            isDateFromForUrl: "",
            isDateToForUrl: ""
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
        this.setState(() => ({
            [name]: !isDisabled
        }));
    }

    updateCurrentCity(newCity, idCity) {
        this.setState({
            currentCity: newCity,
            currentCityId: idCity
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

    updateCurrentRange(newDay, newMonth, newYear) {
        let newDate = new Date(newYear, newMonth, newDay);

        if(!this.state.isRange){
            this.setState(() => ({
                from: newDate,
                isRange: true
            }));
        } else {
            this.setState(() => ({
                to: newDate,
                isRange: false
            }));
        }
    }

    makeDateUrl = date => {
        let newDate = (date) ? date : new Date(),
            result = newDate.getDate();
        result += (newDate.getMonth() < 10) ? '0' + (newDate.getMonth() + 1) : '' + (newDate.getMonth() + 1);
        result += (newDate.getFullYear().toString().substr(-2));

        if(!this.state.isRange){
            this.setState(state => state.isDateFromForUrl === result ? null : ({
                isDateFromForUrl: result
            }));
        } else {
            this.setState(state => state.isDateToForUrl === result ? null : ({
                isDateToForUrl: result
            }));
        }

    };

    render() {

        let redirectUrl = "https://myrentacar.com/#!" + this.props.translit[this.state.currentCityId-1].city + "/"
            + this.state.isDateFromForUrl + "/" + this.state.isDateToForUrl;

        return (
            <div className="form-cars">
                <form action={redirectUrl} method="post">
                    <SelectedLocation
                        cities={this.props.cities}
                        currentCity={this.state.currentCity}
                        currentCityId={this.state.currentCityId}
                        cityIsDisabled={this.state.cityIsDisabled}
                        showHide={this.showHide}
                        updateCurrentCity={this.updateCurrentCity}
                        handleClickOutside={this.handleClickOutside}
                        setWrapperRef={this.setWrapperRef}
                    />
                    <DateSelection
                        calendarIsDisabled={this.state.calendarIsDisabled}
                        width={this.props.width}
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