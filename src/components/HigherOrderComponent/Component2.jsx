import { UpdatedComponent } from "./UpdatedComponent"

const Component2 = (props) => {
    return (
        <div>
            <button onMouseOver={props.handleIncrement}>Hover Increment</button>
            <h2>{props.count}</h2>
        </div>
    )
}

export default UpdatedComponent(Component2)