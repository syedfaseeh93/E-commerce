import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Link } from "react-alice-carousel";

const Footer = () => {
  return (
    <Grid
      className="bg-black p-4 "
      sx={{
        bgcolor: "black",
        color: "white",
        py: 8,
        px: 68,
        textAlign: "center",
      }}
      container
    >
      <Grid   sx={{ mx: 6 }}>
        <Typography className="pb-10 font-bold text-2xl" varient="h6">
          Company
        </Typography>
        <div className="text-center text-gray-300 ">
          <div>
            <button className="cursor-pointer pb-5" varient="h6">
              About
            </button>
          </div>
          <div>
            <button className="cursor-pointer pb-5" varient="h6">
              Blog
            </button>
          </div>
          <div>
            <button className="cursor-pointer pb-5" varient="h6">
              Press
            </button>
          </div>
          <div>
            <button className="cursor-pointer pb-5" varient="h6">
              Jobs
            </button>
          </div>
          <div>
            <button className="cursor-pointer pb-5" varient="h6">
              Partners
            </button>
          </div>
        </div>
      </Grid>

      <Grid   sx={{ mx: 6 }}>
        <Typography className="pb-10 font-bold text-2xl" varient="h6">
          Solutions
        </Typography>
        <div className="text-center text-gray-300">
          <div>
            <button className="cursor-pointer pb-5" varient="h6">
              Marketing
            </button>
          </div>
          <div>
            <button className="cursor-pointer pb-5" varient="h6">
              Analysis
            </button>
          </div>
          <div>
            <button className="cursor-pointer pb-5" varient="h6">
              Commerce
            </button>
          </div>
          <div>
            <button className="cursor-pointer pb-5" varient="h6">
              Insights
            </button>
          </div>
          <div>
            <button className="cursor-pointer pb-5" varient="h6">
              Support
            </button>
          </div>
        </div>
      </Grid>

      <Grid   sx={{ mx: 6 }}>
        <Typography className="pb-10 font-bold text-2xl" varient="h6">
          Documentation
        </Typography>
        <div className="text-center text-gray-300">
          <div>
            <button className="cursor-pointer pb-5" varient="h6">
              Guides
            </button>
          </div>
          <div>
            <button className="cursor-pointer pb-5" varient="h6">
              API Status
            </button>
          </div>
        </div>
      </Grid>

      <Grid   sx={{ mx: 6 }}>
        <Typography className="pb-10 font-bold text-2xl" varient="h6">
          Legal
        </Typography>
        <div className="text-center text-gray-300">
          <div>
            <button className="cursor-pointer pb-5" varient="h6">
              Claim
            </button>
          </div>
          <div>
            <button className="cursor-pointer pb-5" varient="h6">
              Privacy
            </button>
          </div>
          <div>
            <button className="cursor-pointer pb-5" varient="h6">
              Terms
            </button>
          </div>
        </div>
      </Grid>

      <Grid pt={6} sx={{textAlign:'center', mx:24,pt:18,color:'gray'}} >
        <Typography varient="body2">
          &copy; 2026 Made By SyedFaseeh.All Rights Reserved
        </Typography>
        <Typography>Made with Love By Me</Typography>
        <Typography>
          Icons Made By <Link href=""></Link>Mui icons from <Link href="https://mui.com/material-ui/react-avatar/"  target="blank">www.mui.com</Link>
        </Typography>
      </Grid>
      
    </Grid>
  );
};

export default Footer;
