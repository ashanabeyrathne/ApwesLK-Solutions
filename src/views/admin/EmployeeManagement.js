import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import UserHeader from "components/Headers/UserHeader.js";
import CustomerForm from "forms/CustomerForm";
import { Paper} from '@material-ui/core';
import EmployeeTable from "components/Tables/EmployeeTable";  


const useStyles = makeStyles(theme => ({

root:{
    pageContent: {
         margin: theme.spacing(10),
         padding: theme.spacing(3)
    }
 
  }
}))

function EmployeeManagement() {
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
             <EmployeeTable />
        </Paper>
       
      
        

    </>
  );
}

export default EmployeeManagement;
