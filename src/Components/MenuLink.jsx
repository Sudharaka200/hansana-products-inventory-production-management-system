import React from 'react'

function MenuLink(props) {
    return (
        <div>
            <li>
                <a className="text-gray-500 transition hover:text-gray-500/75" href={props.url}>{props.name}</a>
            </li>
        </div>
    )
}

export default MenuLink
