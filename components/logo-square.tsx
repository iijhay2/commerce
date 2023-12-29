import clsx from 'clsx';
import LogoIcon from './icons/logo';

export default function LogoSquare({ size }: { size?: 'lg' | undefined }) {
  return (
    <div
      className={clsx('flex flex-none items-center justify-center', {
        'h-[40px] w-[40px]': !size,
        'h-[auto]] w-[100%]': size === 'lg'
      })}
    >
      <LogoIcon
        className={clsx({
          'h-[16px] w-[16px]': !size,
          'h-[auto] w-[100%]': size === 'lg'
        })}
      />
    </div>
  );
}
