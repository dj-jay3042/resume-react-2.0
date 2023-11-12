import React from 'react'

export default function Skill(props: {
    title: string; className: string; progress: string | number 
}) {
    return (
        <div>
            <table className='w-100'>
                <tr>
                    <td className='w-25'>{props.title}</td>
                    <td className='w-75'>
                        <div className="progress">
                            <div className={"progress-bar bg-" + props.className} role="progressbar" style={{ width: props.progress + "%" }}>{props.progress}%
                            </div>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    )
}
