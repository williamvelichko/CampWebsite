/* eslint-disable @next/next/no-img-element */
import React from "react";

let mockPathname = "/";

export const setMockPathname = (pathname: string) => {
  mockPathname = pathname;
};

export const resetMockPathname = () => {
  mockPathname = "/";
};

export const mockUsePathname = () => mockPathname;

type MockLinkProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  "href"
> & {
  children: React.ReactNode;
  href: string | { pathname?: string };
};

export function MockLink({ children, href, ...props }: MockLinkProps) {
  const resolvedHref = typeof href === "string" ? href : href.pathname ?? "";
  const { onClick, ...anchorProps } = props;

  return (
    <a
      href={resolvedHref}
      onClick={(event) => {
        event.preventDefault();
        onClick?.(event);
      }}
      {...anchorProps}
    >
      {children}
    </a>
  );
}

type MockImageProps = Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  alt: string;
  fill?: boolean;
  layout?: string;
  objectFit?: string;
  priority?: boolean;
  src: string | { src: string };
};

export function MockImage({
  alt,
  fill: _fill,
  layout: _layout,
  objectFit: _objectFit,
  priority: _priority,
  src,
  ...props
}: MockImageProps) {
  const resolvedSrc = typeof src === "string" ? src : src.src;

  return <img alt={alt} src={resolvedSrc} {...props} />;
}

export const setWindowWidth = (width: number) => {
  Object.defineProperty(window, "innerWidth", {
    configurable: true,
    value: width,
    writable: true,
  });
  window.dispatchEvent(new Event("resize"));
};

export const setScrollY = (value: number) => {
  Object.defineProperty(window, "scrollY", {
    configurable: true,
    value,
    writable: true,
  });
  window.dispatchEvent(new Event("scroll"));
};
