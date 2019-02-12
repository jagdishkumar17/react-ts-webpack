import * as React from "react";
export class Clients extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    componentWillMount() {
        this.state = {
            clientData:
                [
                    {
                        "id": 2002,
                        "name": "Deepak Dhamija",
                        "email": "deepakdhamija@test.com",
                        "phone_number": "2111110"
                    },
                    {
                        "id": 2003,
                        "name": "Deepak Dhamija Test",
                        "email": "deepakdhamija@test.com",
                        "phone_number": "2111112"
                    },
                    {
                        "id": 2004,
                        "name": "Deepak Dhamija Test",
                        "email": "deepakdhamija@test.com",
                        "phone_number": "2111115"
                    }
                ]
        };
    }
    componentDidMount() {
        // let self = this;
        // fetch('/users', {
        //     method: 'GET'
        // }).then(function (response) {
        //     if (response.status >= 400) {
        //         throw new Error("Bad response from server");
        //     }
        //     return response.json();
        // }).then(function (data) {
        //     self.setState({ clientData: data });
        // }).catch(err => {
        //     console.log('caught it!', err);
        // })

    }
    render() {
        return (<div className="container">
            <div className="panel panel-default p50 uth-panel">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Client name</th>
                            <th>Client email</th>
                            <th>Phone number</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.clientData.map((i: any) =>
                            <tr key={i.id}>
                                <td>{i.name} </td>
                                <td>{i.email}</td>
                                <td>{i.phone_number}</td>
                                <td><a>Edit</a>|<a>Delete</a></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>);
    }
}

export default Clients;