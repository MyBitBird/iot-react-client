import React, { Component } from "react";
import { Paper, Typography, Chip, Avatar, Grid } from "@material-ui/core";
import * as serviceActions from "../../../store/actions/service";
import { connect } from "react-redux";
import classes from "./ServiceDetails.css";
import Aux from "../../../utils/Auxilary";

class ServiceDetails extends Component {
  componentDidMount() {
    this.props.onGetServiceDetails(this.props.match.params.id);
  }

  render() {
    return (
      <Grid container>
        <Grid md={4} xs={false} />
        <Grid md={4} xs={12}>
          <Paper className={classes.container}>
            <Typography variant="h5" component="h3">
              {this.props.title}
            </Typography>
            {this.props.match.params.id}

            <div className={classes.itemDetails}>
              {this.props.serviceProperties.map((item, index) => (
                <Chip
                  avatar={<Avatar>{index + 1}</Avatar>}
                  label={`${item.title} - ${item.code}`}
                  color="secondary"
                  className={classes.chips}
                />
              ))}
            </div>
          </Paper>
        </Grid>
        <Grid md={4} xs={false} />
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({ ...state.service });

const mapDispatchToProps = (dispatch) => {
  return {
    onGetServiceDetails: (id) =>
      dispatch(serviceActions.getServiceDetailsById(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServiceDetails);
