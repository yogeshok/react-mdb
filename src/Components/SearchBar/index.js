//import React, { useState, useEffect, useRef } from 'react';
//class comonents
import React, { Component } from 'react';

import PropTypes from 'prop-types';
// Image
import searchIcon from '../../images/search-icon.svg';
// Styles
import { Wrapper, Content } from './SearchBar.styles';
// class component added successfully

class SearchBar extends Component {
    // const [state, setState] = useState('');

    // const initial = useRef(true);

    state = {value:''};
    timeout = null;
    // actual value is in initial.current
    // useEffect(() => {
    //     if(initial.current){
    //         initial.current = false;
    //         return;
    //     }
        
        // const timer = setTimeout(() => {
        //     setSearchTerm(state);
        // }, 500)
    //     return() => clearTimeout(timer)
    // }, [setSearchTerm, state])

    componentDidUpdate(_prevProps, prevState) {
        if(this.state.value !== prevState.value) {
            const {setSearchTerm} = this.props;

            clearTimeout(this.timeout);

            this.timeout = setTimeout(() => {
                const { value } = this.state;
                setSearchTerm(value);
            }, 500)
        }
    }

    render() {
        return (
            <Wrapper>
                <Content>
                    <img src={searchIcon} alt='search-icon' />
                    <input
                        type='text'
                        placeholder='Search Movie'
                        onChange={event => this.setState({value: event.currentTarget.value})}
                        value={this.state.value}
                    />
                </Content>
            </Wrapper>
        )
    }

    
}

SearchBar.propTypes = {
    callback: PropTypes.func
};

export default SearchBar;