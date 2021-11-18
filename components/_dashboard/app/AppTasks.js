import PropTypes from 'prop-types';
import { Form, FormikProvider, useFormik } from 'formik';
import React,{useState} from 'react'
// import InputField from "./InputField"
// material
import {
  Box,
  Card,
  Checkbox,
  CardHeader,
  Typography,
  FormControlLabel,
  Stack
} from '@mui/material';

// ----------------------------------------------------------------------

const TASKS = [
  'Create FireStone Logo',
  'Add SCSS and JS files if required',
  'Stakeholder Meeting',
  'Scoping & Estimations',
  'Sprint Showcase'
];


// ----------------------------------------------------------------------

TaskItem.propTypes = {
  task: PropTypes.string,
  checked: PropTypes.bool,
  formik: PropTypes.object
};

function TaskItem({ task, checked, formik, ...other }) {
  const { getFieldProps } = formik;

  return (
    <>
    <Stack direction="row" justifyContent="space-between" sx={{ py: 0.75 }}>
      
      <FormControlLabel
      
        control={
          <Checkbox {...getFieldProps('checked')} value={task} checked={checked} {...other} />
        }
        label={
          
          <Typography
            variant="body2"
            sx={{
              ...(checked && {
                color: 'text.disabled',
                textDecoration: 'line-through'
              })
            }}
          >
            {task}
            
          </Typography>
          
        }
      />
    </Stack>
    </>
  );
}

export default function AppTasks() {
  const formik = useFormik({
    initialValues: {
      checked: [TASKS[2]]
    },
    onSubmit: (values) => {
      console.log(values);
    }
  });

  const { values, handleSubmit } = formik;
  const [inputData, setInputData] = useState("")
    const [saved, setSaved] = useState([])
    const addItems = () => {
        if (!inputData) {
          alert("Plz fill something to it");
        }
         else {
          const newData = {
            id: new Date().getTime().toString(),
            name: inputData
          }
          setSaved([...saved, newData]);
          setInputData("")
        }
      };


  return (
    <Card>
      <CardHeader title="Tasks" />
      <Box sx={{ px: 3, py: 1 }}>
        <FormikProvider value={formik}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <input
              type="text"
              placeholder="Add a task here"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            <button  onClick={addItems}>
              <span> ADD </span>
            </button>
            {TASKS.map((task,index) => (
              <TaskItem
                key={index}
                task={task}
                formik={formik}
                checked={values.checked.includes(task)
                }
              />
            ))}
          </Form>
        </FormikProvider>
      </Box>
    </Card>
  );
}
