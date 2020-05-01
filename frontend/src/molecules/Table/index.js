import React from 'react';
import {Thead} from '../../atoms/thead';
import {Tbody} from '../../atoms/tbody';


export const Table = () => {
    return (
        <table className="table table-head-fixed table-bordered">
            <Thead/>
            <Tbody/>
        </table>
    );
}