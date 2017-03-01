import React from 'react'
import { Table, Button, Icon } from 'semantic-ui-react'
import moment from 'moment';

class OrderList extends React.Component {

    componentWillMount() {
        this.props.loadOrders();
    }

    drawTable(data) {

        function handleDisalbed(dueDate) {
            let darr = dueDate.split("-");
            let dobj = new Date(parseInt(darr[2]),parseInt(darr[1])-1,parseInt(darr[0]));
            let daysTillDL = moment().diff(dobj, 'days');
            return daysTillDL > -3 ? true : false;
        }

    let row;
    if(!data) return <Table.Cell>No data in DB</Table.Cell>;

    row = data.map(row => {

        return (
            <Table.Row>
                <Table.Cell>{row.orderN}</Table.Cell>
                <Table.Cell>{row.managerName}</Table.Cell>
                <Table.Cell>{row.salesType}</Table.Cell>
                <Table.Cell>{row.customer}</Table.Cell>
                <Table.Cell>{row.provider}</Table.Cell>
                <Table.Cell>{row.dueDate}</Table.Cell>
                <Table.Cell>
                    <Button.Group>
                        <Button primary disabled={handleDisalbed(row.dueDate)}>
                            <Icon name='write' />
                        </Button>
                        <Button.Or />
                        <Button color='red' onClick={() => this.props.deleteOrder(row._id)}>
                            <Icon name='trash' />
                        </Button>
                    </Button.Group>
                </Table.Cell>
            </Table.Row>
        );
    });

    return row;
}

    render() {
        let orders = this.props.orders.orders;

        return(
            <div>
                <Table celled selectable>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Order #</Table.HeaderCell>
                            <Table.HeaderCell>Manager Name</Table.HeaderCell>
                            <Table.HeaderCell>Sales type</Table.HeaderCell>
                            <Table.HeaderCell>Customer</Table.HeaderCell>
                            <Table.HeaderCell>Provider</Table.HeaderCell>
                            <Table.HeaderCell>Due date</Table.HeaderCell>
                            <Table.HeaderCell>Actions</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.drawTable(orders)}
                    </Table.Body>
                </Table>
            </div>
        )
    }
}

export default OrderList