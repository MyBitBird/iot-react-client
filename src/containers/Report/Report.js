import React , {Component} from 'react'
import {Grid, Button} from '@material-ui/core'
import ReportItem from '../../components/Reports/ReportItem/ReportItem';
import classes from './Report.css'
import {connect} from 'react-redux'
import * as serviceActions from '../../store/actions/service'
import SimpleReport from '../../components/Reports/SimpleReport/SimpleReport'

class Report extends Component{

    componentDidMount()
    {
        this.props.loadServices();
    }
    
    render()
    {
        return(
            <div className={classes.container} >
                <Grid container spacing={32}>
                    <Grid item md={3} xs={12}>
                        <SimpleReport title='Simple Report' color='#00e5ff' name='SIMPLE_REPORT' />
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <ReportItem disable title='Log Report' color='#ff3d00' name='LOG_REPORT' />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>
{
    return{
        loadServices : () => dispatch(serviceActions.getAll())
    }
}

const mapStateToProps = state => ({...state.report})

export default connect(mapStateToProps,mapDispatchToProps)(Report);