import React from 'react';
import { Helmet } from 'react-helmet';

/**
 * Component used to define Application SEO.
 * Thanks to the greate Helmet library. https://www.npmjs.com/package/react-helmet
 */
export const SEO = () => (
    <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Maexwel Portfolio</title>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
            <meta name="description" content="Personnal portfolio." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>
    </div>
);