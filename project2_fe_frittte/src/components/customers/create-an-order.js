import axios from "axios";
import { useRef, useContext } from "react";
import { userContext } from "../../App";

export default function UpdateOrder() {

    const [user, setUser] = useContext(userContext);
    const [num, setNum] = useState(0);
    
    
    const input1 = useRef();
    const input2 = useRef();
    const input3 = useRef();
    
    

    async function updatedOrder() {
        
        const current = new Date();
        const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
        
        const item = {
            
            id: num,
            orderDate: input1.current.value,
            itemName: input2.current.value,
            comment: input3.current.value,
            customerUsername: user.username
        };

        try {

            const response = await axios.post("http://localhost:9006/order", item );
            
            const response = await axios.put("http://localhost:9006/updateOrder", item);

            console.log(response.data);
            
            
        } catch (error) {
            console.error(error.response.data);
            alert(error.response.data);
        }
    }
    
    function randomNumberInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    const click = () => {setNum(randomNumberInRange(1,100000))}

    return (
        <>

            <h4>Order an item</h4>
            
            <input placeholder="Order Date" ref={input1}></input>
            <input placeholder="Item name" ref={input2}></input>
            <input placeholder="Comment" ref={input3}></input>
            <Button variant="contained" onClick={() => {click(); createOrder()}}>Add comment to order it right now</Button>
 
            <h4>Update your order here please</h4>
            <input placeholder="ID" ref={input1}></input>
            <input placeholder="Order Date" ref={input2}></input>
            <input placeholder="Item name" ref={input3}></input>
            <input placeholder="Comment" ref={input4}></input>
            <button onClick={updatedOrder}>Update Order</button>

        </>
    )
}
