import React from 'react';
import {Link} from 'react-router-dom';

export default function Sidebar(){
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <a href="index3.html" className="brand-link">
                <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3"
                />
                <span className="brand-text font-weight-light">AdminLTE 3</span>
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
                    <li className="nav-item has-treeview menu-open">
                        <a href="#teste" className="nav-link active">
                            <i className="nav-icon fas fa-tachometer-alt"></i>
                            <p>
                                Starter Pages
                                <i className="right fas fa-angle-left"></i>
                            </p>
                        </a>
                        <ul className="nav nav-treeview">
                            <li className="nav-item">
                                <a href="#teste" className="nav-link active">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Active Page</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#teste" className="nav-link">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Inactive Page</p>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="#teste" className="nav-link">
                            <i className="nav-icon fas fa-th"></i>
                            <p>
                                Simple Link
                                <span className="right badge badge-danger">New</span>
                            </p>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </aside>
    );
}   