import React, { useState } from 'react'
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css'
import { Box, Typography, IconButton, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { tokens } from '../../theme';
import HomeOutlinedIcon  from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon  from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon  from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon  from '@mui/icons-material/ReceiptOutlined';
import PersonOutlinedIcon  from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon  from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlinedIcon  from '@mui/icons-material/HelpOutlined';
import BarChartOutlinedIcon  from '@mui/icons-material/BarChartOutlined';
import LightModeOutlinedIcon  from '@mui/icons-material/LightModeOutlined';
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon  from '@mui/icons-material/MenuOutlined';
import MapOutlinedIcon  from '@mui/icons-material/MapOutlined';

// const Item = ({ title, to, icon, selected, setSelected }) => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   return (
//     <MenuItem
//       active={selected === title}
//       style={{
//         color: colors.grey[100],
//       }}
//       onClick={() => setSelected(title)}
//       icon={icon}
//     >
//       <Typography>{title}</Typography>
//       <Link to={to} />
//     </MenuItem>

//   );
// };

const SideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState('dashboard');

  return (
    <Box
     sx={{
      "& .pro-sidebar-inner": {
        background: `${colors.primary[400]} !important`
      },
      "& .pro-icon-wrapper": {
        backgroundColor: "transparent !important"
      },
      "& .pro-inner-item": {
        padding: "5px 35px 5px 20px !important"
      },
      "& .pro-inner-item:hover": {
        color: "#868dfb !important"
      },
      "& .pro-inner-item:active": {
        color: "#6870fa !important"
      }
     }}
    >

             {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/user.png`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Ed Roh
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  VP Fancy Admin
                </Typography>
              </Box>
            </Box>
          )}
          
    </Box>
  )
}

export default SideBar;
