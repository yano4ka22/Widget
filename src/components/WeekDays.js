import React, {Component} from 'react';

class WeekDays extends Component {

    render() {
        let haystack = Array.apply(null, {length:7}).map(Number.call, Number),
            self = this;
        return (
            <div className="week-row">
                {haystack.map(function (item, i) {
                    return (
                        <div key={i} className="r-cell">{self.props.dayNames[(i)]}</div>
                    );
                })}
            </div>
        )
    }
}
export default WeekDays;