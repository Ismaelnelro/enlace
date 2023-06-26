import classNames from 'classnames';
import { ReactNode } from 'react';

export default function Card({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={classNames('p-4  shadow-lg', className)}>{children}</div>;
}
