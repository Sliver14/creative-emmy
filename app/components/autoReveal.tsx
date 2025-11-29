"use client";
import React, { ReactNode, isValidElement, cloneElement } from "react";
import Reveal from "./reveal";

interface AutoRevealProps {
  children: ReactNode;
}

export default function AutoReveal({ children }: AutoRevealProps) {
  const wrapChild = (child: ReactNode): ReactNode => {
    if (!isValidElement(child)) return child;

    // Narrow element so TS knows about props + children
    const element = child as React.ReactElement<{ children?: ReactNode }>;

    const newChildren = element.props.children
      ? React.Children.map(element.props.children, wrapChild)
      : element.props.children;

    const cloned = cloneElement(element, {
      ...element.props,
      children: newChildren,
    });

    return <Reveal>{cloned}</Reveal>;
  };

  return <>{React.Children.map(children, wrapChild)}</>;
}
