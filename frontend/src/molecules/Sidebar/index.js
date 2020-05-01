import React from 'react';
import {Link} from 'react-router-dom';

export default function Sidebar(){
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <a href="index3.html" className="brand-link">
                <span className="brand-text font-weight-light">Carrinho de Compras</span>
            </a>
    
            <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    
                <div className="info">
                    <a href="#teste" className="d-block">Thales Serra</a>
                </div>
            </div>
    
            <nav className="mt-2">
                <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu">
                    <li className="nav-item">
                        <Link className='nav-link' to='/dashboard'>
                            <i className="nav-icon fas fa-th"></i>
                            <p>
                                Dashboard
                            </p>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to='/produtos'>
                            <i className="nav-icon fas fa-th"></i>
                            <p>
                                Produtos
                            </p>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    </aside>
    );
}   