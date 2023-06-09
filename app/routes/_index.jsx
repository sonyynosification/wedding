import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import 'dayjs/locale/vi';
import {
    Avatar,
    Button,
    DialogActions,
    DialogContent,
    DialogContentText, Divider,
    Fab,
    FormGroup, Grid, List, ListItem, ListItemAvatar, ListItemText,
    TextField
} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import {useRef, useState} from "react";
import {Form, useLoaderData, useSubmit} from "@remix-run/react";
import {getWishes, saveWishes} from "../models/wishes.server";
import MenuIcon from '@mui/icons-material/Menu';

export const meta = () => {
    return [{title: "New Remix App"}];
};

const fabStyle = {
    position: 'fixed',
    bottom: "16px",
    right: "16px",
};

export async function loader(args) {

    const wishes = (await getWishes()) || [];

    return {wishes};
}


export default function Index() {
    const [isOpenDialog, setOpenDialog] = useState(false);
    const wishes = useLoaderData()?.wishes;

    const handleClose = () => {
        setOpenDialog(false);
    }

    const onOpen = () => {
        setOpenDialog(true);
    }

    return (
        <div style={{
            fontFamily: "Josefin Sans", lineHeight: "1.25",
            // background: "-webkit-linear-gradient(to right, #FFFFFF, #FFEFBA)",  /* Chrome 10-25, Safari 5.1-6 */

        }}>
            <Grid container flex flexDirection="column" alignItems="center">
                <Grid
                    // item width="100%"
                    // height="64px"
                    style={{
                        fontSize: "48px", fontWeight: 300, padding: "32px",
                    // backgroundImage: "url(/flower.jpg)"
                }}>

                    Vinh & Phát
                </Grid>
                <Grid item xs={12} md={6} style={{fontSize: "24px", fontWeight: 300, padding: "16px"}}>
                    <img src="/NHT_4042.JPG" width="100%" />
                </Grid>
                <Grid item xs={12} md={6} style={{fontSize: "24px", fontWeight: 300, padding: "16px"}}>
                    24 tháng 06 năm 2023
                </Grid>
                <Grid item xs={12} md={6} style={{fontSize: "16px", fontWeight: 300, paddingBottom: "16px"}}>
                    (Ngày mùng 2 tháng 5 âm lịch)
                </Grid>
                <Grid item xs={12} md={6} style={{fontSize: "16px", fontWeight: 300, paddingBottom: "16px"}}>
                    <img src="/wedding-rings.png" width="100%" />
                </Grid>

                <Grid item xs={12} md={6} style={{fontSize: "24px", fontWeight: 300, paddingBottom: "16px"}}>
                    Trung tâm tiệc cưới Garnet
                </Grid>
                <Grid item xs={12} md={6} style={{fontSize: "16px", fontWeight: 300, paddingBottom: "16px"}}
                      textAlign="center"
                >
                    141 Nguyễn Thị Minh Khai, Phước Hoà, Nha Trang
                </Grid>
                <Grid item width="100%" style={{fontSize: "16px", fontWeight: 300, paddingBottom: "16px"}}>
                    <iframe
                        src="https://www.google.com/maps/embed/v1/place?q=Garnet+Center,+Nguyễn+Thị+Minh+Khai,+Phước+Hòa,+Nha+Trang,+Khánh+Hòa,+Vietnam&key=AIzaSyBgRU55ov9mg-ZgB7ZNGWVKvD5QY8TxOqE"
                        width="100%" height="450" frameBorder="0" style={{border: 0}} allowFullScreen="" aria-hidden="false"
                        tabIndex="0"></iframe>
                </Grid>
            </Grid>



            {/*<h3>Lịch trình</h3>*/}
            {/*<Timeline position="alternate">*/}
            {/*    <TimelineItem>*/}
            {/*        <TimelineOppositeContent*/}
            {/*            sx={{m: 'auto 0'}}*/}
            {/*            align="right"*/}
            {/*            variant="body2"*/}
            {/*            color="text.secondary"*/}
            {/*        >*/}
            {/*            17:30*/}
            {/*        </TimelineOppositeContent>*/}
            {/*        <TimelineSeparator>*/}
            {/*            <TimelineConnector/>*/}
            {/*            <TimelineDot>*/}
            {/*                <FastfoodIcon/>*/}
            {/*            </TimelineDot>*/}
            {/*            <TimelineConnector/>*/}
            {/*        </TimelineSeparator>*/}
            {/*        <TimelineContent sx={{py: '12px', px: 2}}>*/}
            {/*            <Typography variant="h6" component="span">*/}
            {/*                Đón khách*/}
            {/*            </Typography>*/}
            {/*            <Typography>Because you need strength</Typography>*/}
            {/*        </TimelineContent>*/}
            {/*    </TimelineItem>*/}
            {/*    <TimelineItem>*/}
            {/*        <TimelineOppositeContent*/}
            {/*            sx={{m: 'auto 0'}}*/}
            {/*            variant="body2"*/}
            {/*            color="text.secondary"*/}
            {/*        >*/}
            {/*            18:30*/}
            {/*        </TimelineOppositeContent>*/}
            {/*        <TimelineSeparator>*/}
            {/*            <TimelineConnector/>*/}
            {/*            <TimelineDot color="primary">*/}
            {/*                <LaptopMacIcon/>*/}
            {/*            </TimelineDot>*/}
            {/*            <TimelineConnector/>*/}
            {/*        </TimelineSeparator>*/}
            {/*        <TimelineContent sx={{py: '12px', px: 2}}>*/}
            {/*            <Typography variant="h6" component="span">*/}
            {/*                Bắt đầu lễ*/}
            {/*            </Typography>*/}
            {/*            <Typography>Because it&apos;s awesome!</Typography>*/}
            {/*        </TimelineContent>*/}
            {/*    </TimelineItem>*/}
            {/*    <TimelineItem>*/}
            {/*        <TimelineSeparator>*/}
            {/*            <TimelineConnector/>*/}
            {/*            <TimelineDot color="primary" variant="outlined">*/}
            {/*                <HotelIcon/>*/}
            {/*            </TimelineDot>*/}
            {/*            <TimelineConnector sx={{bgcolor: 'secondary.main'}}/>*/}
            {/*        </TimelineSeparator>*/}
            {/*        <TimelineContent sx={{py: '12px', px: 2}}>*/}
            {/*            <Typography variant="h6" component="span">*/}
            {/*                Nhập tiệc*/}
            {/*            </Typography>*/}
            {/*            <Typography>Because you need rest</Typography>*/}
            {/*        </TimelineContent>*/}
            {/*    </TimelineItem>*/}
            {/*    <TimelineItem>*/}
            {/*        <TimelineSeparator>*/}
            {/*            <TimelineConnector sx={{bgcolor: 'secondary.main'}}/>*/}
            {/*            <TimelineDot color="secondary">*/}
            {/*                <RepeatIcon/>*/}
            {/*            </TimelineDot>*/}
            {/*            <TimelineConnector/>*/}
            {/*        </TimelineSeparator>*/}
            {/*        <TimelineContent sx={{py: '12px', px: 2}}>*/}
            {/*            <Typography variant="h6" component="span">*/}
            {/*                Cụng ly*/}
            {/*            </Typography>*/}
            {/*            <Typography>Because this is the life you love!</Typography>*/}
            {/*        </TimelineContent>*/}
            {/*    </TimelineItem>*/}
            {/*</Timeline>*/}

            {/*<Divider/>*/}
            {/*<h3>Lời chúc</h3>*/}
            {/*<List sx={{width: "100%", bgcolor: "background.paper"}}>*/}
            {/*    {wishes.map((wish) => (*/}
            {/*        <ListItem key={wish.wisher}>*/}
            {/*            <ListItemAvatar>*/}
            {/*                <Avatar alt={wish.wisher}/>*/}
            {/*            </ListItemAvatar>*/}
            {/*            <ListItemText*/}
            {/*                primary={wish.wisher}*/}
            {/*                secondary={*/}
            {/*                    <React.Fragment>*/}
            {/*                        <Typography*/}
            {/*                            sx={{display: "inline"}}*/}
            {/*                            component="span"*/}
            {/*                            variant="body2"*/}
            {/*                            color="text.primary"*/}
            {/*                        >*/}
            {/*                            {wish.wishes}*/}
            {/*                        </Typography>*/}
            {/*                    </React.Fragment>*/}
            {/*                }*/}
            {/*            />*/}
            {/*        </ListItem>))}*/}
            {/*</List>*/}

            {/*<Fab style={fabStyle} variant="extended" color="primary" aria-label="add"*/}
            {/*     onClick={onOpen}*/}
            {/*>*/}
            {/*    <SendIcon sx={{mr: 1}}/>*/}
            {/*    Gửi lời chúc*/}
            {/*</Fab>*/}

            {/*<Fab style={{*/}
            {/*    position: "fixed",*/}
            {/*    top: "16px",*/}
            {/*    left: "16px",*/}
            {/*    backgroundColor: "transparent",*/}
            {/*    border: "none",*/}
            {/*    borderRadius: "0",*/}
            {/*    boxShadow: "none",*/}
            {/*}}>*/}
            {/*    <MenuIcon />*/}

            {/*</Fab>*/}

            <Dialog open={isOpenDialog}
                    onClose={handleClose}
            >
                <Form method="post" action="/wishes">
                    <DialogTitle>Send a message</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Tell me whatever you wish
                        </DialogContentText>
                        <FormGroup>
                            <Grid container
                                  direction="column"
                                  spacing={3}>
                                <Grid item></Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        label="You are" type="text" name="wisher"

                                    />

                                </Grid>
                                <Grid item xs={12}>

                                    <TextField label="Your wishes"
                                               name="wishes"
                                               type="text"
                                               multiline
                                               rows={3}
                                    />
                                </Grid>
                            </Grid>
                        </FormGroup>
                    </DialogContent>
                    <DialogActions>
                        <Button type="button" onClick={handleClose}>Close</Button>
                        <button type="submit">Submit</button>
                    </DialogActions>
                </Form>
            </Dialog>
        </div>
    );
}
