// components/AutoReveal.tsx
"use client";
import React from "react";

import Reveal from "./reveal";
import { ReactNode, isValidElement, cloneElement } from "react";

interface AutoRevealProps {
  children: ReactNode;
}

export default function AutoReveal({ children }: AutoRevealProps) {
  const wrapChild = (child: ReactNode): ReactNode => {
    if (!isValidElement(child)) return child; // ignore text nodes

    // If the child has its own children, recursively wrap them
    const newChildren = child.props.children
      ? React.Children.map(child.props.children, wrapChild)
      : child.props.children;

    // Clone element with wrapped children
    const cloned = cloneElement(child, { ...child.props, children: newChildren });

    // Wrap the element itself in Reveal
    return <Reveal>{cloned}</Reveal>;
  };

  return <>{React.Children.map(children, wrapChild)}</>;
}
