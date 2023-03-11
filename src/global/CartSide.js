import React from 'react';

const CartSide = ({ cartOpen, toggleDrawer }) => {

    const drawerStyle = {
        position: 'fixed',
        top: 0,
        right: cartOpen ? 0 : '-300px',
        width: '300px',
        height: '100%',
        background: 'white',
        transition: 'right 0.3s ease-in-out',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
    };

    return (
        <div
            className="absolute top-0 right-0 z-40 h-full pt-[64px] "
            style={drawerStyle}>
            <div className='bg-gray-500 h-full'>
                <p className="p-4 text-lg text-gray-100 font-medium text-center">Please add some Items</p>
                <button
                    onClick={toggleDrawer}
                    className='btn btn-sm btn-circle absolute top-20 left-2 text-gray-100'
                >X</button>
            </div>
        </div>
    );
};

export default CartSide;