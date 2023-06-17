
import {redirect} from "@remix-run/node";
import * as React from "react";
import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import {Image} from "@mui/icons-material";
import {useActionData} from "@remix-run/react";

export async function action(params) {
    const body = await params.request.formData();
    const wisher = await body.get("wisher");
    const wishes = await body.get("wishes");

    await saveWishes({wisher, wishes})

    return { name: wisher }
}

const Wishes = () => {
    const wisher = useActionData()?.name;
    return (
        <div style={{fontFamily: "system-ui, sans-serif", lineHeight: "1.4"}}>
            <Grid
                container
                direction="column"
                spacing={3}
                alignItems="center"
            >
            <Grid item>
                <img
                    width="80%"
                    src="/mochi-mochi-karolina-karolina.gif" />
            </Grid>
                <Grid item>
                    <Typography>
                        {`Thank you for your kind wishes, ${wisher}`}
                    </Typography>
                </Grid>
            </Grid>

        </div>
    )
}

export default Wishes;
