import React, {Component} from 'react';
import HeaderCalendar from './HeaderCalendar'
import WeekDays from './WeekDays'
import MonthDates from './MonthDates'

class Range extends Component {

    render() {
        let self = this;

        return (
            <div className={"calendar-value"}>
                <div className="fragment">
                    <div className="inner">
                        {
                            self.props.width < "940" ?
                                <HeaderCalendar
                                    month={this.props.monthNames[this.props.month]}
                                    getPrev={this.props.getPrev}
                                    getNext={this.props.getNext}
                                />
                                : <HeaderCalendar
                                    month={this.props.monthNames[this.props.month]}
                                    getPrev={this.props.getPrev}
                                    getNext={this.props.getNext}
                                    isExcessArrowRight={true}
                                />
                        }

                        <WeekDays
                            dayNames={this.props.dayNames}
                        />
                        <MonthDates
                            from={this.props.from}
                            to={this.props.to}
                            today={new Date(this.props.selectedYear, this.props.selectedMonth, this.props.selectedDay)}
                            month={this.props.month}
                            year = {this.props.date.getFullYear()}
                            getDaysCount={this.props.getDaysCount}
                            updateCurrentRange={this.props.updateCurrentRange}
                        />
                    </div>
                    {
                        this.props.width < "940" ? null :
                            <div className="inner">
                                <HeaderCalendar
                                    month={this.props.monthNames[this.props.month + 1]}
                                    width={this.props.width}
                                    getPrev={this.props.getPrev}
                                    getNext={this.props.getNext}
                                    isExcessArrowLeft={true}
                                />
                                <WeekDays
                                    dayNames={this.props.dayNames}
                                />
                                <MonthDates
                                    from={this.props.from}
                                    to={this.props.to}
                                    today={this.props.date}
                                    month={this.props.month + 1}
                                    year = {this.props.date.getFullYear()}
                                    getDaysCount={this.props.getDaysCount}
                                    updateCurrentRange={this.props.updateCurrentRange}
                                />
                            </div>
                    }

                </div>
            </div>);
    }
}
export default Range;