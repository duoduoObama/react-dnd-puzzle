import React, { Component } from 'react'
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

import Dustbin from './Dustbin';
import { Box } from './Box';

class App extends Component {



    render() {
        // console.log(TestComponent);
        return <div>
            <div>
                <Dustbin />
            </div>
            <div>
                <Box name='box1' />
            </div>
        </div>;
    }
}
export default DragDropContext(HTML5Backend)(App);