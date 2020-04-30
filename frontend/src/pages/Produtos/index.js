import React, { Component } from 'react';
import Header from '../../includes/Header'
import Sidebar from '../../includes/Sidebar'
import Table from '../Table';

class Produtos extends Component{
    render() {
        const boxes = [
            {
                color: "danger"
            },
            {
                color: "warning"
            },
            {
                color: "info"
            },
            {
                color: "success"
            },
        ];
        return(
            <div>
                <Header/>
                <Sidebar/>
                <div className="content-wrapper">
                        <div className="content-header">
                            <div className="container-fluid">
                                <div className="row mb-2">
                                    <div className="col-sm-6">
                                        <h1 className="m-0 text-dark">Produtos</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Table/>
                    </div>
            </div>
        );
    };
} 

export default Produtos;