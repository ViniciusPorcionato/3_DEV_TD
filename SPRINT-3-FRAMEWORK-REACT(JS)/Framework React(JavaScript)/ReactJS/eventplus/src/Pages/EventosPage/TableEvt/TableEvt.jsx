import React from "react";
import editPen from "../../../Assets/images/edit-pen.svg";
import trashDelete from "../../../Assets/images/trash-delete.svg";
import {dateFormatDbToView} from '../../../Utils/stringFunction';

import "./TableEvt.css";

const TableTp = ({ dados, fnUpdate, fnDelete }) => {
    return (
    <table className="table-data">
        <thead className="table-data__head">
        <tr className="table-data__head-row">
            <th className="table-data__head-title table-data__head-title--big">
            Título
            </th>
            <th className="table-data__head-title table-data__head-title--big">
            Descrição
            </th>
            <th className="table-data__head-title table-data__head-title--big">
            Tipo Evento
            </th>
            <th className="table-data__head-title table-data__head-title--big">
            Data Evento
            </th>
            <th className="table-data__head-title table-data__head-title--little">
            Editar
            </th>
            <th className="table-data__head-title table-data__head-title--little">
            Deletar
            </th>
        </tr>
        </thead>

        <tbody>
        {dados.map((e) => {
            return (
            <tr className="table-data__head-row">
                <td className="table-data__data table-data__data--big">
                {e.nomeEvento}
                </td>
                <td className="table-data__data table-data__data--big">
                {e.descricao}
                </td>
                <td className="table-data__data table-data__data--big">
                {e.tiposEvento.titulo}
                </td>
                <td className="table-data__data table-data__data--big">
                {dateFormatDbToView(e.dataEvento)}
                </td>
                
                <td className="table-data__data table-data__data--little">
                <img
                    className="table-data__icon"
                    src={editPen}
                    alt=""
                    onClick={() => {
                    fnUpdate(e.idEvento);
                    }}
                />
                </td>

                <td className="table-data__data table-data__data--little">
                <img
                    className="table-data__icon"
                    src={trashDelete}
                    alt=""
                    onClick={() => {
                    fnDelete(e.idEvento);
                    }}
                />
                </td>
            </tr>
            );
        })}
        </tbody>
    </table>
    );
};

export default TableTp;
