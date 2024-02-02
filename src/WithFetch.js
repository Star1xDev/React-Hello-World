import React from "react";

const withFetch = (WrappedComponents) => {

    class WithFetch extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                movies: [],
            };
        }

        componentDidMount(){
            fetch("https://json-faker.onrender.com/movies")
            .then((res) => res.json())
            .then((data) => this.setState({movies: data.movies}));
        }

        render(){
            return (
                <>
                {this.state.movies.length > 0 && (
                    <WrappedComponents movies={this.state.movies}></WrappedComponents>
                )}
                </>
            )
        }

    }
    return WithFetch;
}
 
export default withFetch;