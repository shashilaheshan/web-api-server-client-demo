import React from 'react';
import axios from 'axios';

import Hero from './Hero';

class Heroes extends React.Component {
    state = {
        error: null,
        isLoaded: false,
        heroes: []
    };

    render() {
        const { error, isLoaded, heroes } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="container">
                    <div className="row">
                        {heroes.map((hero, index) => {
                            return (
                                <div key={hero._id + index} className="col">
                                    <Hero hero={hero}/>
                                </div>
                            )
                        })}
                    </div>
                </div>
            );
        }
    }

    async componentDidMount() {
        document.title = 'Heroes App';

        const instance = axios.create({
            baseURL: 'http://localhost:3000',
            timeout: 1000
        });

        try {
            await instance.get('/api/heroes').then((response) => {
            this.setState({
                isLoaded: true,
                heroes: response.data
            })
            }, (error) => {
                this.setState({
                    isLoaded: false,
                    error
                })
            });
        } catch (error) {
            console.log(error.message);
        }
    }
}

export default Heroes;
