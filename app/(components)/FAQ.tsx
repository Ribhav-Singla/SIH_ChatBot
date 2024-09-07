import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function FAQ() {
  return (
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="p-2 text-base">Is it accessible?</AccordionTrigger>
          <AccordionContent className="p-2">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="p-2 text-base">Is it accessible?</AccordionTrigger>
          <AccordionContent className="p-2">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="p-2 text-base">Is it accessible?</AccordionTrigger>
          <AccordionContent className="p-2">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

     
    </div>
  );
}

export default FAQ;
