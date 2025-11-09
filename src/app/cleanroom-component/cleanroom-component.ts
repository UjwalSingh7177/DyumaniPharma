import { Component } from '@angular/core';
interface Product {
  id: number;
  title: string;
  subtitle?: string;
  desc: string;
  img: string;
}

@Component({
  selector: 'app-cleanroom-component',
   standalone: true,
  imports: [],
  templateUrl: './cleanroom-component.html',
  styleUrl: './cleanroom-component.css',
})
export class CleanroomComponent {

   products: Product[] = [
    {
      id: 1,
      title: 'Hardwall Cleanrooms',
      subtitle: 'Rigid construction',
      desc: 'Rigid cleanrooms designed for high-containment GMP pharmaceuticals.',
      img: 'assets/l1.webp'
    },
    {
      id: 2,
      title: 'Softwall Cleanrooms',
      subtitle: 'Flexible solution',
      desc: 'Cost-effective and lightweight modular softwall cleanrooms.',
      img: 'assets/l1.webp'
    },
    {
      id: 3,
      title: 'BioSafe® Wall Panel System',
      subtitle: 'cGMP compliant',
      desc: 'Seamless wall panels compliant with GLP, cGMP & ASTM cleanroom standards.',
      img: 'assets/l1.webp'
    },
    {
      id: 4,
      title: 'BioSafe® Modular Cleanrooms',
      subtitle: 'Fully modular',
      desc: 'Fast & flexible modular cleanrooms for critical environments.',
      img: 'assets/l1.webp'
    },
    {
      id: 5,
      title: 'USP Compounding Cleanrooms',
      subtitle: 'USP certified',
      desc: 'Designed for USP <797>/<800> sterile compounding compliance.',
      img: 'assets/l1.webp'
    }
  ];

  activeId: number | null = null;

  setActive(id: number | null) {
    this.activeId = id;
  }

  toggleActive(id: number) {
    this.activeId = this.activeId === id ? null : id;
  }

}
