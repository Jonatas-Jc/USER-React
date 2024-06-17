import React from 'react';
import {Button as ButtonMain} from './styles'

export default function Button({children, ...props}){

    return <ButtonMain{...props}>{children}</ButtonMain>
}