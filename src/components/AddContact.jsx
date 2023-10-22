import React from 'react'

export class AddContact extends React.Component {
    state = {
        name:'',
        phone:'',
    }

    handleChangeInput = ({target}) =>{
        // if(e.target.name === 'name'){
        //     this.setState({name:e.target.value})
        // }else {
        //     this.setState({phone:e.target.value})
        // }
        const {name, value} = target
        this.setState({ [name]: value})
    }

    handleOnClick = () => {
        this.props.addContact(this.state);
    }

  render (){
    const {name, phone} = this.state;
   return (<div>
        <input  value={name} onChange={this.handleChangeInput} type="text" name="name" required placeholder='New name'/>
        <input  value={phone} onChange={this.handleChangeInput} type="tel" name="phone" required  placeholder='Phone number'/>

        <button onClick={this.handleOnClick}>Add new contact</button>
    </div>)}
}
