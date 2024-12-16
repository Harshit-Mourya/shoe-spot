const products = [
  {
    title: "Classic White Sneakers",
    price: 75.0,
    description: "Timeless white sneakers that pair well with any outfit.",
    category: "Sneakers",
    imgSrc:
      "https://images.unsplash.com/photo-1695073621086-aa692bc32a3d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xhc3NpYyUyMHdoaXRlJTIwc25lYWtlcnN8ZW58MHx8MHx8fDA%3D",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Leather Loafers",
    price: 120.0,
    description: "Stylish leather loafers perfect for formal occasions.",
    category: "Loafers",
    imgSrc:
      "https://images.unsplash.com/photo-1616406432452-07bc5938759d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TGVhdGhlciUyMExvYWZlcnN8ZW58MHx8MHx8fDA%3D",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Comfortable Sandals",
    price: 40.0,
    description: "Lightweight sandals for casual summer outings.",
    category: "Sandals",
    imgSrc:
      "https://img.freepik.com/premium-photo/elegant-sandals-summer-evenings_1079150-92036.jpg?ga=GA1.1.1371228033.1729690559&semt=ais_hybrid",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Cozy Slides",
    price: 30.0,
    description: "Soft slides that are easy to slip on for lounging.",
    category: "Slides",
    imgSrc:
      "https://img.freepik.com/premium-photo/slippers-soft-orange-bath-mat-flat-lay_956920-33049.jpg?ga=GA1.1.1371228033.1729690559&semt=ais_hybrid",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Classic Oxfords",
    price: 150.0,
    description: "Elegant oxfords that elevate your formal wardrobe.",
    category: "Oxfords",
    imgSrc:
      "https://img.freepik.com/premium-photo/two-brown-leather-brogue-oxfords-brown-background_83925-24854.jpg?ga=GA1.1.1371228033.1729690559&semt=ais_hybrid",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Stylish Derby Shoes",
    price: 160.0,
    description: "Versatile Derby Shoes suitable for any occasion.",
    category: "Derby",
    imgSrc:
      "https://img.freepik.com/free-photo/red-leather-shoes-stand-light-wooden-floor_8353-691.jpg?ga=GA1.1.1371228033.1729690559&semt=ais_hybrid",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Traditional Mojaris",
    price: 50.0,
    description: "Handcrafted mojaris that blend tradition with style.",
    category: "Mojaris",
    imgSrc:
      "https://img.freepik.com/premium-photo/incorporate-traditional-footwear-like-mojaris-j-generative-ai_1198270-69201.jpg?ga=GA1.1.1371228033.1729690559&semt=ais_hybrid",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "High-Performance Sports Shoes",
    price: 140.0,
    description:
      "Designed for athletes, these shoes offer maximum comfort and support.",
    category: "Sports",
    imgSrc:
      "https://img.freepik.com/premium-photo/man-s-jogging-shoes-isolated-white-contains-clipping-path_1028938-278938.jpg?ga=GA1.1.1371228033.1729690559&semt=ais_hybrid",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Premium Leather Boots",
    price: 200.0,
    description: "Durable leather boots perfect for winter.",
    category: "Boots",
    imgSrc:
      "https://media.istockphoto.com/id/1191205935/photo/man-fashion-leather-brown-boot-isolated-on-a-white-background.jpg?s=612x612&w=0&k=20&c=sU7fCIYj_VmAjopd3X1D7U8H196Gj2ssd5hT3GFRo8Q=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Fashionable Ankle Boots",
    price: 90.0,
    description: "Chic ankle boots to elevate your casual look.",
    category: "Boots",
    imgSrc:
      "https://media.istockphoto.com/id/1388581381/photo/detail-shot-of-a-latin-girl-in-black-synthetic-leather-ankle-boots-posing-on-a-balcony-with.jpg?s=612x612&w=0&k=20&c=dryey5pOyuZoNZPPR1Om1dMI07B1gSdtlk6pU12WeBw=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Running Sneakers",
    price: 120.0,
    description: "Lightweight and breathable running shoes.",
    category: "Sneakers",
    imgSrc:
      "https://media.istockphoto.com/id/956501428/photo/sport-shoes-on-isolated-white-background.jpg?s=612x612&w=0&k=20&c=BdklqnfGUvf02-2CxYsw-AnrbE3e-B5zhE9JQILEEW4=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Casual Canvas Shoes",
    price: 55.0,
    description: "Versatile canvas shoes for everyday wear.",
    category: "Sneakers",
    imgSrc:
      "https://media.istockphoto.com/id/1246940711/photo/pair-of-classic-blue-gumshoes-or-sneakers-with-white-shoe-laces-on-a-textured-yellow.jpg?s=612x612&w=0&k=20&c=SNIZ8dI9Fw0FUOckfuj9BIToOfYAeBCaPFzaI15Az2s=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Chic Espadrilles",
    price: 70.0,
    description: "Stylish espadrilles for a summer outing.",
    category: "Sandals",
    imgSrc:
      "https://media.istockphoto.com/id/913481524/photo/stripped-espadrilles-isolated.jpg?s=612x612&w=0&k=20&c=8czTHEPQD9y84fF4J7SDDUzbW4XJP4OIDmBlovNgIPI=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Formal Slip-On Shoes",
    price: 685.0,
    description: "Elegant slip-ons suitable for any formal event.",
    category: "Loafers",
    imgSrc:
      "https://media.istockphoto.com/id/90627668/photo/black-shoes.jpg?s=612x612&w=0&k=20&c=_niYb_0Y2_wz4mPRc9pyvdSHvwGAgOwCNvhM6lJnHvY=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Rugged Hiking Shoes",
    price: 150.0,
    description: "Sturdy shoes designed for outdoor adventures.",
    category: "Hiking",
    imgSrc:
      "https://media.istockphoto.com/id/1498140142/photo/hiking-boots-and-knitted-alpaca-socks.jpg?s=612x612&w=0&k=20&c=p8aY3Q6Dj0m23SDtskiQ4vXzqxz7totEEKe8kKWsIUQ=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Trendy Platform Sneakers",
    price: 95.0,
    description: "Stylish platform sneakers for a bold look.",
    category: "Sneakers",
    imgSrc:
      "https://media.istockphoto.com/id/1223172726/photo/shoes-on-the-platform-fashionable-modern-shoes-the-trend-and-style-powerful-solid-sole.jpg?s=612x612&w=0&k=20&c=TvyBFAKAKW9M1RFZp_zGrVFmZ8p1fHDY_uYeLE0mwAg=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Luxury Heels",
    price: 250.0,
    description: "Sophisticated heels for special occasions.",
    category: "Heels",
    imgSrc:
      "https://media.istockphoto.com/id/517815441/photo/ivory-female-wedding-footwear.jpg?s=612x612&w=0&k=20&c=hghJ8sCeu3zpsnJ5c-0zsHIjbmI6OQqEpnRja5yhq-M=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Comfortable Ballet Flats",
    price: 75.0,
    description: "Classic ballet flats for everyday wear.",
    category: "Flats",
    imgSrc:
      "https://media.istockphoto.com/id/669217592/photo/dark-blue-ladies-flat-shoes-on-white-wooden-background.jpg?s=612x612&w=0&k=20&c=1Vw-V3F3NTzh80luo0_RgEXhw5gEFBP3TQSIRtgN9is=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Stylish Combat Boots",
    price: 180.0,
    description: "Edgy combat boots for a trendy look.",
    category: "Boots",
    imgSrc:
      "https://media.istockphoto.com/id/871468912/photo/black-coarse-boots.jpg?s=612x612&w=0&k=20&c=qHEndXylvcgkv0hsrVjOydTGr0ceQaO-v69lW2eEbcs=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Sporty Sandals",
    price: 50.0,
    description: "Comfortable sandals for sports activities.",
    category: "Sandals",
    imgSrc:
      "https://media.istockphoto.com/id/477535296/photo/men-sandals.jpg?s=612x612&w=0&k=20&c=A-C1Iy2xmT4-CddVzoC3ETbcpw4__Z_5NeHMzR0CKRI=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Retro Running Shoes",
    price: 110.0,
    description: "Vintage-style running shoes with modern comfort.",
    category: "Sneakers",
    imgSrc:
      "https://media.istockphoto.com/id/1170526181/photo/fashion-running-sneaker-shoes.jpg?s=612x612&w=0&k=20&c=XpsQMGqPc6mDsDNXQYqTx8jlZiar2ryWbaOQCGkck9w=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Elegant Evening Sandals",
    price: 130.0,
    description: "Beautiful sandals for evening events.",
    category: "Sandals",
    imgSrc:
      "https://media.istockphoto.com/id/825906416/photo/female-blue-and-white-sandal-on-black-background.jpg?s=612x612&w=0&k=20&c=rwCh59lGhK2QncIF4ygH_Zol9EMP0Uy_U-ynT3hO6XI=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Stylish Clogs",
    price: 660.0,
    description: "Comfortable clogs for casual outings.",
    category: "Clogs",
    imgSrc:
      "https://media.istockphoto.com/id/1160549685/photo/mens-black-rubber-slippers.jpg?s=612x612&w=0&k=20&c=6lD4lOKXdZNzluGk-nd3EWRi6gLWd1cXOBadsQ7y2cY=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Classic Brogues",
    price: 170.0,
    description: "Timeless brogues for formal and casual wear.",
    category: "Oxfords",
    imgSrc:
      "https://media.istockphoto.com/id/892006776/photo/classic-brown-mans-leather-shoes.jpg?s=612x612&w=0&k=20&c=i-nrRJZw4VCL2WMVfbVqKoFAFD6Li4xkwX3DE5eSSmE=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Designer Sneakers",
    price: 999.0,
    description: "High-end sneakers that make a statement.",
    category: "Sneakers",
    imgSrc:
      "https://media.istockphoto.com/id/1073976878/photo/fashionable-golden-sneakers-in-metallic-design.jpg?s=612x612&w=0&k=20&c=_o0omotgblhchNksiAEqSacsNPYpJV1ktmpsMZi6GAI=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Luxury Boots",
    price: 750.0,
    description: "Premium quality boots for lasting comfort.",
    category: "Boots",
    imgSrc:
      "https://media.istockphoto.com/id/2164569790/photo/brown-color-leather-mens-shoes-on-white-background.jpg?s=612x612&w=0&k=20&c=ClnRUr5hjfDHsjxawhYPRYselTQLn56Z9S_DW1J9w-I=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Casual Dress Shoes",
    price: 300.0,
    description: "Comfortable dress shoes for business and casual wear.",
    category: "Oxfords",
    imgSrc:
      "https://media.istockphoto.com/id/679539190/photo/indian-made-mens-shoes.jpg?s=612x612&w=0&k=20&c=1wTYVNCgSpNcnzfLxPzjfd1swEWXnUZHKzikNupEaWk=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "High-Performance Running Shoes",
    price: 400.0,
    description: "Designed for serious runners with advanced cushioning.",
    category: "Sports",
    imgSrc:
      "https://img.freepik.com/premium-photo/highperformance-running-shoes-bright-stylish-athletic-footwear_606187-6300.jpg?w=740",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Italian Leather Loafers",
    price: 599.0,
    description: "Exquisite loafers crafted from fine Italian leather.",
    category: "Loafers",
    imgSrc:
      "https://media.istockphoto.com/id/1395863907/photo/new-coin-loafers.jpg?s=612x612&w=0&k=20&c=gM0t1a5hTS0LRP3-qs3HVCSCDg7ZiprWBS0ZUWhGmUM=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Classic Trench Boots",
    price: 750.0,
    description: "Stylish trench boots that combine fashion and functionality.",
    category: "Boots",
    imgSrc:
      "https://media.istockphoto.com/id/1366834421/photo/stylish-woman-wearing-beige-coat-and-black-boots.jpg?s=612x612&w=0&k=20&c=341j9ewjzm5UGZC5GElWvR9LSsYVFXlxKz3ZlkYpjBY=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Premium Sports Sneakers",
    price: 650.0,
    description: "Top-tier sneakers engineered for performance.",
    category: "Sneakers",
    imgSrc:
      "https://media.istockphoto.com/id/673187302/photo/running-shoes-sneakers-or-trainers-isolated-on-white.jpg?s=612x612&w=0&k=20&c=ggn7tT0fCXZnF-Yc-2rbEPErqDPAMcmk9lj24NVW98A=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Luxury Hiking Boots",
    price: 850.0,
    description: "Rugged boots designed for serious outdoor enthusiasts.",
    category: "Hiking",
    imgSrc:
      "https://media.istockphoto.com/id/504862184/photo/walking-shoes-all-terrain-shoes.jpg?s=612x612&w=0&k=20&c=jAT-yzYc7becDAVEJuoDOOhgm9TByPXF65VsMYqOESI=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Stylish Formal Shoes",
    price: 999.0,
    description: "Elegant shoes that complete any formal outfit.",
    category: "Oxfords",
    imgSrc:
      "https://media.istockphoto.com/id/812006616/photo/mens-shoe-isolated-on-gray.jpg?s=612x612&w=0&k=20&c=V_5t-jkUBYrAZcXTeBPg9l_UjI17rXTagpVEq4A79N8=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  // Loafers
  {
    title: "Navy Suede Loafers",
    price: 130.0,
    description: "Luxurious navy suede loafers for a sophisticated look.",
    category: "Loafers",
    imgSrc:
      "https://media.istockphoto.com/id/471349778/photo/single-blue-suede-mens-shoe-on-concrete-ground.jpg?s=612x612&w=0&k=20&c=8JaYxjt6DdknWEFCCKJtidwmKrlF33-mlaPC-pqCcRk=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Brown Leather Loafers",
    price: 140.0,
    description: "Classic brown leather loafers, perfect for any occasion.",
    category: "Loafers",
    imgSrc:
      "https://media.istockphoto.com/id/1151846448/photo/mens-footwear-concepts-pair-of-stylish-brown-penny-loafer-shoes-placed-on-straw-surface.jpg?s=612x612&w=0&k=20&c=XVPwwfd9zLahqvyoooDIp5XWpX8rJX4XF4eJVB8fvGE=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Textured Black Loafers",
    price: 120.0,
    description: "Stylish textured black loafers for a modern touch.",
    category: "Loafers",
    imgSrc:
      "https://media.istockphoto.com/id/1144711089/photo/black-leather-shoe.jpg?s=612x612&w=0&k=20&c=I1iddtZ-Z_XO2pQUVswlsq2YsVJ0lf7sS4NWmV8L_Qc=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Beige Casual Loafers",
    price: 110.0,
    description: "Comfortable beige loafers for casual wear.",
    category: "Loafers",
    imgSrc:
      "https://media.istockphoto.com/id/1307080072/photo/shoes.jpg?s=612x612&w=0&k=20&c=L-8YkKHda-WillHbknrSGrMHs0rHPYVR8-ogbfFnS9E=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },

  // Sandals
  {
    title: "Leather Ankle Strap Sandals",
    price: 65.0,
    description: "Elegant leather sandals with ankle straps.",
    category: "Sandals",
    imgSrc:
      "https://media.istockphoto.com/id/470355465/photo/pair-of-female-sandals.jpg?s=612x612&w=0&k=20&c=ymqGa0xz4ySIpuhwBeZWGyktfflIIzG4UMbC84yw_aM=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Casual Flip-Flops",
    price: 25.0,
    description: "Simple and lightweight flip-flops for the beach.",
    category: "Sandals",
    imgSrc:
      "https://media.istockphoto.com/id/482667014/photo/blue-flip-flop-on-white-background-shot-in-studio.jpg?s=612x612&w=0&k=20&c=GGtBsjrDShEaQvCYqvK7HYzd1Gt9H05iOz1pld1O0qk=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Platform Sandals",
    price: 80.0,
    description: "Trendy platform sandals for added height.",
    category: "Sandals",
    imgSrc:
      "https://media.istockphoto.com/id/1325826610/photo/female-feet-in-pink-sandals-on-on-concrete-staircase-background-close-up.jpg?s=612x612&w=0&k=20&c=4YFjpsgQmpLnY59d7TkxwpNRfaTmLz_ucBIAhmK6I-w=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Sporty Outdoor Sandals",
    price: 55.0,
    description: "Durable sandals designed for outdoor activities.",
    category: "Sandals",
    imgSrc:
      "https://media.istockphoto.com/id/90167902/photo/sport-sandals.jpg?s=612x612&w=0&k=20&c=6o5oqj_3pT2OMhUDV4vHavhnOuCYVzj9X9yDdNXJAV0=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },

  // Slides
  {
    title: "Classic Black Slides",
    price: 30.0,
    description: "Comfortable black slides for indoor or outdoor use.",
    category: "Slides",
    imgSrc:
      "https://media.istockphoto.com/id/2164041559/photo/black-sandals-or-slippers.jpg?s=612x612&w=0&k=20&c=gObGz-25NM4kwts3HVax1AGI8xKkBSnxPLc1AEKm45I=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Cozy Fleece Slides",
    price: 25.0,
    description: "Soft fleece-lined slides for ultimate comfort.",
    category: "Slides",
    imgSrc:
      "https://media.istockphoto.com/id/1051132308/photo/bath-slippers-and-bathrobe.jpg?s=612x612&w=0&k=20&c=dcnCKVlta2-H8behg8ke6djKgbHQ66EIq3yPm0mB8rs=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Colorful Printed Slides",
    price: 35.0,
    description: "Fun printed slides for a playful touch.",
    category: "Slides",
    imgSrc:
      "https://www.jiomart.com/images/product/original/450146967_green/printed-slides-model4-450146967_green-4-202207281510.jpg?im=Resize=(500,630)",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Rubber Pool Slides",
    price: 20.0,
    description: "Waterproof slides perfect for the pool.",
    category: "Slides",
    imgSrc:
      "https://media.istockphoto.com/id/1403864896/photo/black-slide-sandals-on-wooden-floor.jpg?s=612x612&w=0&k=20&c=FYgKMvgzV4V6mv7cJ1Y5MFccErRxio7xNV0tKm9kCJg=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Elegant Evening Slides",
    price: 70.0,
    description: "Stylish slides for evening outings.",
    category: "Slides",
    imgSrc:
      "https://media.istockphoto.com/id/1753465308/photo/wedding-day-with-brides-shoes.jpg?s=612x612&w=0&k=20&c=ra-pgnmJraqOXimlDBvcvnxGjGQb17vMMpP3sXGDOno=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Basic White Slides",
    price: 22.0,
    description: "Simple white slides that go with any outfit.",
    category: "Slides",
    imgSrc:
      "https://media.istockphoto.com/id/139874549/photo/spa-resort-close-up-of-a-sandal.jpg?s=612x612&w=0&k=20&c=seE8xJ6BB3HhwH4G42sGzvzpHtKZ7b89YrLyl2vEnLo=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },

  // Flats
  {
    title: "Pointed Toe Flats",
    price: 55.0,
    description: "Chic pointed toe flats for a polished look.",
    category: "Flats",
    imgSrc:
      "https://media.istockphoto.com/id/1517845908/photo/close-up-shot-of-black-pointed-toe-leather-ballet-flats-with-wrinkled-and-ruffle-details.jpg?s=612x612&w=0&k=20&c=34pgNvnlqfAcIbJ-PWVQzzyiN_bKSvEPS40KHbM_XDM=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Ballet Style Flats",
    price: 150.0,
    description: "Classic ballet flats with a comfortable fit.",
    category: "Flats",
    imgSrc:
      "https://media.istockphoto.com/id/2100952700/photo/womens-dancing-shoes-stand-on-the-table.jpg?s=612x612&w=0&k=20&c=olXgrFB-H6Bo_f8ZSHGTO3Xkn79rRtniCc_x5d6hbKM=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Casual Canvas Flats",
    price: 40.0,
    description: "Versatile canvas flats for everyday wear.",
    category: "Flats",
    imgSrc:
      "https://media.istockphoto.com/id/1996597641/photo/stylish-rag-womens-shoes-on-a-wooden-background.jpg?s=612x612&w=0&k=20&c=OOiy7ZOZdh2Q7vCrChBaSFdpdYxDbVczTN9liAq5teU=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Decorative Embellished Flats",
    price: 560.0,
    description: "Elegant flats with decorative details.",
    category: "Flats",
    imgSrc:
      "https://media.istockphoto.com/id/467708748/photo/old-woman-shoes.jpg?s=612x612&w=0&k=20&c=7DQXlNhQQX15bfrN8koGW5soOcMfWM4wFSbtMJkyasI=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },

  // Clogs
  {
    title: "Classic Wooden Clogs",
    price: 375.0,
    description: "Traditional wooden clogs for comfort.",
    category: "Clogs",
    imgSrc:
      "https://media.istockphoto.com/id/1186743220/photo/dutch-wooden-clogs-isolated-on-the-white-background.jpg?s=612x612&w=0&k=20&c=90CB4_chHeIBMb9Bl13JRIhN9repj5IqFokBnvhZ0T8=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Fashionable Clogs",
    price: 80.0,
    description: "Stylish clogs with a modern design.",
    category: "Clogs",
    imgSrc:
      "https://media.istockphoto.com/id/1422468704/photo/clog-shoes.jpg?s=612x612&w=0&k=20&c=mkUtXcR8GBXmGZHj5klmiYA-CLBgUTQ18ZvXf_PCb5c=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Comfort Clogs",
    price: 70.0,
    description: "Soft clogs perfect for daily wear.",
    category: "Clogs",
    imgSrc:
      "https://media.istockphoto.com/id/1205241313/photo/childrens-purple-rubber-sandals-isolated-on-the-white-background.jpg?s=612x612&w=0&k=20&c=I4-LRGcdX_zdvbusIh6vxtMaJRD7xwRMoi8IlfZUdt8=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Sporty Clogs",
    price: 65.0,
    description: "Durable clogs suitable for outdoor activities.",
    category: "Clogs",
    imgSrc:
      "https://media.istockphoto.com/id/1504072661/photo/rubber-clog-shoes.jpg?s=612x612&w=0&k=20&c=9TNxVvXok4LKjyF_AHjT7BHdeA3R0TkZH62e1UHlbEM=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Fashion-Forward Clogs",
    price: 85.0,
    description: "Trendy clogs that make a statement.",
    category: "Clogs",
    imgSrc:
      "https://media.istockphoto.com/id/1297022136/photo/brown-rubber-sandals-on-black-background.jpg?s=612x612&w=0&k=20&c=UcVQuGLcVGI4RXjbhctLUdI8tjt_sbhiljZu2NzbJxg=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },

  // Boots
  {
    title: "Stylish Ankle Boots",
    price: 150.0,
    description: "Trendy ankle boots that add flair to any outfit.",
    category: "Boots",
    imgSrc:
      "https://media.istockphoto.com/id/1327852720/photo/stock-photo-of-classic-dark-brown-color-male-leather-shoes-isolated-on-blur-background-at.jpg?s=612x612&w=0&k=20&c=n3ZUxdpHj0pXKrXdgzW8sudF7PC8CDkvYikXTKQPUPU=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Warm Winter Boots",
    price: 200.0,
    description: "Insulated boots designed to keep your feet warm.",
    category: "Boots",
    imgSrc:
      "https://media.istockphoto.com/id/183022620/photo/winter-boots.jpg?s=612x612&w=0&k=20&c=rET3fEge-q7B25WFQRL5Zbn8bfsaEF9JqqvVlUHL1Yo=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },

  // Oxfords
  {
    title: "Classic Black Oxfords",
    price: 130.0,
    description: "Timeless black oxfords for formal occasions.",
    category: "Oxfords",
    imgSrc:
      "https://media.istockphoto.com/id/2075320084/photo/men-fashion-black-derby-shoes-leather-on-the-floor.jpg?s=612x612&w=0&k=20&c=1gyZRGjBDSM2mAsTnWtu4zWhShPqT9X3gIQzzVhN96k=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Brown Brogue Oxfords",
    price: 140.0,
    description: "Elegant brown brogue oxfords with intricate detailing.",
    category: "Oxfords",
    imgSrc:
      "https://media.istockphoto.com/id/1743109738/photo/male-luxury-shoes-over-retro-carpet-background.jpg?s=612x612&w=0&k=20&c=4DrZsiDesb4rvk0RF0TkyTy2-8t3aF5v90-ALETkQJQ=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Suede Oxfords",
    price: 150.0,
    description: "Luxurious suede oxfords for a stylish look.",
    category: "Oxfords",
    imgSrc:
      "https://media.istockphoto.com/id/1222742198/photo/blue-suede-men-shoes-isolated-on-a-white-background-fashion-advertising-shoes-photos.jpg?s=612x612&w=0&k=20&c=st63_7fHqrAN-MvYnqugZQ7lrPGFNln8HGK7o43Pm40=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },

  // Derby Shoes
  {
    title: "Classic Black Derby Shoes",
    price: 160.0,
    description: "Versatile black Derby Shoes suitable for any occasion.",
    category: "Derby",
    imgSrc:
      "https://media.istockphoto.com/id/1191208703/photo/men-fashion-leather-black-shoes-isolated-on-a-white-background.jpg?s=612x612&w=0&k=20&c=3HiBLzUrJps8MKnRfCGro7FOQgQCS_IIrSYx1UbAmhQ=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Brown Leather Derby Shoes",
    price: 170.0,
    description: "Stylish brown leather Derby Shoes for a sophisticated look.",
    category: "Derby",
    imgSrc:
      "https://media.istockphoto.com/id/943339484/photo/male-brown-leather-shoe-on-white-background-isolated-product-comfortable-footwear.jpg?s=612x612&w=0&k=20&c=vBj-cEhzAxsi8ufrcfybl6TkP67BsoljY2zVDsMqx0E=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Casual Suede Derby Shoes",
    price: 150.0,
    description: "Comfortable suede Derby Shoes for casual wear.",
    category: "Derby",
    imgSrc:
      "https://media.istockphoto.com/id/2078763461/photo/suede-desert-boots-on-white-background.jpg?s=612x612&w=0&k=20&c=uRFBmurMENV-zHu5X6md07EKuP1WJmdbBfDmZPoefjU=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Modern Derby Shoes",
    price: 180.0,
    description: "Contemporary Derby Shoes with a unique design.",
    category: "Derby",
    imgSrc:
      "https://media.istockphoto.com/id/970236000/photo/male-brown-leather-elegante-shoes.jpg?s=612x612&w=0&k=20&c=4rvniRmKVEnHwmYmlnlh8Uqz4fXqzeCnAxaCpxdcDaI=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Dressy Black Derby Shoes",
    price: 190.0,
    description: "Elegant black Derby Shoes for formal events.",
    category: "Derby",
    imgSrc:
      "https://media.istockphoto.com/id/1290261047/photo/mens-black-leather-shoes-isolated-on-background.jpg?s=612x612&w=0&k=20&c=GSOFksfTl5Rbtj85jw5Re6kjq__10KfFg3F5lv3LveU=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },

  // Heels
  {
    title: "Classic Stiletto Heels",
    price: 100.0,
    description: "Timeless stiletto heels that elevate any outfit.",
    category: "Heels",
    imgSrc:
      "https://media.istockphoto.com/id/1316220890/photo/black-female-high-heel-shoes-isolated-on-white.jpg?s=612x612&w=0&k=20&c=RwC7JKDCyq36ug_AFjLg2aBe4Y0PCcrZHGU6LGSmKRM=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Chunky Heels",
    price: 390.0,
    description: "Comfortable chunky heels for all-day wear.",
    category: "Heels",
    imgSrc:
      "https://media.istockphoto.com/id/2154456729/photo/black-high-heel-shoes-on-split-white-and-purple-background-fashion-footwear-stylish-design.jpg?s=612x612&w=0&k=20&c=QcgT03bUpOzBDeNgCa2bjYu2VLU-cFyd7vyr7LdCM80=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Elegant Wedge Heels",
    price: 110.0,
    description: "Stylish wedge heels for a chic look.",
    category: "Heels",
    imgSrc:
      "https://media.istockphoto.com/id/1976212272/photo/womens-wedge-sandals-with-high-heels.jpg?s=612x612&w=0&k=20&c=gKgK168NaJ0YQdQsBrbEG_UNTv1HMK96k4xh4pq7YTY=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Platform Heels",
    price: 120.0,
    description: "Trendy platform heels for added height and style.",
    category: "Heels",
    imgSrc:
      "https://media.istockphoto.com/id/185285860/photo/pidgeon-toed-feet-in-tall-black-platform-shoes.jpg?s=612x612&w=0&k=20&c=mrv0x4hDxSdLWuV8Jx8f2GEywC2lVZXcNrc1IufBQls=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Classic Pump Heels",
    price: 130.0,
    description: "Elegant pump heels for formal occasions.",
    category: "Heels",
    imgSrc:
      "https://media.istockphoto.com/id/803300026/photo/pink-high-heels.jpg?s=612x612&w=0&k=20&c=aS1c7tjwb3X4FSRtRbohmA6IdZwpR0yrYkPuN5itXLk=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Strappy Heels",
    price: 140.0,
    description: "Chic strappy heels for a night out.",
    category: "Heels",
    imgSrc:
      "https://media.istockphoto.com/id/171237649/photo/elegant-high-heels-sandals-with-straps-and-rhinestones.jpg?s=612x612&w=0&k=20&c=baN2Yy4Invt_mqn_jzpScEj8T1xAeGsgHl75F_fDqiQ=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },

  // Mojaris
  {
    title: "Traditional Mojaris",
    price: 350.0,
    description: "Handcrafted mojari shoes with intricate designs.",
    category: "Mojaris",
    imgSrc:
      "https://media.istockphoto.com/id/1185904084/photo/krafto-mens-gold-glitz-mono-rhinestone-mojaris-in-the-indian-wedding.jpg?s=612x612&w=0&k=20&c=mPPiT1PTL0Bn0GIUaYQl4gM04XgRHUaUgo5Ixr--pHQ=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Embroidered Mojaris",
    price: 60.0,
    description: "Beautifully embroidered mojari shoes for festive occasions.",
    category: "Mojaris",
    imgSrc:
      "https://media.istockphoto.com/id/1021556736/photo/traditional-korean-crafts.jpg?s=612x612&w=0&k=20&c=RPGWqdmiEcomCEotp0oDjEGwqDBqZ3EHvaS2zqwU8HU=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Modern Style Mojaris",
    price: 70.0,
    description: "Contemporary mojari shoes with a stylish twist.",
    category: "Mojaris",
    imgSrc:
      "https://media.istockphoto.com/id/1957185991/photo/image-of-indian-groom-shoes.jpg?s=612x612&w=0&k=20&c=4BUjGWaeOJuZFJkUl74iDLuwAH5uJPXetS8nhxZEO50=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Leather Mojaris",
    price: 80.0,
    description: "Durable leather mojari shoes for daily wear.",
    category: "Mojaris",
    imgSrc:
      "https://www.kraftojodhpur.com/cdn/shop/products/JMOJG5_1.jpg?v=1658497881",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Beaded Mojaris",
    price: 90.0,
    description: "Stunning beaded mojari shoes for special occasions.",
    category: "Mojaris",
    imgSrc:
      "https://media.istockphoto.com/id/1285676774/photo/female-designer-jutti.jpg?s=612x612&w=0&k=20&c=XwJ30PJDAexTR89LW_WUiGP5T0tWHMxpvgpwYOmld2o=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },

  // Sports Shoes
  {
    title: "Running Sports Shoes",
    price: 90.0,
    description: "Lightweight shoes designed for running.",
    category: "Sports",
    imgSrc:
      "https://media.istockphoto.com/id/1174497377/photo/a-side-view-of-purple-and-orange-trainers.jpg?s=612x612&w=0&k=20&c=V-k0RwCLcfq4twz2XLPdLJLMFreN4q_FVWXQWBWBKcw=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Basketball Sports Shoes",
    price: 120.0,
    description: "High-performance shoes for basketball players.",
    category: "Court",
    imgSrc:
      "https://media.istockphoto.com/id/1256059233/photo/side-view-of-a-high-sneaker-with-red-and-black-accents.jpg?s=612x612&w=0&k=20&c=zQzuXkMWf7KHDXqZ8nBYZKRYK2k4DG1c0Kvgkqz-ZNM=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Soccer Sports Shoes",
    price: 110.0,
    description: "Durable shoes designed for soccer gameplay.",
    category: "Court",
    imgSrc:
      "https://media.istockphoto.com/id/121490520/photo/pair-of-black-athletic-shoes-on-a-white-background.jpg?s=612x612&w=0&k=20&c=zUSw8K1S2J1XVbMOADM4HYVv_fPZ_hEFlQ34kUf1_pw=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Tennis Sports Shoes",
    price: 95.0,
    description: "Optimal grip shoes for tennis courts.",
    category: "Court",
    imgSrc:
      "https://media.istockphoto.com/id/1059958420/photo/gray-sneakers-with-red-laces-on-a-white-background.jpg?s=612x612&w=0&k=20&c=7l1NETfqJdeFdX6QNN9u2Qw0AKAvA6HwT1UB0hYkEUw=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },

  // Walking Shoes
  {
    title: "Comfort Walking Shoes",
    price: 80.0,
    description: "Cushioned shoes designed for long walks.",
    category: "Walking",
    imgSrc:
      "https://media.istockphoto.com/id/2171070282/photo/ladies-fashionable-and-comfortable-shoes-used-but-still-durable-rest-on-a-concrete-floor-back.jpg?s=612x612&w=0&k=20&c=HnW0pcKb8ZRcfIcfPN_pX9bm0gvnPT1eJEX_3tivZsw=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Trail Walking Shoes",
    price: 90.0,
    description: "Durable Walking suitable for trails.",
    category: "Walking",
    imgSrc:
      "https://c02.purpledshub.com/uploads/sites/47/2023/03/HokaAnacapaLow11-58-36SNY0042-62b34b7-1.jpg?webp=1&w=1200",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Casual Walking Shoes",
    price: 75.0,
    description: "Stylish Walking for everyday use.",
    category: "Walking",
    imgSrc:
      "https://media.istockphoto.com/id/2169713333/photo/a-pair-of-comfortable-mens-shoes-on-white-background.jpg?s=612x612&w=0&k=20&c=_b1_Vp_qRsfcUQK3H21ZMkoqVTV5IPNdoqp9gXWL-tc=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Waterproof Walking Shoes",
    price: 100.0,
    description: "Water-resistant shoes for all-weather walking.",
    category: "Walking",
    imgSrc:
      "https://www.travelandleisure.com/thmb/iCgeuo8EHJa9mwBef13aIdjNRjE=/fit-in/1300x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/TL-Ryka-Hydro-Sport-Water-Shoe-Hiking-7.5-Lindsey-Sweeney-05-40fae87123a545ffb684ea409531a9bc.jpg",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Lightweight Walking Shoes",
    price: 70.0,
    description: "Feather-light shoes for maximum comfort.",
    category: "Walking",
    imgSrc:
      "https://media.istockphoto.com/id/1642417579/photo/gray-running-shoes-with-red-straps-and-white-sole.jpg?s=612x612&w=0&k=20&c=mX1NIUlgUbTVfv2OlbNx0gv1jSVzOyDzMCBVuQ5ZBAU=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },

  // Dance Shoes
  {
    title: "Ballet Dance Shoes",
    price: 50.0,
    description: "Traditional ballet shoes for dance practice.",
    category: "Dance",
    imgSrc:
      "https://media.istockphoto.com/id/157678397/photo/pair-of-ballet-slipers-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=anO-IPVNb2NDJUlQaavBw8wXgzoJLqL6tY5-TtdPT60=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Jazz Dance Shoes",
    price: 60.0,
    description: "Flexible shoes designed for jazz dance.",
    category: "Dance",
    imgSrc:
      "https://media.istockphoto.com/id/1482196076/photo/black-jazz-incorrect-standing-feet-position-top-down-close-up-of-young-female-ballet-dancer.jpg?s=612x612&w=0&k=20&c=vgdouamB7eetWi7_8oT50suij7gSXW4WvfY6YgfTup8=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Tap Dance Shoes",
    price: 170.0,
    description: "Classic tap shoes with metal taps for sound.",
    category: "Dance",
    imgSrc:
      "https://media.istockphoto.com/id/147661862/photo/leather-tap-shoes.jpg?s=612x612&w=0&k=20&c=Jo13tA7NqvU69ygGDcVg8I0QsdiYESrswhYkQasPUNs=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },

  // Hiking Shoes
  {
    title: "Lightweight Hiking Shoes",
    price: 210.0,
    description: "Breathable hiking shoes for long trails.",
    category: "Hiking",
    imgSrc:
      "https://media.istockphoto.com/id/1491588720/photo/pair-of-gray-hiking-boots-isolate-on-a-white-background.jpg?s=612x612&w=0&k=20&c=KhnZHvvj141CdR9I-HTL3TA7xEba1hCU63PQ2CWuOSE=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Waterproof Hiking Boots",
    price: 440.0,
    description: "Durable waterproof boots for hiking.",
    category: "Hiking",
    imgSrc:
      "https://media.istockphoto.com/id/1268177740/photo/light-brown-womens-hiking-shoes-with-a-visible-shoe-sole.jpg?s=612x612&w=0&k=20&c=AnZ-WxxP11JdICXOuku1OPrwPErC7dj4LDb3jF00URo=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
  {
    title: "Heavy-Duty Hiking Shoes",
    price: 630.0,
    description: "Sturdy shoes for challenging hiking conditions.",
    category: "Hiking",
    imgSrc:
      "https://media.istockphoto.com/id/1027561034/photo/hiking-boots-hiking-shoes-hiking-equipment.jpg?s=612x612&w=0&k=20&c=aF5c973q0L5NjKccQbGgWsjii194vXuSV-Oc1jL4GIo=",
    sizes: [7, 8, 9, 10],
    stock: 10,
  },
];

const shoeTypes = {
  Casuals: [
    "Sneakers",
    "Loafers",
    "Sandals",
    "Slides",
    "Flats",
    "Clogs",
    "Boots",
  ],
  Formals: [
    "Oxfords",
    "Derby Shoes",
    "Flats",
    "Heels",
    "Loafers",
    "Mojaris (or Juttis)",
  ],
  "Athletic Shoes": [
    "Sports",
    "Walking Shoes",
    "Court Shoes",
    "Dance Shoes",
    "Hiking",
  ],
};

const shoeKeys = ["Casuals", "Formals", "Athletic Shoes"];

// const shoeData = {
//   shoeKeys: ["Casuals", "Formals", "Athletic Shoes"],
//   shoeTypes: [
//     {
//       category: "Casuals",
//       types: [
//         "Sneakers",
//         "Loafers",
//         "Sandals",
//         "Slides",
//         "Flats",
//         "Clogs",
//         "Boots",
//       ],
//     },
//     {
//       category: "Formals",
//       types: [
//         "Oxfords",
//         "Derby Shoes",
//         "Flats",
//         "Heels",
//         "Loafers",
//         "Mojaris (or Juttis)",
//       ],
//     },
//     {
//       category: "Athletic Shoes",
//       types: [
//         "Sports",
//         "Walking Shoes",
//         "Court Shoes",
//         "Dance Shoes",
//         "Hiking",
//       ],
//     },
//   ],
// };

module.exports = { products, shoeTypes, shoeKeys };
