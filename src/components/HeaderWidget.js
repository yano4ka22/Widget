import React, {Component} from 'react';

class HeaderWidget extends Component {

    render() {
        const maxWidth = "940",
            middleWidth = "560";
        let keys = Object.keys(this.props.title);

        return (
            <div className="head-form">
                <div className="float-right logo"/>
                <h2>
                    { (this.props.width > maxWidth) && this.props.title[keys[0]].title }
                    { (this.props.width < maxWidth && this.props.width > middleWidth ) && this.props.title[keys[1]].title }
                    { this.props.width < middleWidth && this.props.title[keys[2]].title }
                </h2>
            </div>
        );
    }
}
export default HeaderWidget;