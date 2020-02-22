import React from 'react';

class Hero extends React.Component {
// can access this.props directly inside the template as well.
    state = {
        hero: this.props.hero
    };

    showSuperPowers(_id, superPowers) {
        return superPowers.length ?
            superPowers.map((superPower, index) => <li key={index}>{superPower}</li>)
            : <li key={_id}>No Super Powers</li>;
    }

    render() {
        const { hero } = this.state;

        return (
                <div className="card" style={{ width: '18rem' }}>
                    <img src={hero.imageUrl} className="card-img-top" alt={hero.name}/>
                    <div className="card-body">
                        <h5 className="card-title">{hero.name}</h5>
                        <p className="card-text">Hero ID: {hero._id}</p>
                        <ul>
                            {this.showSuperPowers(hero._id, hero.superPowers)}
                        </ul>
                        <button className="btn btn-primary">Likes &nbsp;
                            <span className="badge badge-light">{hero.likeCount}</span>
                        </button>
                    </div>
                </div>
        );
    }
}

export default Hero;
