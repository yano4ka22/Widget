import React, {Component} from 'react';

class HeaderWidget extends Component {

    render() {
        const {width, maxWidth, middleWidth, title} = this.props;
        let keys = Object.keys(title);
        return (
            <div className="head-form">
                <div className="float-right logo"/>
                <h2>
                    { (width > maxWidth) && title[keys[0]].title }
                    { (width < maxWidth && width > middleWidth ) && title[keys[1]].title }
                    { width < middleWidth && title[keys[2]].title }
                </h2>
            </div>
        );
    }
}
export default HeaderWidget;