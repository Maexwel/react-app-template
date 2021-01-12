import { createStyles, makeStyles } from '@material-ui/core';
import React from 'react';
import { NTSS_BG } from '../../static/images';

// Style def
const useStyles = makeStyles((theme) =>
    createStyles({
        image: {
            width: 500,
            height: "100%",
        },
    }),
);

/**
 * Home Page of the application.
 */
export const Home = () => {
    // Variables
    const classes = useStyles();

    return (
        <div>
            NTSS App template
            <img
                alt="alttxt"
                className={classes.image}
                src={NTSS_BG} />
        </div>
    );
};