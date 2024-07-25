import React, { ReactNode } from 'react';

export default function Heading({ level = 'h1', children, className }: {level?: string, children?: ReactNode, className?: string}) {
  const Tag = ({ ...props }) => React.createElement(level, props, children);

  return <Tag className={className}>{children}</Tag>;
}
