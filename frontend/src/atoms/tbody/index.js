import React from 'react';


export const Tbody = () => {
    return (
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
    );
}