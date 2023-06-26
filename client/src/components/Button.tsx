import classNames from 'classnames';

type ButtonProps = {
  type: 'button' | 'submit' | 'reset';
  children: string;
  onClick?: () => void;
  className?: string;
};
export default function Button({ type, onClick, className, children }: ButtonProps) {
  return (
    <>
      <button
        className={classNames(
          className,
          'bg-[#FF983D] rounded-full focus:outline-none focus:shadow-outline',
        )}
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
}
