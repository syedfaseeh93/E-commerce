import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";
import { logout } from "../../state/Auth/Action";
import { useDispatch } from "react-redux";

export default function BasicPopover({avatar}) {

  const dispatch =useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;


  const content=[
    {label:'Your account',navigate:'/account'},
    {label:'Bag',navigate:'/cart'},
    {label:'Logout',action:'logout',navigate:'/logout'}
  ]

  const navigate=useNavigate();

  const HandleClick=(item)=>{
    if(item.action==="logout"){
      dispatch(logout());
      navigate("/login");
    }
    else{
      navigate(item.navigate);
    }
  }
  
  return (
    <div>
  <Button aria-describedby={id} onClick={handleClick}>
    <div className="mx-3">
      <Avatar
        sx={{
          bgcolor: "green",
          width: 40,
          height: 40,
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
       {avatar}
      </Avatar>
    </div>
  </Button>

  <Popover
    id={id}
    open={open}
    anchorEl={anchorEl}
    onClose={handleClose}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "left",
    }}
    PaperProps={{
      sx: {
        mt: 1.5,
        minWidth: 200,
        borderRadius: 2,
        boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
        overflow: "hidden",
      },
    }}
  >
    <div>
      {content.map((item, index) => (
        <Typography
        onClick={()=>HandleClick(item)}
          key={index}
          sx={{
            px: 2,
            py: 1.2,
            fontSize: "14px",
            cursor: "pointer",
            transition: "all 0.2s ease",
            "&:hover": {
              backgroundColor: "#f5f5f5",
              paddingLeft: "20px",
            },
          }}
        >
          {item.label}
        </Typography>
      ))}
    </div>
  </Popover>
</div>
  );
}
