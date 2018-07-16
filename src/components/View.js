import React, {Component} from 'react';
import Form from './Form';
import Example from './Example';

class View extends Component {

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
                    <div className="head-form">
                        <div className="float-right logo"/>
                        <h2>Прокат автомобилей</h2>
                    </div>
                    <div className="clearfix"/>
                    <Form
                        cities={this.props.cities}
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