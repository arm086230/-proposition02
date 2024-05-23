import DatePicker from "./input/datePicker";
import { StoryObj } from "@storybook/react";

const meta = {
  title: "Components/DatePicker",
  component: DatePicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    selectedDate: null,
    placeholderText: "Enter your text",
    disabled: false,
    size: "small",
    onChange: (selectedDate: Date | null) => {
      console.log("Date selected:", selectedDate);
    },
  },
};

export const Medium: Story = {
  args: {
    selectedDate: null,
    placeholderText: "Enter your text",
    disabled: false,
    size: "medium",
    onChange: (selectedDate: Date | null) => {
      console.log("Date selected:", selectedDate);
    },
  },
};

export const Large: Story = {
  args: {
    selectedDate: null,
    placeholderText: "Enter your text",
    disabled: false,
    size: "large",
    onChange: (selectedDate: Date | null) => {
      console.log("Date selected:", selectedDate);
    },
  },
};
