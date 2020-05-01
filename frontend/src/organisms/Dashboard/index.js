import React, { Component } from 'react';
import Header from '../../molecules/Header';
import Sidebar from '../../molecules/Sidebar';
import { SmallBoxRed, SmallBoxYellow, SmallBoxBlue, SmallBoxGreen } from '../../atoms/smallbox';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Header />
                <Sidebar />
                <div className="content-wrapper">
                    <div className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1 className="m-0 text-dark">Dashboard</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section className="content">
                        <div className="container-fluid">
                            <div className="row">

                                <SmallBoxRed />
                                <SmallBoxYellow />
                                <SmallBoxBlue />
                                <SmallBoxGreen />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    };
}

export default Dashboard;