import * as React from 'react';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import './style.scss'
import { TimePicker } from '../TimePicker';
import { TypeAlarm } from '../../types/TypeAlarm';
import { TypeTimePicker } from '../../types/TypeTimePicker';

export interface SimpleDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function AddAlarmButton() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='add-alarm-button'>
      <Button title="Adicionar novo alarme" variant="outlined" onClick={handleClickOpen}>
        <AddIcon />
      </Button>
      <AddAlarmDialog
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}

export function AddAlarmDialog(props: SimpleDialogProps) {
  const { onClose, open } = props;
  const [alarm, setAlarm] = React.useState<TypeAlarm>({
    title: "",
    description: "",
    time: {} as TypeTimePicker,
    activated: true
  })

  const handleClose = () => {
    onClose();
  };

  const handleFieldsChange = (e: any) => setAlarm({
    ...alarm,
    [e.currentTarget.name]: e.currentTarget.value
  })

  const handleTimePickerChange = (value: any) => setAlarm({
    ...alarm,
    time: value
  })

  const handleAddAlarm = (e: any) => {
    setAlarm({
      ...alarm,
      activated: true
    })
    console.log(alarm)
  }

  return (
    <Dialog className='dialog' onClose={handleClose} open={open}>
      <div className="dialog-container">
        <DialogTitle>Adicionar novo alarme</DialogTitle>
        <form className="input-form">
          <TextField
            name="title"
            value={alarm.title} onChange={handleFieldsChange}
            id="outlined-required"
            label="Título"
          />
          <TextField
            name="description"
            value={alarm.description} onChange={handleFieldsChange}
            id="outlined-multiline-static"
            label="Descrição"
            multiline
            rows={4}
          />
          <TimePicker 
            defaultValue={alarm.time} 
            handleTimePickerChange={handleTimePickerChange}
          />
        </form>
        <div className="button-group">
          <Button onClick={handleClose} variant="outlined" color="error">
            Cancelar
          </Button>
          <Button onClick={handleAddAlarm} type="submit" variant="contained" color="success">
            Adicionar
          </Button>
        </div>
      </div>
    </Dialog>
  );
}