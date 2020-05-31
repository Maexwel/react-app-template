import React from 'react';
import { Layout } from '../components/layout/Layout';

// Type def
interface IRouteProps {
    component: any;
    path: string;
    exact?: boolean;
}
/**
 * Base route definition.
 */
export const Route = (props: IRouteProps) => {
    const { component: Component } = props;

    return (
        <Layout>
            <Component {...props} />
        </Layout>
    );
};