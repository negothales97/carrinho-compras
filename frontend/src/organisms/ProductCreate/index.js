import React, { Component } from 'react';
import Header from '../../molecules/Header'
import Sidebar from '../../molecules/Sidebar'
import { Card } from '../../molecules/Card';

class ProductCreate extends Component {
    render() {

        return (
            <div>
                <Header />
                <Sidebar />
                <div className="content-wrapper">
                    <section className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1>Adicionar Produto</h1>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="content">
                        <div className="row">
                            <div className="col-md-6">

                                <div className="card card-outline card-info">
                                    <div className="card-header">
                                        <h3 className="card-title">Dados</h3>
                                    </div>
                                    <form action="" method="POST">
                                        <div className="card-body pad">
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <div className="form-group">
                                                        <label>Código de Barras</label>
                                                        <input type="text"
                                                            className="form-control" id="name"
                                                            name="name" required />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <div className="form-group">
                                                        <label>Nome</label>
                                                        <input type="text"
                                                            className="form-control" id="name"
                                                            name="name" required />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <div className="form-group">
                                                        <label>Unidade de medida</label>
                                                        <select className="form-control">
                                                            <option>Caixa</option>
                                                            <option>Fardo</option>
                                                            <option>Unidade</option>
                                                            <option>Pacote</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <button type="submit" className="btn btn-primary">Salvar</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    };
}

export default ProductCreate;