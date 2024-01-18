import { Button } from "@/components/ui/button";

const chai = () => {
  return (
    <main className="h-full flex justify-center items-center flex-col">
      <div>
        <h1>chai aur code </h1>
       
      </div>
      <Button variant="outline">shadcn button </Button>
      <button className="px-4 py-2 bg-blue-500 rounded my-2 hover:bg-blue-700 text-light">test button</button>
    </main>
  );
};
export default chai;
