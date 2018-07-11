import React, {Component} from 'react';
import City from './City';
import Example from './Example';

class View extends Component {
    constructor(props){
        super(props);
        this.state = {
            cityIsDisabled: true,
            currentCity: "Черногория"
        };
        this.showHide = this.showHide.bind(this);
        this.updateData = this.updateData.bind(this);
    }
    showHide(){
        this.setState(() => ({
            cityIsDisabled: !this.state.cityIsDisabled
        }));
    }

    updateData(value) {
        this.setState({
            currentCity: value
        });
    }
    render() {
        let data = this.props.data;
        let cars = this.props.cars;

        let redirectUrl = "https://myrentacar.com/#!sochi/170718/250718";

        let citiesTemplate = data.map((item, index) =>
            <div key={index}>
                <City data={item} updateData={this.updateData}/>
            </div>
        );
        let carsTemplate = cars.map((item, index) =>
            <div key={index}>
                <Example cars={item}/>
            </div>
        );
        return (
            <div className={'border-form'}>
                <div className={'widget-main'}>
                    <div className="headForm">
                        <div className="float-right logo"/>
                        <h2>Прокат автомобилей</h2>
                    </div>
                    <div className="clearfix"/>
                    <div className="form-cars">
                        <form action={redirectUrl} method="post">
                            <div className={"select-city"} onClick={this.showHide}>
                                {this.state.currentCity}
                            </div>
                            {
                                this.state.cityIsDisabled ? null :
                                    <div className={"city-value"}>
                                        {}
                                        <div className="fragment">
                                            {citiesTemplate}
                                        </div>
                                    </div>
                            }
                            <div className={"select-calendar"}>
                                10-22 мая 2018
                            </div>
                            <button className={"button-find"}>Найти</button>
                        </form>
                    </div>
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