import User from "./User";
import UserClass from "./UserClass"
import { Component } from "react";
class About extends Component{
    constructor(props){
        super(props)
        console.log("parent constructor called");
        
    }

    componentDidMount(){
        console.log("parent component mounted");
        
    }


    render(){
                console.log("parent render called");
    return (
        
        <div>
            <h1>About Page</h1>
            <h2>This is an About Page</h2>
            <UserClass name={'Firoz class'} location={"Delhi"}/>
        </div>
    )

    }
}





// const About=()=>{

//     return (
//         <div>
//             <h1>About Page</h1>
//             <h2>This is an About Page</h2>
//             <UserClass name={'Firoz class'} location={"Delhi"}/>
//         </div>
//     )
// }

export default About;