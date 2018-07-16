import React, {Component} from 'react';
import HeaderCalendar from './HeaderCalendar'
import WeekDays from './WeekDays'
import MonthDates from './MonthDates'
import SelectedRange from './SelectedRange'

class DateSelection extends Component {
    constructor(props){
        super(props);
            this.state = {
                date: new Date(),
                monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
                monthNamesCase: ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"],
                dayNames: ["пн", "вт", "ср", "чт", "пт", "сб", "вс"],
                month: new Date().getMonth(),
                selectedDay: new Date().getDate(),
                selectedMonth: new Date().getMonth(),
                selectedYear: new Date().getFullYear()
        };
        this.getPrev = this.getPrev.bind(this);
        this.getNext = this.getNext.bind(this);
    }
    componentDidMount() {
        window.addEventListener('mousedown', this.props.handleClickOutsideCalendar);
    }
    componentWillUnmount() {
        window.removeEventListener('mousedown', this.props.handleClickOutsideCalendar);
    }

    static getDaysCount(date) {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    }

    getPrev(){
        this.setState(() => ({
            month: this.state.month - 1
        }));
    }

    getNext(){
        this.setState(() => ({
            month: this.state.month + 1
        }));
    }

    render() {
        let self = this;

        //todo посмотреть варианты решения calendarIsDisabled
        //todo cursor pointer
        return (
            <div className="container-select-calendar" ref={this.props.setWrapperRefCalendar}>
                <SelectedRange
                    selectedDay={this.state.selectedDay}
                    selectedMonth={this.state.selectedMonth}
                    selectedYear={this.state.selectedYear}
                    showHide={this.props.showHide}
                    calendarIsDisabled={this.props.calendarIsDisabled}
                    monthNamesCase={this.state.monthNamesCase}
                />
                {
                    this.props.calendarIsDisabled ? null :
                        <div className={"calendar-value"}>
                            <div className="fragment">
                                <div className="inner">
                                    {
                                        self.props.width < "940" ?
                                            <HeaderCalendar
                                                month={this.state.monthNames[this.state.month]}
                                                getPrev={this.getPrev}
                                                getNext={this.getNext}
                                            />
                                            : <HeaderCalendar
                                                month={this.state.monthNames[this.state.month]}
                                                getPrev={this.getPrev}
                                                getNext={this.getNext}
                                                isExcessArrowRight={true}
                                            />
                                    }

                                    <WeekDays
                                        dayNames={this.state.dayNames}
                                    />
                                    <MonthDates
                                        today={new Date(this.state.selectedYear, this.state.selectedMonth, this.state.selectedDay)}
                                        month={this.state.month}
                                        year = {this.state.date.getFullYear()}
                                        getDaysCount={DateSelection.getDaysCount}
                                    />
                                </div>
                                {
                                    this.props.width < "940" ? null :
                                        <div className="inner">
                                            <HeaderCalendar
                                                month={this.state.monthNames[this.state.month + 1]}
                                                width={this.props.width}
                                                getPrev={this.getPrev}
                                                getNext={this.getNext}
                                                isExcessArrowLeft={true}
                                            />
                                            <WeekDays
                                                dayNames={this.state.dayNames}
                                            />
                                            <MonthDates
                                                today={this.state.date}
                                                month={this.state.month + 1}
                                                year = {this.state.date.getFullYear()}
                                                getDaysCount={DateSelection.getDaysCount}
                                            />
                                        </div>
                                }

                            </div>
                        </div>
                }
            </div>
        );
    }
}
export default DateSelection;