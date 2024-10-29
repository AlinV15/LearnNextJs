
import { Aladin } from 'next/font/google';
import { kill } from 'process';
import { lazy } from 'react';
import { Lusitana } from 'next/font/google';
import { Rubik } from 'next/font/google';


export const aladin = Aladin({weight:['400'],subsets:['latin'] });
export const lusitana = Lusitana({weight:['400'], subsets:['latin']});
export const rubik = Rubik({weight:['400'], subsets:['latin']} );