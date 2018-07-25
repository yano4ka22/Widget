import React, {Component} from 'react';

class SelectedDate extends Component {
    constructor(props){
        super(props);
        this.state = {
            dateFrom: null,
            dateTo: null
        };
    }

    createInitialInterval() {
        return this.props.selectedDay + " - " + (this.props.selectedDay + 2) + " " +
            this.props.monthNamesCase[this.props.selectedMonth] + " " + this.props.selectedYear;
    }

    createFiniteInterval() {
        return this.props.to.getDate() + " " + this.props.monthNamesCase[this.props.to.getMonth()] + " " + this.props.to.getFullYear();
    }

    render() {

        let initialValue = this.createInitialInterval();

        return (
            <div className={"select-calendar"}
                        onClick={this.props.showHide.bind(this, "calendarIsDisabled", this.props.calendarIsDisabled)}>
                {(this.props.from) ?
                    //todo Что за фигня?
                    this.props.from.getDate() + " " :
                    initialValue
                }
                {(this.props.to && this.props.from.getMonth() !== this.props.to.getMonth()) &&
                    this.props.monthNamesCase[this.props.from.getMonth()]
                }
                {(this.props.to) && (
                    (" - " + this.createFiniteInterval()))
                }
            </div>
        );
    }
}
export default SelectedDate;