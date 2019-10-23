import React from 'react'
import {connect } from 'react-redux'
import { addMessage} from '../../actions/Message'
class Form extends React.Component{
        state = {
            name:'',
            email:'',
            message:''
        }
    
    onChange = e => this.setState({[e.target.name]:e.target.value})
    onSubmit = e => {
        e.preventDefault()
        console.log('submitted')
        const  {name,email,message} = this.state
        const messages = {
            name,
            email,
            message
        }
        this.props.addMessage(messages)
        this.setState({name:'',email:'',message:''})
    }
    render(){
        const {name,message,email} = this.state
        return (
            <section>
                <div className="forms">
                    <form onSubmit={this.onSubmit}>
                        <div>
                            <label>Name</label>
                            <input type="text" name="name" required value={name} className="text-input" placeholder="name" onChange={this.onChange} />
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email" required  className="text-input" name="email" value={email} placeholder="email" onChange={this.onChange} />
                        </div>
                        <div>
                            <label>Message</label>
                            <textarea type="text" required className="text-input" name="message" value={message} placeholder="message" onChange={this.onChange} />
                        </div>
                        <input type="submit" value="Message Us" className="btn" />
                    </form>
                </div>
            </section>
        )
    }
}
export default connect(null,{addMessage})(Form);