import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faViruses, faNotesMedical, faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';
import styles from './Cards.module.css';

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => { 

    if(!confirmed){
        return 'Loading..';
    } 

    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center" >
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography className={styles.iconStyle}><FontAwesomeIcon icon={faViruses} size='3x'/></Typography>
                        <Typography className={styles.fontStyle} gutterBottom>Infected</Typography>
                        <Typography variant="h5" className={styles.fontStyle}>
                            <CountUp start={0} end={confirmed.value} duration={1.5} separator=","/>
                        </Typography>
                        <Typography className={styles.fontStyle}>{new Date(lastUpdate).toDateString()}</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography className={styles.iconStyle}><FontAwesomeIcon icon={faNotesMedical} size='3x'/></Typography>
                        <Typography className={styles.fontStyle} gutterBottom>Recovered</Typography>
                        <Typography variant="h5" className={styles.fontStyle}><CountUp start={0} end={recovered.value} duration={1.5} separator=","/></Typography>
                        <Typography className={styles.fontStyle}>{new Date(lastUpdate).toDateString()}</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography className={styles.iconStyle}><FontAwesomeIcon icon={faSkullCrossbones} size='3x'/></Typography>
                        <Typography className={styles.fontStyle} gutterBottom>Deaths</Typography>
                        <Typography variant="h5" className={styles.fontStyle}><CountUp start={0} end={deaths.value} duration={1.5} separator=","/></Typography>
                        <Typography className={styles.fontStyle}>{new Date(lastUpdate).toDateString()}</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;