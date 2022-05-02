import { ReactChild, ReactChildren } from 'react';

export type ChildComponent =
  | ReactChild
  | ReactChild[]
  | ReactChildren
  | ReactChildren[];
