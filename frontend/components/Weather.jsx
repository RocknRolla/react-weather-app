let React = require('react');
let {ErrorModal} = require('ErrorModal');
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
        this.setState({
            isLoading: true,
            errorMessage: undefined
        });

        openWeatherMap.getTemp(location).then((temp) => {
            this.setState({
                location,
                temp,
                isLoading: false
            });
        }).catch((e) => {
            this.setState({
                isLoading: false ,
                errorMessage: e.message
            });
        });
    },
    render: function () {
        let {isLoading, temp, location, errorMessage} = this.state;

        function renderMessage () {
            if (isLoading) {
                return <h3 className="text-center">Fetching weather..</h3>
            } else if (temp && location) {
                return <WeatherMessage temp={temp} location={location} />;
            }
        }

        function renderErrorMessage () {
            if (typeof errorMessage === 'string') {
                return (
                    <ErrorModal message={errorMessage} />
                );
            }
        }

        return (
            <div>
                <h1 className="text-center">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch} />
                {renderMessage()}
                {renderErrorMessage()}
            </div>
        );
    }
});

module.exports = {Weather};