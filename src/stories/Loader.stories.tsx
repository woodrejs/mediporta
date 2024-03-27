import { CircularProgressProps } from "@mui/material/CircularProgress";
import { Loader } from "../components/Loader";

export default {
  title: "Components/Loader",
  component: Loader,
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "secondary", "inherit"],
    },
    size: {
      control: "text",
    },
    thickness: {
      control: "number",
      min: 1,
      max: 10,
    },
    variant: {
      control: "radio",
      options: ["determinate", "indeterminate", "static"],
    },
    value: {
      control: "number",
      min: 0,
      max: 100,
    },
  },
};

const Template = (args: CircularProgressProps) => <Loader {...args} />;

export const Default = Template.bind({ color: "primary" });

export const Secondary = Template.bind({ color: "secondary" });

export const CustomSize = Template.bind({ size: "60px" });
