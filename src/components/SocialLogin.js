import React from 'react';

const SocialLogin = () => {
    return (
        <div className="p-5">
            <div className="grid grid-cols-3 gap-1">
                <button type="button" className="transition duration-200 border border-gray-300 bg-gray-300 text-gray-700 w-full py-2.5 rounded-lg text-md font-semibold shadow-sm hover:shadow-md text-center inline-block">Twitter</button>
                <button type="button" className="transition duration-200 border border-gray-300 bg-gray-300 text-gray-700 w-full py-2.5 rounded-lg text-md font-semibold shadow-sm hover:shadow-md text-center inline-block">Google</button>
                <button type="button" className="transition duration-200 border border-gray-300 bg-gray-300 text-gray-700 w-full py-2.5 rounded-lg text-md font-semibold shadow-sm hover:shadow-md text-center inline-block">Facebook</button>
            </div>
        </div>
    );
};

export default SocialLogin;