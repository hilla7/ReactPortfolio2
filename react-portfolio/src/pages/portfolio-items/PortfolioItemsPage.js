import React from 'react';
import PortfolioContainer from '../../containers/portfolio/PortfolioContainer';
import PageLayout from '../../components/page-layout/PageLayout';

const PortfolioItemsPage = () => (
    <PageLayout title="Portfolio List">
        <PortfolioContainer />
    </PageLayout>
);

export default PortfolioItemsPage;