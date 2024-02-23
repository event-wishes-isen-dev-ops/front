import { Avatar, Card, CardContent, CardHeader, IconButton } from "@mui/material"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

export type Prestataire = {
    name: string,
    url: string,
    nbLike: number, 
}
export default ({name, url, nbLike}:Prestataire) => {
    return (
        <>
            <Card variant="outlined">
                <CardHeader
                    avatar={
                        <Avatar alt="Remy Sharp" src={url} />
                    }
                    action={
                        <>
                            <IconButton aria-label="settings">
                                {
                                    false 
                                    ?<FavoriteIcon/>
                                    :<FavoriteBorderIcon/>
                                }
                            </IconButton>
                            {nbLike}
                        </>
                    }
                    title={name}
                />
            </Card>
        </>
    )
}