import React, { ReactNode } from 'react';

type ListaProps = {
    children: ReactNode
}

export default function Lista ({ children }:ListaProps) {
    return <ul>MINHA LISTA: {children}</ul>;
}