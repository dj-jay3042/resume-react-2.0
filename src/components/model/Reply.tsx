import React from 'react';

interface ReplyProps {
    name: string;
    email: string;
}

export default function Reply(props: ReplyProps) {
    return (
        <div>
            <div className="card card-success">
                <div className="card-header">
                    <h3 className="card-title">Reply To {props.name}</h3>
                </div>
                <form>
                    <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="emailAddress">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" value={props.email} readOnly />
                        </div>
                        <div className="form-group">
                            <label htmlFor="messageText">Message</label>
                            <textarea className="form-control" id="messageText" rows={3} placeholder=""></textarea>
                            <div className="input-group">
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputFile">Attachment</label>
                            <div className="input-group">
                                <div className="custom-file">
                                    <input type="file" className="custom-file-input" id="attachmentFile" />
                                    <label className="custom-file-label" htmlFor="attachmentFile">Choose file</label>
                                </div>
                                <div className="input-group-append">
                                    <span className="input-group-text">Upload</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <button type="button" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
