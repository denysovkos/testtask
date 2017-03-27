import React from 'react'
import { Button, Form, Input, Select } from 'semantic-ui-react'
import DatePicker from'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'

const options = [
    { key: 'wholesale', text: 'Wholesale', value: 'wholesale' },
    { key: 'retail', text: 'Retail', value: 'retail' }
]

class AddNewOrder extends React.Component {

  state = {
    managerName: '',
    customer: '',
    provider: '',
    salesType: '',
    dueDate: moment()
  };

  generateOrderNumber() {
    let currentMonth = new Date().getMonth() + 1
    let number

    return fetch(`/docs/${currentMonth}`, {
      mode: 'cors',
      headers: new Headers({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
      })
    })
            .then(response => response.json())
            .then(data => {
              let newNumber = data.length + 1
              number = this.state.salesType.charAt(0) + '-' + this.state.dueDate.format('YYMMDD') + newNumber
              return number
            })
            .catch(err => console.log(err))
  }

  handleChangeName = (event) => this.setState({managerName: event.target.value});
  handleChangeCustomer = (event) => this.setState({customer: event.target.value});
  handleChangeProvider = (event) => this.setState({provider: event.target.value});
  handleChangeDueDate = (date) => this.setState({dueDate: date});
  handleChangeSalesType = (event) => {
    let getContext = (data) => {
      if (data === 'Wholesale') {
        return 'wholesale'
      } else {
        return 'retail'
      }
    }

    this.setState({salesType: getContext(event.target.textContent)})};

  handleSubmit = (event) => {
    event.preventDefault()

    return this.generateOrderNumber()
            .then(newNumber => {
              let formData = {
                orderN: newNumber,
                managerName: this.state.managerName,
                customer: this.state.customer,
                provider: this.state.provider,
                salesType: this.state.salesType,
                dueDate: this.state.dueDate.format('DD-MM-YYYY')
              }

              return formData
            })
            .then(formData => {
              return this.props.addOrder(formData)
                    .then(() => window.location.replace('/orders'))
                    .catch(err => console.warn(err))
            })

  };

  render() {
    const { value } = this.state

       // console.log(this.props);

    return (
            <Form>
                <Form.Group widths='equal'>
                    <Form.Field required control={Input} label='Manager name' placeholder='Manager name' onChange={this.handleChangeName}/>
                    <Form.Field required control={Input} label='Customer' placeholder='Customer' onChange={this.handleChangeCustomer}/>
                    <Form.Field required control={Input} label='Provider' placeholder='Provider' onChange={this.handleChangeProvider}/>
                    <Form.Field required control={DatePicker} label='Due date' placeholder='Due date' selected={this.state.dueDate} onChange={this.handleChangeDueDate}/>
                    <Form.Field required control={Select} label='Seles type' options={options} placeholder='Sales type' onChange={this.handleChangeSalesType}/>
                </Form.Group>
                <Form.Field type="submit" control={Button} onClick={this.handleSubmit.bind(this)}>Save</Form.Field>
            </Form>
    )
  }
}

export default AddNewOrder