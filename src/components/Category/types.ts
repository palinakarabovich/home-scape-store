export interface ICategoryProps {
  name: string,
  isSelected?: boolean,
  handleClick?: (cat: string) => void
}