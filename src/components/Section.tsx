import { FC, ReactNode } from "react";

const Section: FC<{
  className?: string;
  blackVLine?: boolean;
  children?: ReactNode;
}> = ({ children, className, blackVLine }) => (
  <section
    className={`relative 
px-[5%] lg:px-[7.3%] 
${className ? className : ""}`}
  >
   
    {children}
  </section>
);

export default Section;
