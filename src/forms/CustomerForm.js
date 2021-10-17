import React,{useState} from 'react'
import { Grid, TextField, makeStyles, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio,} from '@material-ui/core';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const useStyles = makeStyles(theme => ({
    root:{

        '& .MuiFormControl-root' : {
            width: '50% ', 
            margin: theme.spacing(1)
            
        }

    }
}))

const initialValues = {
    id :0,
    fullName : '',
    email:'',
    mobile:'',
    city:'',
    gender:'',
    departmentId:'',
    hireDate:new Date(),
    isPermanent: false,


}

export default function CustomerForm() {
 
    const [values, setValues] = useState(initialValues);
    const classes = useStyles();

    const handleInputChange = e=>{
        const { name , values} = e.target
        setValues({
            ...values,
            [name]:values
        })
    }

    return (
        <form className = {classes.root}>
            <Grid container>
               <Grid item xs={6}>
                  <TextField
                     variant="outlined"
                     label="Full Name"
                     name = "fullName"
                     value = {values.fullName}
                     onChange = {handleInputChange}
                   />

                   <TextField
                     variant="outlined"
                     label="Email"
                     name = "email"
                     value = {values.email}
                     onChange = {handleInputChange}
                  />

                   <TextField
                     variant="outlined"
                     label="Address"
                     name = "Address"
                     value = {values.email}
                     onChange = {handleInputChange}
                  />

                 <TextField
                     variant="outlined"
                     label="City"
                     name = "City"
                     value = {values.email}
                     onChange = {handleInputChange}
                  />

                            <TextField 
                               variant="outlined"
                               label="Postal Code"
                               name = "Postal Code"
                               value = {values.email}
                               onChange = {handleInputChange}
                             />

             </Grid>
                 <Grid item xs = {6}>

                         <TextField 
                               variant="outlined"
                               label="Mobile"
                               name = "Mobile"
                               value = {values.email}
                               onChange = {handleInputChange}
                             />

                        <TextField 
                               variant="outlined"
                               label="Password"
                               name = "Password"
                               value = {values.email}
                               onChange = {handleInputChange}
                             />

                     <FormControl>
                         <FormLabel>Gender</FormLabel>
                         <RadioGroup row
                         name="gender"
                         value = {values.gender}
                         onChange = {handleInputChange}
                         
                         >
                             
                             <FormControlLabel value = "male" control = {<Radio />} label = "male" />
                             <FormControlLabel value = "female" control = {<Radio />} label = "female" />
                             <FormControlLabel value = "other" control = {<Radio />} label = "other" />
                         </RadioGroup>

                           
                          

                            


                           <div>
                           <Stack spacing={2} direction="row">
                             


                             
                              <Button variant="contained">Submit</Button>
                           </Stack>
                           </div>



                         
                     </FormControl>

                     
                      </Grid>
             </Grid>
        </form>




    )
}
