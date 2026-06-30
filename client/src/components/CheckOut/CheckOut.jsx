import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useLocation, useNavigate } from "react-router-dom";
import DeliveryAddress from "./DeliveryAddress";
import OrderSummary from "./OrderSummary";

const steps = ["Login", "Delivery Address", "Order Summary", "Payment"];

export default function HorizontalLinearStepper() {
  const location = useLocation();
  const querysearch = new URLSearchParams(location.search);
  const step = querysearch.get("step");
  const navigate = useNavigate();

  const [activeStep, setActiveStep] = React.useState(step);

  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => {

      if(prevStep!==0){
        const newStep = prevStep - 1;
        querysearch.set("step", newStep);
        const query = querysearch.toString();
        navigate({ search: `?${query}` });       
        return newStep;
      }
    });
  };

  return (
    <Box sx={{ width: "100%", marginTop: 8 }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
          </Box>

          <div className="mt-8">
            {step == 2 ? <DeliveryAddress /> : <OrderSummary />}
          </div>
        </React.Fragment>
      )}
    </Box>
  );
}