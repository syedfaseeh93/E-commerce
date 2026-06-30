import { Box, Step, StepLabel, Stepper } from "@mui/material";

const OrderTracker = ({activeStep}) => {
  const steps = [
    "Placed",
    "Order Confirmed",
    "Shipped",
    "Out for Delivery",
    "Delivered",
  ];

  return (
    <div className="py-12">
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </div>
  );
};

export default OrderTracker;
