export const images = [
  "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0zNTctMDEuanBn.jpg",
  "https://images.picxy.com/cache/2020/5/9/f2fab12b20af86e460b0fdfa61db676a.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBC4BOpehL6O8mlELGK7Vhlb0zr6VOR9dzjNPmwGlT638kC4GMwpaVWy_ZwPb8JBv25dA&usqp=CAU",
  "https://t3.ftcdn.net/jpg/06/12/18/52/360_F_612185259_G19ON5CZHjIFWLO0DJd6TKTxrCJC5Bim.jpg",
  "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjExNDItMDE2YS1reW82cXVxZi5qcGc.jpg",
  "https://i.pinimg.com/originals/23/b0/0b/23b00b30dccf2c623ab93e1c264cadbe.jpg",
];

export const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};
