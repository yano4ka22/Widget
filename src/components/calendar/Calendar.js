import React, {Component} from 'react';
import HeaderCalendar from './HeaderCalendar'
import WeekDays from './WeekDays'
import MonthDates from './MonthDates'

class Range extends Component {
    constructor(props){
        super(props);
        this.state = {
            isSecondMonth: false
        };
        this.updateSecondMonth = this.updateSecondMonth.bind(this);
    }
    componentWillMount(){
        this.updateSecondMonth(this.props.width < this.props.maxWidth);
    }

    componentWillUpdate(){
        this.updateSecondMonth(this.props.width < this.props.maxWidth)
    }

    updateSecondMonth(value){
        this.setState(state => state.isSecondMonth === value ? null : ({
            isSecondMonth: value
        }));
    }

    render() {
        const { date, monthNames, month, getPrev, getNext, dayNames, selectedMonth,
            selectedYear, selectedDay, from, to, updateCurrentRange } = this.props;

        return <div className={"calendar-value"}>
            <div className="fragment">
                <div className="inner">
                    <HeaderCalendar
                        month={monthNames[month]}
                        getPrev={getPrev}
                        getNext={getNext}
                        isExcessArrowRight={!this.state.isSecondMonth}
                    />
                    <WeekDays
                        dayNames={dayNames}
                    />
                    <MonthDates
                        from={from}
                        to={to}
                        today={new Date(selectedYear, selectedMonth, selectedDay)}
                        month={month}
                        year={date.getFullYear()}
                        updateCurrentRange={updateCurrentRange}
                    />
                </div>
                {
                    !this.state.isSecondMonth &&
                        <div className="inner">
                            <HeaderCalendar
                                month={monthNames[month + 1]}
                                getPrev={getPrev}
                                getNext={getNext}
                                isExcessArrowLeft={true}
                            />
                            <WeekDays
                                dayNames={dayNames}
                            />
                            <MonthDates
                                from={from}
                                to={to}
                                today={date}
                                month={month + 1}
                                year={date.getFullYear()}
                                updateCurrentRange={this.props.updateCurrentRange}
                            />
                        </div>
                }

            </div>
        </div>;
    }
}
export default Range;