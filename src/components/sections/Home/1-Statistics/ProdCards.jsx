//ProdCards
import { CreateCard } from './Card';
import PRimg from '/src/assets/Statistics/ProdCards/PR.png';
import AEimg from '/src/assets/Statistics/ProdCards/AE.png';
import PSimg from '/src/assets/Statistics/ProdCards/ps.png';
import BLENDimg from '/src/assets/Statistics/ProdCards/blender.png';
import ILLUimg from '/src/assets/Statistics/ProdCards/illustrator.png';
import FIGimg from '/src/assets/Statistics/ProdCards/figma.png';

export function ProdCards() {
  const prodCardData = [
    { title: "Premiere Pro", img: PRimg, badge: "master" },
    { title: "Illustrator", img: ILLUimg, badge: "master" },
    { title: "After Effects", img: AEimg, badge: "master" },
    { title: "Figma", img: FIGimg, badge: "intermediate" },
    { title: "Photoshop", img: PSimg, badge: "master" },
    { title: "Blender", img: BLENDimg, badge: "intermediate" },
  ];

  return (
    <div
      className="
grid grid-cols-2 md:grid-cols-3 
    gap-8 
      "
    >
      {prodCardData.map((card, index) => (
        <CreateCard key={index} {...card} />
      ))}
    </div>
  );
}