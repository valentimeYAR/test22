import {Box, Typography} from "@mui/material";
import {STATUSES} from "../../constants.ts";
interface Props {
    status: string;
    description: string;
}
const Card = ({status, description}: Props) => {
    return (
        <>
            <Box>
                <Typography variant="h2" component="h2" fontWeight={600}>Статус</Typography>
                <Typography variant="h6" component="p" fontWeight={400}>{STATUSES[status]}</Typography>
            </Box>
            <Box>
                <Typography variant="h2" component="h2" fontWeight={600}>Описание работ</Typography>
                <Typography variant="h6" component="p" fontWeight={400}>{description}</Typography>
            </Box>
        </>
    );
};

export default Card;