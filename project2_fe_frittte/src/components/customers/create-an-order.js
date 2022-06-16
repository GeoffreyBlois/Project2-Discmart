import axios from "axios";
import { useRef, useContext } from "react";
import { userContext } from "../../App";

export default function UpdateOrder() {

    const [user, setUser] = useContext(userContext);
    
    const input1 = useRef();
    const input2 = useRef();
    const input3 = useRef();
    const input4 = useRef();
    

    async function updatedOrder() {
        const item = {
            
            id: input1.current.value,
            orderDate: input2.current.value,
            itemName: input3.current.value,
            comment: input4.current.value,
            customerUsername: user.username
        };

        try {
            const response = await axios.put("http://localhost:9006/updateOrder", item, {withCredentials: true});
            console.log(response.data);
        } catch (error) {
            console.error(error.response.data);
            alert(error.response.data);
        }
    }

    return (
        <>
            <h4>Update your order here please</h4>
            <input placeholder="ID" ref={input1}></input>
            <input placeholder="Order Date" ref={input2}></input>
            <input placeholder="Item name" ref={input3}></input>
            <input placeholder="Comment" ref={input4}></input>
            <button onClick={updatedOrder}>Update Order</button>
        </>
    )
}