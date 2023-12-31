import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { useTableData } from '../TableDataProvider';
import Tooltip from '@mui/material/Tooltip';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function ReiterCheckSix() {
  const [aufwand, setAufwand] = React.useState('');
  const [selectedCloud, setSelectedCloud] = React.useState('');
  const [isSecondFormControlActive, setIsSecondFormControlActive] = React.useState(false);

  const handleChange = (event: SelectChangeEvent) => {
    setAufwand(event.target.value);
    setIsSecondFormControlActive(event.target.value !== 'nein');
    handleInputChange(event);
  };
  const handleSelectChange = (event: SelectChangeEvent) => {
    setSelectedCloud(event.target.value);
    const { name, value } = event.target;
    if (name === 'cloud' && value === 'Andere') {
      // If "Andere" is selected in the Select, use an empty string
      updateTableData({
        ...tableData,
        [name]: '',
      });
    } else {
      updateTableData({
        ...tableData,
        [name]: value,
      });
    }
  };

  const { tableData, updateTableData } = useTableData();

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    updateTableData({
      ...tableData,
      [name]: value,
    });
  };

  return (
    <Box sx={{ display: 'grid' }}>
      <FormControl
        sx={{ m: 0.5, minWidth: 250 }}
        style={{ display: 'inline-flex', alignItems: 'flex-start' }}
      >
        <FormLabel component='legend'>
          Ist der Connector an bestimmte Cloud-Anbieter gebunden?
        </FormLabel>
        <Tooltip
          title='Bitte geben Sie an, ob der Connector an einen bestimmten Cloud-Anbieter gebunden ist. Sollte dies der Fall sein, ist der Cloudanbieter jedoch nicht mit aufgelistet, wählen Sie bitte „andere“ und geben den Cloud-Anbieter an…'
          placement='top-start'
          style={{ position: 'absolute', right: 0 }}
        >
          <InfoOutlinedIcon color='disabled' fontSize='small' />
        </Tooltip>
        <RadioGroup row value={aufwand} onChange={handleChange}>
          <FormControlLabel
            name='cloudAnbieter'
            value='Ja'
            control={<Radio />}
            label='Ja'
            onChange={(event) => handleInputChange(event)}
          />
          <FormControlLabel
            name='cloudAnbieter'
            value='Nein'
            control={<Radio />}
            label='Nein'
            onChange={(event) => handleInputChange(event)}
          />
        </RadioGroup>
      </FormControl>
      <FormControl sx={{ m: 0.5, minWidth: 250 }}>
        <InputLabel id='element'>Cloud</InputLabel>
        <Select
          name='cloud'
          labelId='element'
          id='someelement'
          value={selectedCloud}
          label='Cloud'
          onChange={handleSelectChange}
          disabled={!isSecondFormControlActive}
        >
          <MenuItem value={'AWS'}>AWS</MenuItem>
          <MenuItem value={'Microsoft Azure'}>Microsoft Azure</MenuItem>
          <MenuItem value={'Google Cloud'}>Google Cloud</MenuItem>
          <MenuItem value={'IBM Cloud'}>IBM Cloud</MenuItem>
          <MenuItem value={'Redhat'}>Redhat</MenuItem>
          <MenuItem value={'VMWare'}>VMWare</MenuItem>
          <MenuItem value={'MyCloud'}>MyCloud</MenuItem>
          <MenuItem value={'Andere'}>Andere</MenuItem>
        </Select>
        {selectedCloud === 'Andere' && (
          <TextField
            name='cloud'
            id='outlined-basic'
            placeholder='Bitte geben Sie den Cloud-Anbieter an'
            variant='outlined'
            value={tableData.cloud}
            onChange={handleInputChange}
          />
        )}
      </FormControl>
    </Box>
  );
}
