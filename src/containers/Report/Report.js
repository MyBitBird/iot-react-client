import React , {Component} from 'react'
import {Grid} from '@material-ui/core'
import ReportItem from '../../components/Reports/ReportItem/ReportItem';
import classes from './Report.css'
import {connect} from 'react-redux'
import * as serviceActions from '../../store/actions/service'

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
                    <Grid item xs={3}>
                        <ReportItem title='Simple Report' color='#00e5ff' name='SIMPLE_REPORT' />
                    </Grid>
                    <Grid item xs={3}>
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

export default connect(null,mapDispatchToProps)(Report);