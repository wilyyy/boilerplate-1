// https://www.smashingmagazine.com/2020/05/reusable-react-components-tailwind/

interface Props {
  children: React.ReactNode;
  color?: string;
  hoverColor?: string;
  onButtonClick?: React.MouseEventHandler;
}

export default function ButtonTest({
  children,
  color = 'bg-blue-500',
  hoverColor = 'bg-blue-700',
  onButtonClick,
}: Props): JSX.Element {
  return (
    <button
      className={`${color} hover:${hoverColor} text-white font-bold py-2 px-4 rounded`}
      onClick={onButtonClick}
    >
      {children}
    </button>
  );
}
