import {Box, Button, TextField, Typography} from "@mui/material";
import {useLazyGetAppQuery} from "../../store/slices/apiSlice/apiSlice.ts";
import {useState} from "react";
import Card from "../Card/Card.tsx";

const Check = () => {
    const [handleCheck, {data, isLoading}] = useLazyGetAppQuery();
    const [id, setId] = useState('');

    return (
        <Box alignSelf={'flex-start'} display='flex' flexDirection="column" gap={2}>
            <Typography variant="h1" component="h1" fontWeight={900}>Номер заявки</Typography>
            <TextField
                required
                id='id'
                label='Номер заявки'
                defaultValue=''
                value={id}
                onChange={e => (setId(e.target.value))}/>
            <Button color={'primary'} variant={'outlined'} onClick={() => handleCheck({id: Number(id)})}
                    disabled={isLoading}>{isLoading ? '...' : 'Проверить'}</Button>
            {data && <Card status={data.status} description={data.description}/>}
        </Box>
    );
};

export default Check;