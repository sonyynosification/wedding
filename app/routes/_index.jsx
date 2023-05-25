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
import {DateCalendar} from '@mui/x-date-pickers/DateCalendar';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import 'dayjs/locale/vi';
import {TimeClock} from "@mui/x-date-pickers";
import {Fab} from "@mui/material";
import SendIcon from '@mui/icons-material/';

export const meta = () => {
    return [{title: "New Remix App"}];
};

const fabStyle = {
    position: 'fixed',
    bottom: "16px",
    right: "16px",
};

export default function Index() {
    return (
        <div style={{fontFamily: "system-ui, sans-serif", lineHeight: "1.4"}}>

            <Timeline position="alternate">
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{m: 'auto 0'}}
                        align="right"
                        variant="body2"
                        color="text.secondary"
                    >
                        9:30 am
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector/>
                        <TimelineDot>
                            <FastfoodIcon/>
                        </TimelineDot>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent sx={{py: '12px', px: 2}}>
                        <Typography variant="h6" component="span">
                            Eat
                        </Typography>
                        <Typography>Because you need strength</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{m: 'auto 0'}}
                        variant="body2"
                        color="text.secondary"
                    >
                        10:00 am
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector/>
                        <TimelineDot color="primary">
                            <LaptopMacIcon/>
                        </TimelineDot>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent sx={{py: '12px', px: 2}}>
                        <Typography variant="h6" component="span">
                            Code
                        </Typography>
                        <Typography>Because it&apos;s awesome!</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineConnector/>
                        <TimelineDot color="primary" variant="outlined">
                            <HotelIcon/>
                        </TimelineDot>
                        <TimelineConnector sx={{bgcolor: 'secondary.main'}}/>
                    </TimelineSeparator>
                    <TimelineContent sx={{py: '12px', px: 2}}>
                        <Typography variant="h6" component="span">
                            Sleep
                        </Typography>
                        <Typography>Because you need rest</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineConnector sx={{bgcolor: 'secondary.main'}}/>
                        <TimelineDot color="secondary">
                            <RepeatIcon/>
                        </TimelineDot>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent sx={{py: '12px', px: 2}}>
                        <Typography variant="h6" component="span">
                            Repeat
                        </Typography>
                        <Typography>Because this is the life you love!</Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
            {/*<LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="vi">*/}
            {/*    <DateCalendar value={dayjs('2023-06-24')} readOnly/>*/}
            {/*    <TimeClock value={dayjs('2023-06-24 05:30:00')}*/}
            {/*               readOnly views={["hours", "minutes"]}*/}
            {/*               ampm={true}*/}
            {/*    />*/}
            {/*</LocalizationProvider>*/}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
                {/*<h3>Ngày làm tiệc:</h3>*/}
                <h2>Ngày 24 tháng 06 năm 2023</h2>
                <p>(Ngày mùng 2 tháng 5 âm lịch)</p>
            </div>
            <div className="google-map-code">
                <iframe
                    src="https://www.google.com/maps/embed/v1/place?q=Garnet+Center,+Nguyễn+Thị+Minh+Khai,+Phước+Hòa,+Nha+Trang,+Khánh+Hòa,+Vietnam&key=AIzaSyBgRU55ov9mg-ZgB7ZNGWVKvD5QY8TxOqE"
                    width="100%" height="450" frameBorder="0" style={{border: 0}} allowFullScreen="" aria-hidden="false"
                    tabIndex="0"></iframe>
            </div>

            <Fab style={fabStyle} variant="extended" color="primary" aria-label="add">
                <SendIcon sx={{ mr: 1 }} onClick={() => {

                }} />
                Send a message
            </Fab>
        </div>
    );
}
