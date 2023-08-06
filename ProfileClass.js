import React from 'react';

class ProfileClass extends React.Component{
     constructor(props) {
        super(props);
        this.state={
            count:0,
            fname:''
        }
    };
    render(){
        return (
            <><h1>This is Profile Class</h1>
             <h3>Name:{this.props.name}</h3>
            <p>Count:- {this.state.count}</p>
           <p>fname:- {this.state.fname}</p> 
            <button onClick={()=>{
                this.setState({
                count:this.state.count+1,
                fname:"hii"

                }
                    
                )
            }}>count</button>
            </>
        )
    }
};
export default ProfileClass;