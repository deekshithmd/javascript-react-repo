import { useEffect, useRef, useState } from "react";
import "./stepper.css";

const StepperData = [
  {
    name: "Customer Info",
    Component: () => <div>Provide your contact details</div>,
  },
  {
    name: "Shipping Info",
    Component: () => <div>Enter your shipping address</div>,
  },
  {
    name: "Payment Info",
    Component: () => <div>Complete Payment for your order</div>,
  },
  {
    name: "Delivered",
    Component: () => <div>You item delivered</div>,
  },
];

export const StepperComponent = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const [margins, setMargins] = useState({
    leftMargin: 0,
    rightMargin: 0,
  });

  const { Component } = StepperData[currentStep - 1];

  const stepRef = useRef([]);

  useEffect(() => {
    setMargins({
      leftMargin: stepRef.current[0].offsetWidth / 2,
      rightMargin: stepRef.current[StepperData?.length - 1].offsetWidth / 2,
    });
  }, [stepRef]);

  const handleNext = () => {
    setCurrentStep((prev) => {
      if (prev === StepperData?.length) {
        setIsComplete(true);
        return prev;
      } else {
        return prev + 1;
      }
    });
  };
  const calculateProgressBar = () => {
    return ((currentStep - 1) / (StepperData?.length - 1)) * 100;
  };

  return (
    <div>
      <div className="stepper">
        {StepperData?.map((step, index) => {
          return (
            <div
              key={step?.name}
              ref={(el) => (stepRef.current[index] = el)}
              className={`step ${
                currentStep > index + 1 || isComplete ? "complete" : ""
              } ${currentStep === index + 1 ? "active" : ""}`}
            >
              <span className="step-number">
                {currentStep > index + 1 || isComplete ? (
                  <span>&#10003;</span>
                ) : (
                  index + 1
                )}
              </span>
              <span className="step-name">{step?.name}</span>
            </div>
          );
        })}
        <div
          className="progressbar"
          style={{
            width: `calc(100% - ${
              margins?.leftMargin + margins?.rightMargin
            }px`,
            marginLeft: `${margins?.leftMargin}px`,
            marginRight: `${margins?.rightMargin}px`,
          }}
        >
          <div
            className="progress"
            style={{
              width: `${calculateProgressBar()}%`,
            }}
          ></div>
        </div>
      </div>
      <div>
        <Component />
        <button onClick={handleNext}>
          {currentStep === StepperData?.length ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
};
