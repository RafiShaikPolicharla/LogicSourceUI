import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { updateLoading, updateScenarioNameSelected, updateShowScenarioPrice, updateTableData } from '../../redux/Benchmark';
import localize from "../../assets/lang/en";
import { useEffect, useState } from 'react';

export default function Sizes() {
    const [val, setVal] = useState("");
    const data = useSelector((state) => state.benchmarkValue.data);
    const loading = useSelector((state) => state.benchmarkValue.loading);

    console.log({ data })
    const dispatch = useDispatch()

    useEffect(() => {
        setVal(data.tableData.file_name || "")
    }, [data])
    const handleChange = (e, value) => {
        console.log({ e, value })
        if (!value) {
            dispatch(updateTableData({ summaryData: [], tableData: { data: [], file_name: "" } }))
            dispatch(updateShowScenarioPrice(false))
            dispatch(updateScenarioNameSelected(""))
            return
        }
        dispatch(updateLoading(true));
        dispatch(updateTableData({ ...data, tableData: { ...data.tableData, file_name: value.title || "" } }))
        setTimeout(() => {
            dispatch(updateTableData({ summaryData: localize.projectBenchmarking.summaryData, tableData: { data: localize.projectBenchmarking.rowData.data, file_name: value.title || "" } }))
            dispatch(updateShowScenarioPrice(false))
            dispatch(updateScenarioNameSelected(""))
            dispatch(updateLoading(false));
        }, [2000])
    }
    



    return (
        <Stack spacing={2} sx={{ width: 500 }}>
            <Autocomplete
                id="size-small-standard"
                size="small"
                options={top100Films}
                getOptionLabel={(option) => option.title}
                onChange={handleChange}
                defaultValue={{title: data?.tableData?.file_name}}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="standard"
                        // value={{title: tableData?.file_name} || ""}
                        // label="Size small"
                        placeholder="Favorites"
                        // value={data?.tableData?.file_name}   
                        disabled={loading}
                        // onSelect={handleChange}
                        InputProps={{
                            ...params.InputProps,
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchOutlinedIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                )}
            />

        </Stack>
    );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { title: 'first advantage - u.s.amendment executed 4-28-23', },
    { title: 'first advantage background check msa', },
    { title: 'hireright - clubcono usa inc. - service agreement fully executed', },
    { title: 'hireright msa' },

];
