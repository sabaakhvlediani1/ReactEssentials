export default function TabButton({ children, click, isSelected }) {
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} onClick={click}>{children}</button>
    </li>
  );
}
