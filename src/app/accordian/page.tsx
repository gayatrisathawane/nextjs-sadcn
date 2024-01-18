import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AccordionPage = () => {
  const FAQ = [
    {
      que: "que1",
      ans: "jd1",
    },
    {
      que: "que2",
      ans: "jd2",
    },
    {
      que: "que3",
      ans: "jd3",
    },
  ];
  return (
    <div className="flex justify-center items-center h-full">
      <main className="w-[500px] p-4">
        {FAQ.map((questions, i) => {
          return (
            <div key={i}>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>{questions.que}</AccordionTrigger>
                  <AccordionContent>
                  {questions.ans}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          );
        })}
      </main>
    </div>
  );
};
export default AccordionPage;
