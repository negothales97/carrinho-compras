import React from 'react';
import {Table} from '../Table'

export const Card = () => {
    return (
        <div className="card">
            <div className="card-header">
                <h3 className="card-title">Lista de produtos</h3>
            </div>
            <div className="card-body table-responsive p-3">
                <Table/>
            </div>
        </div>
    );
}