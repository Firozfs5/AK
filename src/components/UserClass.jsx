import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props)

        this.state={
            userInfo:{
                name:"Dummy",
                location:"Default"
            }

        }

                console.log("child constructor called");

    }
   
    async componentDidMount(){
        // console.log("child component mounted");
        const Data=await fetch('https://api.github.com/users/Firozfs5')
        const json=await Data.json();

        console.log(json);

        this.setState({
            userInfo:json
        })
        
        
    }


    render(){
        console.log("child render called");

        let {name,location,avatar_url}=this.state.userInfo;
        return (
        <div className="user-card">
            <img src={avatar_url} style={{width:"300px"}} alt="" />
            <h2>Name:{name}</h2>
            <h2>Location:{location}</h2>
        </div>            
        )
    }
}
export default UserClass;