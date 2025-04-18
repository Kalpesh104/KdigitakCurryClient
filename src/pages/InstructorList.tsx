import React, { useState } from 'react';
import {
  Box, Button, IconButton, MenuItem, Select, Table, TableBody,
  TableCell, TableContainer, TableHead, TableRow, Typography, Paper
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Instructor } from '../types/Instructor';

const InstructorList = () => {
  const [instructors] = useState<Instructor[]>([
    { id: 1, name: 'John Doe', phone: '(123) 456-7890', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', phone: '(987) 654-3210', email: 'jane.smith@example.com' },
    { id: 3, name: 'Mark Johnson', phone: '(555) 123-4567', email: 'mark.johnson@example.com' },
    { id: 4, name: 'Emily White', phone: '(333) 987-6543', email: 'emily.white@example.com' },
  ]);

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h5" gutterBottom>Instructor</Typography>

      <Box display="flex" justifyContent="space-between" mb={2}>
        <Select defaultValue="" displayEmpty size="small">
          <MenuItem value="">Filters</MenuItem>
        </Select>
        <Button variant="contained" color="primary">Add Instructor</Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Sr No.</TableCell>
              <TableCell>Instructor Name</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Email</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {instructors.map((instructor, index) => (
              <TableRow key={instructor.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{instructor.name}</TableCell>
                <TableCell>{instructor.phone}</TableCell>
                <TableCell>{instructor.email}</TableCell>
                <TableCell align="right">
                  <IconButton><MoreVertIcon /></IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default InstructorList;
