import React, { useState } from "react";
import { Month } from "./plans/month/index";
import { FreePlan } from "./plans/free/index";
import { PayGoPlan } from "./plans/paygo/index";
import { MicroPlan } from "./plans/micro/index";
import { SmallPlan } from "./plans/small/index";
import { MediumPlan } from "./plans/medium/index";
import { Enterprise } from "./plans/enterprise/index";
import "./index.css";
import "../../media.css";
import { TableBlock } from "./details";
import { Testimonial } from "./testimonial";
import { FAQblock } from "./faq";
import { SignUp } from "./signup";

export const MainBlock = () => {
  const [change, setChange] = useState(false);
  return (
    <main>
      <div className="middle-pricing">
        <div className="section-desktop">
          <Month onClick={() => setChange(!change)} />
          <FreePlan />
          <PayGoPlan />
          <MicroPlan />
          <SmallPlan />
          <MediumPlan />
          <Enterprise />
        </div>
        <TableBlock />
        <Testimonial />
        <FAQblock />
        <SignUp />
      </div>
    </main>
  );
};
