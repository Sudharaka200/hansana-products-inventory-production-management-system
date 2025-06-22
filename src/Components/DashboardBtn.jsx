import React from 'react'
import { Link } from 'react-router-dom';

function DashboardBtn({ btns }) {
    return (
        <div>
            <nav className="space-y-2">
                {btns.map((btn, index) => (
                    <Link
                        key={index}
                        to={btn.url}>
                        <button className="mt-2 w-full text-left px-4 py-2 bg-gray-800 rounded hover:bg-gray-700">{btn.name}</button>
                    </Link>

                ))}
            </nav>
        </div>
    )
}

export default DashboardBtn
