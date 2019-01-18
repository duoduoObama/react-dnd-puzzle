import React, { Component } from 'react';
import { DropTarget ,DataSource} from 'react-dnd';

const spec = {
    drop(props, monitor, component) {
        // 获取正在拖放的数据
        const item = monitor.getItem();
        // 更新组件状态
        component.setState({
            item
        })

    }
}

function collect(connect, monitor) {
    return {
        isDragging: monitor.isDragging(),
        connectDragSource: connect.dragSource()
    }
}
 
class MyComponent2 extends Component {

    render() {
        // 可以访问 collect 中返回的 object
        const { isDragging, connectDragSource } = this.props;
        // 需要用 connect.dragSource()/connect.dropTarget() 封装自己的组件
        return connectDragSource(
            <div>123</div>
        )
    }
}
export default DropTarget(`item`, spec, collect)(MyComponent2);