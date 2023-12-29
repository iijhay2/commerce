import clsx from 'clsx';

export default function LogoIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label={`${process.env.SITE_NAME} logo`}
      viewBox="0 0 40 13"
      {...props}
      className={clsx('w-4 fill-black dark:fill-white', props.className)}
    >
      <image
        href="https://cdn.shopify.com/s/files/1/0669/0203/2616/files/strct-logo_430x.png?v=1703839223"
        height="100%"
        width="100%"
      />
    </svg>
  );
}
