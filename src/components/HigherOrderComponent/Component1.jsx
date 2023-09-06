import { UpdatedComponent } from "./UpdatedComponent"
const Component1=(props)=>{
    return(
        <div>
            <button onClick={props.handleIncrement}>Click Increment</button>
            <h2>{props.count}</h2>
        </div>
    )
}

export default UpdatedComponent(Component1)