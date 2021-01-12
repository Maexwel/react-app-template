import React from 'react';
import { SEO } from './SEO';

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
            {/** Children injection */}
            {children}
        </div>
    );
};