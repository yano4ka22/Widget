import React, {Component} from 'react';
import HeaderCalendar from './HeaderCalendar'
import WeekDays from './WeekDays'
import MonthDates from './MonthDates'

class DateSelection extends Component {
    constructor(props){
        super(props);
            this.state = {
                date: new Date(),
                monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
                monthNamesCase: ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"],
                dayNames: ["пн", "вт", "ср", "чт", "пт", "сб", "вс"]
        }
    }
    static getDaysCount(date) {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    }
    render() {
        let currentDay = this.state.date.getDate(),
            currentMonth = this.state.monthNamesCase[this.state.date.getMonth()],
            currentYear = this.state.date.getFullYear();
        //todo посмотреть варианты решения calendarIsDisabled
        return (
            <div className="container-select-calendar">
                <div className={"select-calendar"} onClick={this.props.showHide.bind(this, "calendarIsDisabled", this.props.calendarIsDisabled)}>
                    {currentDay + " " + currentMonth + " " + currentYear}
                </div>
                {
                    this.props.calendarIsDisabled ? null :
                        <div className={"calendar-value"}>
                            <div className="fragment">
                                <div className="inner">
                                    <HeaderCalendar
                                        month={this.state.monthNames[this.state.date.getMonth()]}
                                    />
                                    <WeekDays
                                        dayNames={this.state.dayNames}
                                    />
                                    <MonthDates
                                        month={this.state.date.getMonth()}
                                        year = {this.state.date.getFullYear()}
                                        getDaysCount={DateSelection.getDaysCount}
                                    />
                                </div>
                                <div className="inner">
                                    <HeaderCalendar
                                        month={this.state.monthNames[this.state.date.getMonth() + 1]}
                                    />
                                    <WeekDays
                                        dayNames={this.state.dayNames}
                                    />
                                    <MonthDates
                                        month={this.state.date.getMonth() + 1}
                                        year = {this.state.date.getFullYear()}
                                        getDaysCount={DateSelection.getDaysCount}
                                    />
                                </div>
                            </div>
                        </div>
                }
            </div>
        );
    }
}
export default DateSelection;