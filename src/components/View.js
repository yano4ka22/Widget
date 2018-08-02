import React, {Component} from 'react';
import Form from './Form';
import Example from './Example';
import HeaderWidget from './HeaderWidget';

class View extends Component {
    state = {
        width: window.innerWidth,
        maxWidth: 940,
        middleWidth: 560
    };

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }

    resize() {
        this.setState({width: window.innerWidth});
    }

    render() {
        const {cars, title, cities, translit} = this.props;

        let carsTemplate = cars.map((item, index) =>
            <div key={index}>
                <Example cars={item}/>
            </div>
        );
        return (
            <div className={'border-form'}>
                <div className={'widget-main'}>
                    <HeaderWidget
                        title={title}
                        width={this.state.width}
                        maxWidth={this.state.maxWidth}
                        middleWidth={this.state.middleWidth}
                    />
                    <div className="clearfix"/>

                    <Form
                        cities={cities}
                        translit={translit}
                        width={this.state.width}
                        maxWidth={this.state.maxWidth}
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