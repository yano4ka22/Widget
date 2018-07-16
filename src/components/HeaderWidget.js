import React, {Component} from 'react';

class HeaderWidget extends Component {

    render() {
        let keys = Object.keys(this.props.title);

        return (
            //todo цифры в const
            <div className="head-form">
                <div className="float-right logo"/>
                <h2>
                    { (this.props.width > "940") && this.props.title[keys[0]].title }
                    { (this.props.width < "940" && this.props.width > "560" ) && this.props.title[keys[1]].title }
                    { this.props.width < "560" && this.props.title[keys[2]].title }
                </h2>
            </div>
        );
    }
}
export default HeaderWidget;