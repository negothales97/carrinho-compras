import React, { Component } from 'react';
import Header from '../../molecules/Header'
import Sidebar from '../../molecules/Sidebar'
import {Card} from '../../molecules/Card';

class Produtos extends Component{
    render() {
        
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
                        <Card/>
                    </div>
            </div>
        );
    };
} 

export default Produtos;