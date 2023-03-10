import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';
import './style.scss'
import { TypeTimePicker } from '../../types/TypeTimePicker';

type TimePickerProps = {
  defaultValue: TypeTimePicker;
  handleTimePickerChange: (value: TypeTimePicker | null) => void;
}

export function TimePicker({ defaultValue, handleTimePickerChange }: TimePickerProps) {
  return (
    <div className='time-picker-container'>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticTimePicker
          defaultValue={defaultValue}
          orientation="landscape" 
          ampm={false} 
          displayStaticWrapperAs="mobile"
          localeText={{ toolbarTitle: 'Horário' }}
          slotProps={{ 
            toolbar: {
              className: 'left-time-picker'
            },
            actionBar: {
              hidden: true
            },
            nextIconButton: {
              hidden: true
            },
            previousIconButton: {
              hidden: true
            }
          }}
          onChange={(e) => handleTimePickerChange(e)}
        />
      </LocalizationProvider>
    </div>
  );
}