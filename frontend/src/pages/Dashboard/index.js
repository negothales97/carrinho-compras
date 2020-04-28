import React, { Component } from 'react';
import Header from '../../includes/Header'
import Sidebar from '../../includes/Sidebar'
import Footer from '../../includes/Footer'

const SmallBox = props => {
    const boxes = props.boxes.map((box, index) => {
    const boxColor = `small-box bg-${box.color}`;
        
        return(
            <div className="col-lg-3 col-6" key={index}>
                <div className={boxColor} >
                    <div className="inner">
                        <h3>65</h3>
    
                        <p>Unique Visitors</p>
                    </div>
                    <div className="icon">
                        <i className="ion ion-pie-graph"></i>
                    </div>
                    <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
                </div>
            </div>
        );
    });
    return (
        <div className="row">

        {boxes}
        </div>
    );
        
}
class Dashboard extends Component{
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
                                        <h1 className="m-0 text-dark">Dashboard</h1>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <section className="content">
                            <div className="container-fluid">
                                    <SmallBox boxes={boxes} />
                            </div>
                        </section>
                    </div>

                <Footer/>
            </div>
        );
    };
} 

export default Dashboard;