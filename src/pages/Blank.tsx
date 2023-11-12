/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { ContentHeader } from '@components';
import DataTable from 'react-data-table-component';
import { ThreeDots } from 'react-loader-spinner'

const ExpandedComponent = ({ data }) => <>
  <br />

  <div className="row">
    <div className="col-md-12">
      <div className="card">
        <div className="card-header">Details</div>
        <div className="card-body">
          <dl className="row">
            <dt className="col-sm-4">Name :</dt>
            <dt className="col-sm-1">:</dt>
            <dd className="col-sm-6">{data.name}</dd>
            <dt className="col-sm-4">Email Address :</dt>
            <dt className="col-sm-1">:</dt>
            <dd className="col-sm-6">{data.email}</dd>
            <dt className="col-sm-4">Contact Date & Time :</dt>
            <dt className="col-sm-1">:</dt>
            <dd className="col-sm-6">{data.date}</dd>
          </dl>
        </div>
      </div>
    </div>
    <div className={data.replySent ? "col-md-6" : "col-md-12"}>
      <div className="callout callout-info">
        <h5>Message from {data.name}</h5>

        <p>{data.message}</p>
      </div>
    </div>
    {data.replySent ? (
      <div className="col-md-6">
        <div className="callout callout-success">
          <h5>Reply from Admin</h5>

          <p>{data.reply}</p>
        </div>
      </div>
    ) : null}
  </div>


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
    cell: (row) => <span className={row.mailSent ? "right badge badge-success" : "right badge badge-danger"}> {(row.mailSent ? 'Sent' : 'Not Sent')} </span>,
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

const data = [
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
]

const pending = false;

const Blank = () => {
  return (
    <div>
      <ContentHeader title="Transections" />
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
            // wrapperClassName=""
            visible={true}
          />}
          expandableRows
          expandableRowsComponent={ExpandedComponent}
          responsive={true}
          striped={true}
          pagination
          fixedHeader
          selectableRows
        // actions={actionsMemo}
        />
      </section>
    </div>
  );
};

export default Blank;
