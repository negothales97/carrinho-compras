import React, { Component } from 'react';

const TBody = props => {
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
class Table extends Component{
    render() {
        
        return(
            <section className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Lista de produtos</h3>
                            </div>
                            <div className="card-body table-responsive p-3">
                                <table className="table table-head-fixed table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Referência</th>
                                            <th>Nome</th>
                                            <th>Ações</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>123456</td>
                                            <td>Coca Cola</td>
                                            <td class="text-center align-middle">
                                                <div className="btn-group btn-group-sm">
                                                    <button title="Editar" className="btn btn-outline-info">
                                                        <i className="fa fa-edit" aria-hidden="true"></i>
                                                    </button>
                                                    <button title="Deletar" className="btn btn-outline-danger">
                                                        <i className="fa fa-trash" aria-hidden="true"></i>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            );
    };
} 

export default Table;