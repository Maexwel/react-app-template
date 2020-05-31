import React from 'react';
import { SEO } from './SEO';
import { Header } from './Header';
import { Footer } from './Footer';

// Type def
interface ILayoutProps {
    children?: any;
}
/**
 * Layout of a page of the application.
 * Layout contains header and footer definition.
 * @param param0 
 */
export const Layout = ({ children }: ILayoutProps) => {
    return (
        <div>
            {/** Base SEO Referencement */}
            <SEO />
            {/** App Header */}
            <Header />
            {/** Children injection */}
            {children}
            {/** App Footer */}
            <Footer />
        </div>
    );
};