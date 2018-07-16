import React, {Component} from 'react';

class HeaderCalendar extends Component {


    render() {
        let currentMonth;
        currentMonth = this.props.month;
        return (
            <div>
                {this.props.isExcessArrowLeft ? null :
                    <div className="arrow-left" onClick={() => {this.props.getPrev()}}>←</div>
                }
                <div className="nameMonth">{currentMonth}</div>

                {this.props.isExcessArrowRight ? null :
                    <div className="arrow-right" onClick={() => {this.props.getNext()}}>→</div>
                }


            </div>
        )
    }
}
export default HeaderCalendar;