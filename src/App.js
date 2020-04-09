import React from 'react';
import {Cards, Chart, CountryPicker} from './components';
import {fetchData} from './api';
import image from './image/image.png';
import styles from './App.module.css';

class App extends React.Component {

    state = {
        data: {},
        country: '',
    }

    async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({data: fetchedData});
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({data: fetchedData, country: country});
    }

    render() {
        const {data, country} = this.state;

        return(
            <div className={styles.container}>
                <img className={styles.image} src={image} alt="COVID-19" />
                <Cards data={data}/>
                <CountryPicker handleCountryChange ={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
                <div className={styles.credit}><span>Github⚡</span> <a target="_blank" href="https://github.com/mintpw">mintpw</a></div>
            </div>
        )
    }
}

export default App;