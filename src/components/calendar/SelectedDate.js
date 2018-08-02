import React, {Component} from 'react';

class SelectedDate extends Component {

    createInitialInterval() {
        return this.props.selectedDay + " - " + (this.props.selectedDay + 2) + " " +
            this.props.monthNamesCase[this.props.selectedMonth] + " " + this.props.selectedYear;
    }

    createFiniteInterval() {
        return this.props.to.getDate() + " " + this.props.monthNamesCase[this.props.to.getMonth()] + " " + this.props.to.getFullYear();
    }

//TODO this.props.from добавить проверку на тип
    render() {
        const { monthNamesCase, from, to, showHide, calendarIsDisabled } = this.props;

        let initialValue = this.createInitialInterval();

        return (
            <div className={"select-calendar"}
                        onClick={showHide.bind(this, "calendarIsDisabled",calendarIsDisabled)}>
                {(from) ?
                    from.getDate() + " " : initialValue
                }
                {(to && from.getMonth() !== to.getMonth()) &&
                    monthNamesCase[from.getMonth()]
                }
                {(to) && (
                    (" - " + this.createFiniteInterval()))
                }
            </div>
        );
    }
}
export default SelectedDate;