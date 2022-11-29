// import Img1 from '../assets/1st.jpg'
// import classes from './Welcome.css'
import { Route } from 'react-router-dom'

const Welcome = () => {
    return (
        <>
        <h1>This is Welcome Page</h1>
        <Route path="/welcome/new-user">
            <p>Welcome New User!</p>

        </Route>
       
        </>
    )
}
export default Welcome;