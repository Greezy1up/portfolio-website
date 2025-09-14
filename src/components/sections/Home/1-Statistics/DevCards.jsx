//DevCards
import { CreateCard } from './Card';
import CPPimg from '/src/assets/Statistics/DevCards/cpp.png';
import PYimg from '/src/assets/Statistics/DevCards/py.png';
import JSimg from '/src/assets/Statistics/DevCards/js.jpg';
import REACTimg from '/src/assets/Statistics/DevCards/react.png';
import UEimg from '/src/assets/Statistics/DevCards/ue.png';
import LISPimg from '/src/assets/Statistics/DevCards/lisp.png';

export function DevCards() {
  const devCardData = [
    { title: "C++", img: CPPimg, badge: "beginner" },
    { title: "React", img: REACTimg, badge: "beginner" },
    { title: "Python", img: PYimg, badge: "beginner" },
    { title: "Lisp", img: LISPimg, badge: "beginner" },
    { title: "Javascript", img: JSimg, badge: "beginner" },
    { title: "Unreal Engine", img: UEimg, badge: "beginner" },
  ];

  return (
    <div
      className="
grid grid-cols-2 md:grid-cols-3 
    gap-6 
      "
    >
      {devCardData.map((card, index) => (
        <CreateCard key={index} {...card} />
      ))}
    </div>
  ); 
}