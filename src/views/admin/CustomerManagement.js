import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import UserHeader from "components/Headers/UserHeader.js";
import CustomerForm from "forms/CustomerForm";
import { Paper} from '@material-ui/core';
import Tables  from "components/Tables/Tables";


const useStyles = makeStyles(theme => ({

root:{
    pageContent: {
         margin: theme.spacing(10),
         padding: theme.spacing(3)
    }
 
  }
}))

function CustomerManagement() {
  const classes = useStyles();
  
  return (
    <>
      <UserHeader 
        maxWidth={false}
        component={Box}
        marginTop="10rem"
        classes={{ root: classes.containerRoot }}
        />
        <Paper>
             <CustomerForm />
             <Tables />
        </Paper>
       
      
        

    </>
  );
}

export default CustomerManagement;
