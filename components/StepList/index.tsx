import { karla, theme } from "@/app/theme";
import {
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";

export interface StepListItem {
  label: string;
  description?: string | React.ReactNode;
  startDate: Date;
  endDate?: Date;
  icon?: React.ReactNode;
}

export default function StepList({
  steps,
  getIconFromIdx,
}: {
  steps: StepListItem[];
  getIconFromIdx?: (idx: number) => React.ReactNode;
}) {
  return (
    <Stepper orientation="vertical">
      {steps.map((step: StepListItem, idx: number) => (
        <Step key={step.label} expanded active>
          <StepLabel
            slots={{
              stepIcon: () => step.icon || getIconFromIdx?.(idx),
            }}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6" fontFamily={karla.style.fontFamily}>
              {step.label}{" "}
              <span style={{ color: theme.palette.coolersNeutral.main }}>
                (
                {step.startDate.toLocaleDateString("en-US", {
                  month: "2-digit",
                  year: "numeric",
                })}{" "}
                -{" "}
                {step.endDate?.toLocaleDateString("en-US", {
                  month: "2-digit",
                  year: "numeric",
                }) || "Present"}
                )
              </span>
            </Typography>
          </StepLabel>
          {step.description && (
            <StepContent>
              {typeof step.description === "string" ? (
                <Typography>{step.description}</Typography>
              ) : (
                step.description
              )}
            </StepContent>
          )}
        </Step>
      ))}
    </Stepper>
  );
}
