export default interface ButtonProps {
  text: string;
  onClick: () => void;
  size: "small" | "medium" | "large";
  state: "enabled" | "disabled";
}
