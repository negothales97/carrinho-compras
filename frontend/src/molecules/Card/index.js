import React from 'react';
import { Table } from '../Table'
import { Link } from 'react-router-dom';

export const Card = () => {
    return (
        <div className="card">
            <div className="card-header">
                <h3 className="card-title">Lista de produtos</h3>
                <div className="card-tools">
                    <Link to="/produtos/create">
                        <button className="btn btn-success">
                            <i className="fa fa-plus" aria-hidden="true"></i>
                        </button>
                    </Link>
                </div>
            </div>
            <div className="card-body table-responsive p-3">
                <Table />
            </div>
        </div>
    );
}