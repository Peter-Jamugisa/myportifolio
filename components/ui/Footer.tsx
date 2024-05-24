import React from 'react'

function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-4 text-center sm:p-6">
            <div className="container mx-auto pt-10">
                <p className="text-sm sm:text-base">
                    © 2024 by Your Name. All rights reserved.
                </p>
                <div className="flex justify-center space-x-4 mt-2">
                    <a href="https://github.com" className="hover:text-gray-300">GitHub</a>
                    <a href="https://linkedin.com" className="hover:text-gray-300">LinkedIn</a>
                    <a href="https://twitter.com" className="hover:text-gray-300">Twitter</a>
                </div>
            </div>
        </footer>

    )
}

export default Footer