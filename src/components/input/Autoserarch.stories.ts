import { Meta, StoryObj } from "@storybook/react";

import Autosearch from "./autoserarch";

const meta = {
  title: "Components/Autosearch",
  component: Autosearch,

  parmeters: {
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
    type: "text",
    placeholder: "Enter your text",
    value: "",
    disabled: false,
    size: "small",
  },
};

export const Disabled: Story = {
  args: {
    type: "text",
    placeholder: "Enter your text",
    value: "Disabled Input",
    disabled: true,
    size: "medium",
  },
};
