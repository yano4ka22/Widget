import React, {Component} from 'react';

class HeaderCalendar extends Component {

    render() {
        let currentMonth;
        currentMonth = this.props.month;
        return (
            <div>
                <div className={"nameMonth"}>{currentMonth}</div>
            </div>
        )
    }
}
export default HeaderCalendar;