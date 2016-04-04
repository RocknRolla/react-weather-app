let React = require('react');
let {WeatherForm} = require('WeatherForm');
let {WeatherMessage} = require('WeatherMessage');
let openWeatherMap = require('openWeatherMap');

let Weather = React.createClass({
    getInitialState: function () {
        return {
            isLoading: false
        }
    },
    handleSearch: function (location) {
        this.setState({ isLoading: true });


        openWeatherMap.getTemp(location).then((temp) => {
            this.setState({
                location,
                temp,
                isLoading: false
            });
        }).catch((errorMessage) => {
            this.setState({ isLoading: false });
            alert(errorMessage);
        });
    },
    render: function () {
        let {isLoading, temp, location} = this.state;

        function renderMessage () {
            if (isLoading) {
                return <h3>Fetching weather..</h3>
            } else if (temp && location) {
                return <WeatherMessage temp={temp} location={location} />;
            }
        }

        return (
            <div>
                <h2>Weather Component</h2>
                <WeatherForm onSearch={this.handleSearch} />
                {renderMessage()}
            </div>
        );
    }
});

module.exports = {Weather};