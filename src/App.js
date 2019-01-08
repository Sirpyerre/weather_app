import React, {Component} from 'react';
import {Grid, Row, Col} from "react-flexbox-grid";
import './App.css';
import LocationList from "./components/LocationList";
import {MuiThemeProviderOld} from "@material-ui/core/es/styles/MuiThemeProvider";

const cities = [
    'Buenos Aires, ar',
    'Washington, us',
    'Bogota, col',
    'Ciudad de México, mx',
    'Madrid, es',
    'Lima, pe'
]

class App extends Component {
    handleSelectedLocation = city => {
        console.log(`handleSelectedLocation, city:${city}`);
    };

    render() {
        return (
                <MuiThemeProviderOld>
                    <Grid>
                        <Row>
                            <h1>Grid System</h1>
                        </Row>
                        <Row>
                            <h5>Las columnas se muestran en la misma fila mientras sumen 12</h5>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                <div className='red'>MD</div>
                            </Col>
                            <Col xs={12}>
                                <div className='green'>MD</div>
                            </Col>
                            <Col xs={12}>
                                <div className='blue'>MD</div>
                            </Col>
                            <Col xs={12}>
                                <div className='yellow'>MD</div>
                            </Col>
                        </Row>
                    </Grid>
                </MuiThemeProviderOld>
        /* <div className="App">
         <LocationList cities={cities}
                       onSelectedLocation={this.handleSelectedLocation}>
         </LocationList>
     </div>*/

    )
        ;
    }
}

export default App;
