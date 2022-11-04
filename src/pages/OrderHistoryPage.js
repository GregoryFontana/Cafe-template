import { checkToken} from "../utilities/users-service"


const OrderHistoryPage = () => {
    const handleCheckToken = async () => {
        //alert('clicked')
        const expDate = await checkToken()
        console.log(expDate);
    }
    return(
        <div>
            <h1>OrderHistory Page Page</h1>
            <button onClick={handleCheckToken}>Check When My Login Expires</button>
        </div>
    )
}
export default OrderHistoryPage