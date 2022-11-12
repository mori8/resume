import * as React from 'react';
import Image from 'next/image';
import classNames from 'classnames';

export interface ITechStackBadgeProps {
  tech: string;
}

export default function TechStackBadge (props: ITechStackBadgeProps) {
  const { tech } = props;
  return (
    <div className={classNames('w-fit h-fit flex flex-row text-[10px] items-center rounded-lg rounded-bl-none px-[8px] py-[2px]', {
      'bg-react': tech === 'React',
      'bg-fastAPI text-white': tech === 'fastAPI',
      'bg-aws text-white': tech === 'AWS',
      'bg-typescript text-white': tech === 'TypeScript',
      'bg-tailwind text-white': tech === 'tailwind',
      'bg-mysql text-white': tech === 'MySQL',
    })}>
      <Image src={`/images/tech/${tech}.svg`} alt={tech} width={12} height={12}/>
      <span className='ml-1'>{tech}</span>
    </div>
  );
}
