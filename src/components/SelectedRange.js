import React, {Component} from 'react';

class SelectedRange extends Component {

    render() {
        return (
            <div className={"select-calendar"}
                        onClick={this.props.showHide.bind(this, "calendarIsDisabled", this.props.calendarIsDisabled)}>
                {this.props.selectedDay + " " +
                this.props.monthNamesCase[this.props.selectedMonth] + " " +
                this.props.selectedYear}
            </div>
        );
    }
}
export default SelectedRange;