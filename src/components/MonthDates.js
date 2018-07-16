import React, {Component} from 'react';

class MonthDates extends Component {
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        }
    }
    render() {
        let weekStack = Array.apply(null, {length: 7}).map(Number.call, Number),
            haystack = Array.apply(null, {length: 6}).map(Number.call, Number),
            startDay = new Date(this.props.year, this.props.month, 1),
            daysInMonth = this.props.getDaysCount(startDay),
            first = startDay.getDay(),
            day = startDay.getUTCDay(),
            self = this,
            d, isDate, isActive;

        day = startDay.getDate() + 1 - first;
        while (day > 1) {
            day -= 7;
        }
        day -= 1;

        return (
            <div>
                {haystack.map(function (item, index) {
                    d = day + index * 7;
                    return (
                        <div className="r-row" key={index}>
                            {weekStack.map(function (item, index) {
                                d += 1;
                                isDate = d > 0 && d <= daysInMonth;
                                isActive = new Date(self.props.year, self.props.month, d).getTime() >= self.props.today.getTime();
                                console.log(self.props.today);
                                if(isDate) {
                                    if(isActive){
                                        return <div className="r-cell active-cell" key={index}>{d}</div>
                                    }
                                    return <div className="r-cell" key={index}>{d}</div>
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