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
    <main className="middle-pricing">
      <div className="middle-container">
        <div className="section-desktop">
          <Month
            onCheck={(event) => setChange(event.target.checked)}
            check={change}
          />
          <FreePlan />
          <PayGoPlan />
          <MicroPlan check={change} />
          <SmallPlan check={change} />
          <MediumPlan check={change} />
          <Enterprise />
        </div>
        <div className="section-mobile">
          <Month onClick={() => setChange(!change)} />
          <FreePlan />
          <TableBlock name={"one"} />
          <PayGoPlan />
          <TableBlock name={"two"} />
          <MicroPlan />
          <TableBlock name={"three"} />
          <SmallPlan />
          <TableBlock name={"four"} />
          <MediumPlan />
          <TableBlock name={"five"} />
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
