import React, {Component} from 'react';

class MonthDates extends Component {
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        };
        this.classActiveName = this.classActiveName.bind(this);
    }

    classActiveName(day, month, year){
        let date = new Date(year, month, day),
            dayClass = "r-cell active-cell";
        if(this.props.from){
            dayClass += (this.props.from.getDate() === day && this.props.from.getMonth() === month) ? ' selectedEdge' : '';
            if(this.props.to) {
                dayClass += (this.props.from < date && this.props.to > date) ? ' selected' : '';

            }
            if(this.props.to){
                dayClass += (this.props.to.getDate() === day && this.props.to.getMonth() === month) ? ' selectedEdge' : '';
            }
        }
        return dayClass;
    }

    render() {
        let weekStack = Array.apply(null, {length: 7}).map(Number.call, Number),
            haystack = Array.apply(null, {length: 6}).map(Number.call, Number),
            startDay = new Date(this.props.year, this.props.month, 1),
            daysInMonth = this.props.getDaysCount(startDay),
            first = startDay.getDay(),
            day = startDay.getUTCDay(),
            self = this,
            currentDay, isDate, isActive;

        day = startDay.getDate() + 1 - first;
        while (day > 1) {
            day -= 7;
        }
        day -= 1;

        return (
            <div>
                {haystack.map(function (item, index) {
                    currentDay = day + index * 7;
                    return (
                        <div className="r-row" key={index}>
                            {weekStack.map(function (item, index) {
                                currentDay += 1;
                                isDate = currentDay > 0 && currentDay <= daysInMonth;
                                isActive = new Date(self.props.year, self.props.month, currentDay).getTime() >= self.props.today.getTime();

                                if(isDate) {
                                    if(isActive){
                                        return <div className={self.classActiveName(currentDay, self.props.month, self.props.year)}
                                                    key={index}
                                                    onClick={self.props.updateCurrentRange.bind(this, currentDay, self.props.month, self.props.year)}
                                                >{currentDay}</div>
                                    }
                                    return <div className="r-cell" key={index}>{currentDay}</div>
                                }
                                return <div className="r-cell cell-none" key={index} />
                            })}
                        </div>
                    )
                })}

            </div>
        )
    }
}
export default MonthDates;