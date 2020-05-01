import React, { Component } from 'react';
class Table extends Component {
    render() {

        return (
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <Card/>
                        </div>
                    </div>
                </div>
            </section>
        );
    };
}

export default Table;