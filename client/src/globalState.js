import React from 'react';

const GlobalState = React.createContext([{}, () => {}]);

const devState = {
    openModal: false
} 

export {
    GlobalState,
    devState
}