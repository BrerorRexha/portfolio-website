import { Box } from "@mui/material";
import SectionHeader from "../../layout/SectionHeader";
import WorkflowStep from "./workflow/WorkflowStep";

const Workflow = () => {
  const workflowSteps = [
    {
      title: "Analysis",
      description:
        "Before writing code, I break down the problem into data flow, user interactions, and architectural constraints. Understanding the real requirements prevents overengineering and unnecessary complexity.",
    },
    {
      title: "Identifying Points of Interest",
      description:
        "I focus on state boundaries, data dependencies, and UI components that require abstraction. This ensures reusable patterns and predictable state management from the start.",
    },
    {
      title: "Sustainable Implementation",
      description:
        "I write modular, type-safe code that prioritizes maintainability and performance. Features are built to evolve without forcing structural rewrites.",
    },
  ];
  return (
    <Box sx={{ width: "100%" }}>
      <SectionHeader color="dark" title="Workflow" subtitle="Process" />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 3, sm: 5 },
          alignItems: "flex-start",
          width: "100%",
        }}
      >
        {workflowSteps.map((step, key) => (
          <WorkflowStep
            key={key}
            title={step.title}
            description={step.description}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Workflow;
