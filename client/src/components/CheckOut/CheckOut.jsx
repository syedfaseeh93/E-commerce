import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import DeliveryAddress from "./DeliveryAddress";
import OrderSummary from "./OrderSummary";
import AddressCard from "../AddressCard/AddressCard";
import Cart from "../Cart/Cart";


export default function HorizontalLinearStepper() {
  const checkoutSteps = [
    { label: "Login", component: null },
    { label: "Delivery Address", component: <DeliveryAddress /> },
    { label: "Order Summary", component: <OrderSummary /> },
    { label: "Payment", component: null },
  ];

  const [searchParams, setSearchParams] = useSearchParams();

  const activeStep = Number(searchParams.get("step")) || 0;

  const goToStep = (step) => {
    setSearchParams({ step });
  };

  const nextStep = () => {
    if (activeStep < 1) {
      goToStep(activeStep + 1);
    }
  }

  const previousStep = () => {
    if (activeStep > 0) {
      goToStep(activeStep - 1);
    }
  };

  return (
    <Box sx={{ width: "100%", marginTop: 8 }}>
      <Stepper activeStep={activeStep}>
        {checkoutSteps.map(({ label }) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ display: "flex", justifyContent: "space-between", m: 4 }}>
        <Button onClick={previousStep}>Back</Button>
        {activeStep >= 1 ? null : <Button onClick={nextStep}>Next</Button>}
      </Box>
      {checkoutSteps[activeStep]?.component}
    </Box>
  );
}
