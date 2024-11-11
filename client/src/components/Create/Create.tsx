import {Box, Button, InputLabel, MenuItem, Select, TextField, Typography} from "@mui/material";
import {useState} from "react";
import {useCreateAppMutation} from "../../store/slices/apiSlice/apiSlice.ts";

const Create = () => {
    const [status, setStatus] = useState("not_started");
    const [description, setDescription] = useState("");
    const [handleCreate, {isLoading}] = useCreateAppMutation();


    const onCreateApp = async () => {
        if (status && description) {
            await handleCreate({status, description})
        }
    }

    return (
        <Box display="flex" flexDirection="column" gap={2} borderRight={'1px solid black'} paddingRight={2} width={'50%'}>
            <Typography variant="h1" component="h1" fontWeight={900}>
                Создание заявки
            </Typography>
            <TextField
                required
                id='description'
                label='Описание работ'
                defaultValue=''
                value={description}
                onChange={e => (setDescription(e.target.value))}/>
            <Box>
                <InputLabel id="demo-simple-select-label">Статус работ</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={status}
                    label="Статус работ"
                    onChange={e => setStatus(e.target.value)}
                >
                    <MenuItem value='not_started'>Не начато</MenuItem>
                    <MenuItem value='ready'>Готово</MenuItem>
                    <MenuItem value='queue'>В очереди</MenuItem>
                </Select>
            </Box>
            <Button color={'primary'} variant={'outlined'} onClick={onCreateApp}
                    disabled={isLoading}>{isLoading ? '...' : 'Создать'}</Button>
        </Box>
    );
};

export default Create;