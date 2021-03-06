import React from 'react';
import CartContainer from '../../containers/cart/CartContainer';
import PageLayout from '../../components/page-layout/PageLayout';

const CartPage = () => {
    return (
        <PageLayout title="Cart">
            <CartContainer />
        </PageLayout>
    )
};

export default CartPage;