import React, { ReactNode } from 'react';

type ItemProps = {
    children: ReactNode
}

export default function Item ({ children }:ItemProps) {
    return <li> {children}</li>;
}