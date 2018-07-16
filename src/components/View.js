import React, {Component} from 'react';
import Form from './Form';
import Example from './Example';
import HeaderWidget from './HeaderWidget';

class View extends Component {
    constructor(props){
        super(props);
        this.state = {
            width: window.innerWidth
        }
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }

    resize() {
        this.setState({width: window.innerWidth});
    }

    render() {
        let cars = this.props.cars;

        let carsTemplate = cars.map((item, index) =>
            <div key={index}>
                <Example cars={item}/>
            </div>
        );
        return (
            <div className={'border-form'}>
                <div className={'widget-main'}>
                    <HeaderWidget
                        title={this.props.title}
                        width={this.state.width}
                    />
                    <div className="clearfix"/>

                    <Form
                        cities={this.props.cities}
                        width={this.state.width}
                    />

                    <div className="example-car">
                        <p className={"small-text"}>Например,</p>
                        {carsTemplate}
                    </div>
                    <div className="bottom-text">
                        <p className="bottom-blue-text">и еще 234 авто</p>
                        <p className="small-text">Myrentacar.com - рекомендательный прокат автомобилей на курортах и в туристических городах.</p>
                    </div>
                </div>
            </div>
        );
    }

}

export default View;