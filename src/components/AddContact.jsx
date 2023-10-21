import React from 'react'

export class AddContact extends React.Component {
    state = {
        name:'',
        phone:'',
    }

    handleChangeInput = (e) =>{
        if(e.target.name === 'name'){
            this.setState({name:e.target.value})
        }else {
            this.setState({phone:e.target.value})
        }
    }

  render (){
    const {name, phone} = this.state;
   return (<div>
        <input  value={name} onChange={this.handleChangeInput} type="text" name="name" required placeholder='New name'/>
        <input  value={phone} onChange={this.handleChangeInput} type="tel" name="number" required  placeholder='Phone number'/>
    </div>)}
}
