import React from 'react';
import Reply from '../model/Reply';

export default function MessagesExpand(props: { details: { name: string; email: string; date: string; replySent: boolean; message: string; reply: string; }; }) {
    return (
        <div>
            <div className="row mx-3">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">Details</div>
                        <div className="card-body">
                            <dl className="row">
                                <dt className="col-sm-4">Name :</dt>
                                <dt className="col-sm-1">:</dt>
                                <dd className="col-sm-6">{props.details.name}</dd>
                                <dt className="col-sm-4">Email Address :</dt>
                                <dt className="col-sm-1">:</dt>
                                <dd className="col-sm-6">{props.details.email}</dd>
                                <dt className="col-sm-4">Contact Date & Time :</dt>
                                <dt className="col-sm-1">:</dt>
                                <dd className="col-sm-6">{props.details.date}</dd>
                            </dl>
                        </div>
                    </div>
                </div>
                <div className={props.details.replySent ? "col-md-6" : "col-md-12"}>
                    <div className="callout callout-info">
                        <h5>Message from {props.details.name}</h5>

                        <p>{props.details.message}</p>
                    </div>
                </div>
                {props.details.replySent ? (
                    <div className="col-md-6">
                        <div className="callout callout-success">
                            <h5>Reply from Admin</h5>

                            <p>{props.details.reply}</p>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="col-md-12">
                            <Reply name={props.details.name} email={props.details.email} />
                        </div>
                    </>
                )
                }
            </div>
        </div>
    );
}
