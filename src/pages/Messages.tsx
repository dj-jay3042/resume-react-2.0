/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { ContentHeader } from '@components';
import DataTable from 'react-data-table-component';
import { ThreeDots } from 'react-loader-spinner'
import MessagesExpand from '@app/components/tables-expands/Messages';

const ExpandedComponent = ({ data }) => <>
    <br />
    <MessagesExpand details={data} />
</>;

const columns = [
    {
        name: 'Id',
        selector: row => row.id,
        sortable: true,
    },
    {
        name: 'Name',
        selector: row => row.name,
        sortable: true,
    },
    {
        name: 'Email',
        selector: row => row.email,
        sortable: true,
    },
    {
        name: 'Mail Status',
        cell: (row) => <span className={row.mailSent ? "right badge badge-info" : "right badge badge-warning"}> {(row.mailSent ? 'Sent' : 'Not Sent')} </span>,
        sortable: true,
    },
    {
        name: 'Reply Status',
        cell: (row) => <span className={row.replySent ? "right badge badge-success" : "right badge badge-danger"}> {(row.replySent ? 'Sent' : 'Not Sent')} </span>,
        sortable: true,
    },
    {
        name: 'Date & Time',
        selector: row => row.date,
        sortable: true,
    },
];


// let data = [
//     {
//         id: 1,
//         name: 'Jay Chauhan',
//         email: 'jay.chauhan3042@gmail.com',
//         mailSent: false,
//         replySent: true,
//         message: 'Hello, I am Jay Chauhan',
//         reply: 'Hello, I am Jay Chauhan',
//         date: '06/11/2023 13:00:00'
//     },
//     {
//         id: 2,
//         name: 'Jay Chauhan',
//         email: 'jay.chauhan3042@gmail.com',
//         mailSent: true,
//         replySent: false,
//         message: 'Hello, I am Jay Chauhan',
//         reply: 'Hello, I am Jay Chauhan',
//         date: '06/11/2023 13:00:00',
//     },
// ]

let pending = false;

const Messages = () => {

    const [data, setData] = useState([
        {
            id: 1,
            name: 'Jay Chauhan',
            email: 'jay.chauhan3042@gmail.com',
            mailSent: false,
            replySent: true,
            message: 'Hello, I am Jay Chauhan',
            reply: 'Hello, I am Jay Chauhan',
            date: '06/11/2023 13:00:00'
        },
        {
            id: 2,
            name: 'Jay Chauhan',
            email: 'jay.chauhan3042@gmail.com',
            mailSent: true,
            replySent: false,
            message: 'Hello, I am Jay Chauhan',
            reply: 'Hello, I am Jay Chauhan',
            date: '06/11/2023 13:00:00',
        },
    ]);


    useEffect(() => {

        const response = async () => {
            try {

                const response = await fetch("http://contact-jay.is-best.net/");
                const result = await response.json();
                console.log(result);
                // setData(result);

            } catch (error) {

            }
        }

        response();
    }, []);

    return (
        <div>
            <ContentHeader title="Messages" />
            <section className="content">
                <DataTable
                    columns={columns}
                    data={data}
                    progressPending={pending}
                    progressComponent={<ThreeDots
                        height="80"
                        width="80"
                        radius="9"
                        color="#080808"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        visible={true}
                    />}
                    expandableRows
                    expandableRowsComponent={ExpandedComponent}
                    responsive={true}
                    striped={true}
                    pagination
                    fixedHeader
                    selectableRows
                />
            </section>
        </div>
    );
};

export default Messages;
