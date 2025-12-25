import { getAllEssays } from "@/libs/essays";
import EssayList from "@/components/EssayList";

const EssaysListPage = async () => {
  const essays = await getAllEssays();

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <EssayList essays={essays} />
    </div>
  );
};

export default EssaysListPage;
