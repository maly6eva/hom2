import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: 200,

                color: '#00C853',

                '& .MuiSlider-track': {
                    backgroundColor: '#00C853',
                    height: 4,
                },

                '& .MuiSlider-rail': {
                    backgroundColor: '#9E9E9E',
                    height: 4,
                    opacity: 1,
                },

                '& .MuiSlider-thumb': {

                    width: 20,
                    height: 20,

                    backgroundColor: '#fff',

                    border: '3px solid #00C853',

                    '&:hover': {
                        boxShadow: '0 0 0 8px rgba(0,200,83,0.16)',
                    },

                    '&.Mui-focusVisible': {
                        boxShadow: '0 0 0 8px rgba(0,200,83,0.16)',
                    },

                    '&:before': {
                        display: 'none',
                    },

                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
