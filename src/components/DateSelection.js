import React, {Component} from 'react';
import Calendar from './Calendar'
import SelectedDate from './SelectedDate'

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

        //todo посмотреть варианты решения calendarIsDisabled
        return (
            <div className="container-select-calendar" ref={this.props.setWrapperRefCalendar}>
                <SelectedDate
                    from={this.props.from}
                    to={this.props.to}
                    selectedDay={this.state.selectedDay}
                    selectedMonth={this.state.selectedMonth}
                    selectedYear={this.state.selectedYear}
                    showHide={this.props.showHide}
                    calendarIsDisabled={this.props.calendarIsDisabled}
                    monthNamesCase={this.state.monthNamesCase}
                />
                {
                    this.props.calendarIsDisabled ? null :
                        <Calendar
                            date={this.state.date}
                            width={this.props.width}
                            month={this.state.month}
                            selectedDay={this.state.selectedDay}
                            selectedMonth={this.state.selectedMonth}
                            selectedYear={this.state.selectedYear}
                            getDaysCount={DateSelection.getDaysCount}
                            monthNames={this.state.monthNames}
                            dayNames={this.state.dayNames}
                            getPrev={this.getPrev}
                            getNext={this.getNext}
                            from={this.props.from}
                            to={this.props.to}
                            updateCurrentRange={this.props.updateCurrentRange}
                        />

                }
            </div>
        );
    }
}
export default DateSelection;