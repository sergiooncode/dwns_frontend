import React from 'react'
import Card from './Card'
import styles from './CompanyGrid.css'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';

const CompanyGrid = props => {
    const {
        allCompanies,
        classes,
        title,
    } = props

    return (
        <div className={styles.companyGrid}>
            <Typography variant="headline" component="h2">
                {title}
            </Typography>
            <div className={styles.gridWrapper}>
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        <Grid container justify="flex-start" spacing={40}>
                            {allCompanies.map(company => (
                            <Grid item key={company.id}>
                                <Card company={ company } />
                            </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default CompanyGrid
