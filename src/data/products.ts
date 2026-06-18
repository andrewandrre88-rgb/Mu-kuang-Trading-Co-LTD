export const productImages = [
  "mmexport1781702861309.jpg",
  "mmexport1781702866860.jpg",
  "mmexport1781702873986.jpg",
  "mmexport1781702880220.jpg",
  "mmexport1781702886234.jpg",
  "mmexport1781702890365.jpg",
  "mmexport1781702898651.jpg",
  "mmexport1781702904079.jpg",
  "mmexport1781702917989.jpg",
  "mmexport1781702923892.jpg",
  "mmexport1781702930656.jpg",
  "mmexport1781702935064.jpg"
].map(img => `https://raw.githubusercontent.com/andrewandrre88-rgb/Mu-Kuang-images/main/${img}`);

export interface Product {
  id: string;
  src: string;
}

export const products: Product[] = productImages.map((src, index) => ({
  id: (index + 1).toString(),
  src
}));
