import React, {Component} from 'react';

class App extends Component {
    render() {
        let redirectUrl = "https://myrentacar.com/#!sochi/170718/250718";
        return (
            <div className={'widgetMain'}>
                <div className="headForm">
                    <h2>Прокат автомобилей</h2>
                    <img className={'imageRight'} src="./img/logo.png" alt="Логотип"/>
                </div>
                <div className="clearfix"/>
                <div className="formCars">
                    <form action={redirectUrl} method="post">
                        <select className={"selectCity"}>
                            {/*<option selected value="Черногория">Черногория</option>
                            <option value="Сочи">Сочи</option>*/}
                        </select>
                        <div className={"cityValue"}>
                            <p>Черногория</p>
                            <p>Сочи</p>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

}

export default App;