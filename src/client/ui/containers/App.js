import React, { Component } from 'react';
import BrowseView from './BrowseView';
class App extends Component { 

    someUntestedMethodHere() {
        const testVar = 'This method is here just to make sure coverage works fine';
        console.log(testVar);        
    }

    render() {       
        return (
            <BrowseView />
        );
    }
}

export default App;

