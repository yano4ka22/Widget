import React, {Component} from 'react';

class HeaderCalendar extends Component {

    render() {
        const { month, getPrev, getNext, isExcessArrowLeft, isExcessArrowRight } = this.props;

        return (
            <div>
                {isExcessArrowLeft ? null :
                    <div className="arrow-left" onClick={() => {getPrev()}}>←</div>
                }
                <div className="nameMonth">{month}</div>

                {isExcessArrowRight ? null :
                    <div className="arrow-right" onClick={() => {getNext()}}>→</div>
                }


            </div>
        )
    }
}
export default HeaderCalendar;