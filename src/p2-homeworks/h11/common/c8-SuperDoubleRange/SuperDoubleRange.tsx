import React, {useEffect} from 'react'
import {Box, Slider} from "@mui/material";

type SuperDoubleRangePropsType = {
    multiValue: Array<number>,
    onChangeRange2: (value2: number) => void
    onChangeRange: (value: number) => void
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        multiValue,
        onChangeRange,
        onChangeRange2
        // min, max, step, disable, ...
    }
) => {
    const [value, setValue] = React.useState<number[]>([10, 90]);

    useEffect(() => {
        setValue(multiValue)
    }, [multiValue])
    
    const handleChange = (event: Event, newValue: number | number[]) => {
        //@ts-ignore
        newValue[0] && onChangeRange(newValue[0])
        //@ts-ignore
        newValue[1] && onChangeRange2(newValue[1])
        // @ts-ignore
        if (newValue[0] === newValue[1]) {
            //@ts-ignore
            onChangeRange(newValue[0] - 1)
        }

    };
    // сделать самому, можно подключать библиотеки

    return (
        <>
            <Box>
                <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    // getAriaValueText={valuetext}
                    style={{width: "500px"}}
                />
            </Box>

        </>
    )
}

export default SuperDoubleRange
