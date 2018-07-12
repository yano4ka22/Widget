import React, {Component} from 'react';

class DateSelection extends Component {
    constructor(props){
        super(props);
            this.state = {
                date: new Date(),
                monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
                monthNamesCase: ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"]
        }
    }
    render() {
        let currentDay = this.state.date.getDate(),
            currentMount = this.state.monthNamesCase[this.state.date.getMonth()],
            currentYear = this.state.date.getFullYear();

        return (
            <div className="container-select-calendar">
                <div className={"select-calendar"} onClick={this.props.showHide.bind(this, "calendarIsDisabled", this.props.calendarIsDisabled)}>
                    {currentDay + " " + currentMount + " " + currentYear}
                </div>
                {
                    this.props.calendarIsDisabled ? null :
                        <div className={"calendar-value"}>
                            <div className="fragment">
                                111
                            </div>
                        </div>
                }
            </div>
        );
    }
}
export default DateSelection;