import * as reportActions from '../../../store/actions/report'
import * as serviceActions from '../../../store/actions/service'
import { connect } from 'react-redux'
import React from 'react'
import ReportItem from '../ReportItem/ReportItem'
import Aux from '../../../utils/Auxilary';
import { withRouter } from 'react-router-dom'

const SimpleReport = (props) => {

    console.log('simpleReport',props)
    const onFinish = () => {
        Promise.all(
            [reportActions.getData(props.selectedService, `from=${props.from}&to=${props.to}`),getColumns()]
            ).then(result => {
                const rows = []
                const serviceProperties = [...result[1].serviceProperties];

                /*
                It may sedbem confusing!
                imagine that you have a service with 10 columns.
                your device may send data for all of them or may be just for one or two.
                tour raw data its something like this:
                    {logDate: ----,
                    registerData:---,
                    serviceData: 
                        [
                            data: '-----',
                            code: '-----',
                            serviceProperty:{
                                id: '-----',
                                code: '-----',
                                title: '-----
                            }

                        ]
                    }

                so what we do here is convert this rows to columns and insert each data in its related column.
                */

                result[0].map((log, index) => {
                    const info = [index + 1, log.logDate, log.registerDate]
                    const dynamicColumns = [...serviceProperties].map(property => { const isExist = log.serviceData.find(data => data.serviceProperty.id === property.id); return isExist == undefined ? '--' : isExist.data })
                    rows.push(info.concat(dynamicColumns))
                })

                props.onSetResult(rows, ['#', 'Log Date', 'Register Date', ...serviceProperties.map(col => col.title)]);

                props.history.push(`ReportResult/${props.selectedService}`)
            })

    }

    const getColumns = () => {
        return new Promise(resolve => {
            props.getServiceInfo(props.selectedService).then(result => resolve(result))
        }
        )
    }

    return (
        <Aux>
            <ReportItem onFinish={onFinish} title='Simple Report' color='#00e5ff' name='SIMPLE_REPORT' />
        </Aux>
    )

}

const mapStateToProps = state => ({ ...state.report })

const mapDispatchToProps = dispatch => {
    return {
        onSetResult: (rows, columns) => dispatch(reportActions.setReportResult(rows, columns)),
        getServiceInfo: (id) => dispatch(serviceActions.getServiceDetailsById(id)),


    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SimpleReport));

