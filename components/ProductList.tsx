import { AnimatePresence, Motion } from "@legendapp/motion";
import { Heart, StarIcon } from "lucide-react-native";
import React from "react";
import { Pressable, ScrollView } from "react-native";
import { Box } from "./ui/box";
import { HStack } from "./ui/hstack";
import { Icon } from "./ui/icon";
import { Image } from "./ui/image";
import { Text } from "./ui/text";
import { Tooltip, TooltipContent, TooltipText } from "./ui/tooltip";
import { VStack } from "./ui/vstack";

const tabsData = [
  {
    name: "men's clothing",
    data: [
      {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://i5.walmartimages.com/asr/5c1b9a89-8394-4168-98d1-c02687907b9e_1.337529cbe4a36b58d343ab5c72eb37c8.jpeg",
        rating: {
          rate: 3.9,
          count: 120,
        },
      },
      {
        id: 2,
        title: "Mens Casual Premium Slim Fit T-Shirts ",
        price: 22.3,
        description:
          "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        category: "men's clothing",
        image:
          "https://i5.walmartimages.com/asr/5c1b9a89-8394-4168-98d1-c02687907b9e_1.337529cbe4a36b58d343ab5c72eb37c8.jpeg",
        rating: {
          rate: 4.1,
          count: 259,
        },
      },
      {
        id: 3,
        title: "Mens Cotton Jacket",
        price: 55.99,
        description:
          "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        category: "men's clothing",
        image: "https://i5.walmartimages.com/asr/5c1b9a89-8394-4168-98d1-c02687907b9e_1.337529cbe4a36b58d343ab5c72eb37c8.jpeg",
        rating: {
          rate: 4.7,
          count: 500,
        },
      },
      {
        id: 4,
        title: "Mens Casual Slim Fit",
        price: 15.99,
        description:
          "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        category: "men's clothing",
        image: "https://i5.walmartimages.com/asr/5c1b9a89-8394-4168-98d1-c02687907b9e_1.337529cbe4a36b58d343ab5c72eb37c8.jpeg",
        rating: {
          rate: 2.1,
          count: 430,
        },
      },
    ],
  },
  {
    name: "jewelery",
    data: [
      {
        id: 5,
        title:
          "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        price: 695,
        description:
          "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        category: "jewelery",
        image:
          "https://i5.walmartimages.com/asr/5c1b9a89-8394-4168-98d1-c02687907b9e_1.337529cbe4a36b58d343ab5c72eb37c8.jpeg",
        rating: {
          rate: 4.6,
          count: 400,
        },
      },
      {
        id: 6,
        title: "Solid Gold Petite Micropave ",
        price: 168,
        description:
          "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        category: "jewelery",
        image:
          "https://i5.walmartimages.com/asr/5c1b9a89-8394-4168-98d1-c02687907b9e_1.337529cbe4a36b58d343ab5c72eb37c8.jpeg",
        rating: {
          rate: 3.9,
          count: 70,
        },
      },
      {
        id: 7,
        title: "White Gold Plated Princess",
        price: 9.99,
        description:
          "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
        category: "jewelery",
        image:
          "https://i5.walmartimages.com/asr/5c1b9a89-8394-4168-98d1-c02687907b9e_1.337529cbe4a36b58d343ab5c72eb37c8.jpeg",
        rating: {
          rate: 3,
          count: 400,
        },
      },
      {
        id: 8,
        title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
        price: 10.99,
        description:
          "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
        category: "jewelery",
        image:
          "https://i5.walmartimages.com/asr/5c1b9a89-8394-4168-98d1-c02687907b9e_1.337529cbe4a36b58d343ab5c72eb37c8.jpeg",
        rating: {
          rate: 1.9,
          count: 100,
        },
      },
    ],
  },
  {
    name: "electronics",
    data: [
      {
        id: 9,
        title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
        price: 64,
        description:
          "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
        category: "electronics",
        image: "https://i5.walmartimages.com/asr/5c1b9a89-8394-4168-98d1-c02687907b9e_1.337529cbe4a36b58d343ab5c72eb37c8.jpeg",
        rating: {
          rate: 3.3,
          count: 203,
        },
      },
      {
        id: 10,
        title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        price: 109,
        description:
          "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
        category: "electronics",
        image: "https://i5.walmartimages.com/asr/5c1b9a89-8394-4168-98d1-c02687907b9e_1.337529cbe4a36b58d343ab5c72eb37c8.jpeg",
        rating: {
          rate: 2.9,
          count: 470,
        },
      },
      {
        id: 11,
        title:
          "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
        price: 109,
        description:
          "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
        category: "electronics",
        image: "https://i5.walmartimages.com/asr/5c1b9a89-8394-4168-98d1-c02687907b9e_1.337529cbe4a36b58d343ab5c72eb37c8.jpeg",
        rating: {
          rate: 4.8,
          count: 319,
        },
      },
      {
        id: 12,
        title:
          "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
        price: 114,
        description:
          "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
        category: "electronics",
        image: "https://i5.walmartimages.com/asr/5c1b9a89-8394-4168-98d1-c02687907b9e_1.337529cbe4a36b58d343ab5c72eb37c8.jpeg",
        rating: {
          rate: 4.8,
          count: 400,
        },
      },
      {
        id: 13,
        title:
          "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
        price: 599,
        description:
          "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
        category: "electronics",
        image: "https://i5.walmartimages.com/asr/5c1b9a89-8394-4168-98d1-c02687907b9e_1.337529cbe4a36b58d343ab5c72eb37c8.jpeg",
        rating: {
          rate: 2.9,
          count: 250,
        },
      },
      {
        id: 14,
        title:
          "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
        price: 999.99,
        description:
          "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
        category: "electronics",
        image: "https://i5.walmartimages.com/asr/5c1b9a89-8394-4168-98d1-c02687907b9e_1.337529cbe4a36b58d343ab5c72eb37c8.jpeg",
        rating: {
          rate: 2.2,
          count: 140,
        },
      },
    ],
  },
  {
    name: "women's clothing",
    data: [
      {
        id: 15,
        title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
        price: 56.99,
        description:
          "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
        category: "women's clothing",
        image: "https://i5.walmartimages.com/asr/5c1b9a89-8394-4168-98d1-c02687907b9e_1.337529cbe4a36b58d343ab5c72eb37c8.jpeg",
        rating: {
          rate: 2.6,
          count: 235,
        },
      },
      {
        id: 16,
        title:
          "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
        price: 29.95,
        description:
          "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
        category: "women's clothing",
        image: "https://i5.walmartimages.com/asr/5c1b9a89-8394-4168-98d1-c02687907b9e_1.337529cbe4a36b58d343ab5c72eb37c8.jpeg",
        rating: {
          rate: 2.9,
          count: 340,
        },
      },
      {
        id: 17,
        title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
        price: 39.99,
        description:
          "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
        category: "women's clothing",
        image: "https://i5.walmartimages.com/asr/5c1b9a89-8394-4168-98d1-c02687907b9e_1.337529cbe4a36b58d343ab5c72eb37c8.jpeg",
        rating: {
          rate: 3.8,
          count: 679,
        },
      },
      {
        id: 18,
        title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
        price: 9.85,
        description:
          "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
        category: "women's clothing",
        image: "https://i5.walmartimages.com/asr/5c1b9a89-8394-4168-98d1-c02687907b9e_1.337529cbe4a36b58d343ab5c72eb37c8.jpeg",
        rating: {
          rate: 4.7,
          count: 130,
        },
      },
      {
        id: 19,
        title: "Opna Women's Short Sleeve Moisture",
        price: 7.95,
        description:
          "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
        category: "women's clothing",
        image: "https://i5.walmartimages.com/asr/5c1b9a89-8394-4168-98d1-c02687907b9e_1.337529cbe4a36b58d343ab5c72eb37c8.jpeg",
        rating: {
          rate: 4.5,
          count: 146,
        },
      },
      {
        id: 20,
        title: "DANVOUY Womens T Shirt Casual Cotton Short",
        price: 12.99,
        description:
          "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
        category: "women's clothing",
        image: "https://i5.walmartimages.com/asr/5c1b9a89-8394-4168-98d1-c02687907b9e_1.337529cbe4a36b58d343ab5c72eb37c8.jpeg",
        rating: {
          rate: 3.6,
          count: 145,
        },
      },
    ],
  },
];

const tabs = [
  {
    title: "Electronics",
  },
  {
    title: "Jewelery",
  },
  {
    title: "Men's Clothing",
  },
  {
    title: "Women's Clothing",
  },
];

const ProductList = () => {
  const [activeTab, setActiveTab] = React.useState(tabs[0]);
  return (
    <Box className="pb-8 px-4">
      <ProductListInfoTab
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <TabPanelData activeTab={activeTab} />
    </Box>
  );
};

const ProductListInfoTab = ({ tabs, activeTab, setActiveTab }: any) => {
  return (
    <Box className="border-b border-outline-50">
      <Box className="py-5">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <HStack space="lg" className="mx-0.5">
            {tabs.map((tab: any) => {
              return (
                <Pressable
                  key={tab.title}
                  className={`my-0.5 py-1 ${
                    activeTab === tab ? "border-b-[3px]" : "border-b-0"
                  } border-outline-900 hover:border-b-[3px] ${
                    activeTab === tab
                      ? "hover:border-outline-900"
                      : "hover:border-outline-200"
                  } `}
                  onPress={() => setActiveTab(tab)}
                >
                  <Text
                    size="sm"
                    className={`${
                      activeTab === tab
                        ? "text-typography-900"
                        : "text-typography-600"
                    } font-medium`}
                  >
                    {tab.title}
                  </Text>
                </Pressable>
              );
            })}
          </HStack>
        </ScrollView>
      </Box>
    </Box>
  );
};

const TabPanelData = ({ activeTab }: any) => {
  const [likes, setLikes]: any = React.useState([]);

  return (
    <ScrollView
      contentContainerClassName="justify-between pb-72"
      showsVerticalScrollIndicator={false}
    >
      {tabsData.map((tab, index) => {
        return (
          <Box key={index}>
            {tab.name.toLowerCase() === activeTab.title.toLowerCase() &&
              tab.data.map((product: any, index: any) => {
                return (
                  <Box key={index} className="my-2">
                    <Pressable className="w-full">
                      <Box className="overflow-hidden rounded-md h-72">
                        <Image
                          source={product.image}
                          className="w-full h-72"
                          alt={`${product.title} image`}
                          resizeMode="contain"
                        />
                      </Box>
                    </Pressable>

                    <Pressable
                      onPress={() => {
                        if (likes.includes(product.title)) {
                          const newLikes = likes.filter(
                            (like: any) => like !== product.title
                          );
                          setLikes(newLikes);
                          return;
                        } else {
                          setLikes([...likes, product.title]);
                        }
                      }}
                      className="absolute top-3 right-4 h-6 w-6 justify-center items-center"
                    >
                      <AnimatePresence>
                        <Motion.View
                          key={
                            likes.includes(product.title) ? "liked" : "unliked"
                          }
                          initial={{
                            scale: 1.3,
                          }}
                          animate={{
                            scale: 1,
                          }}
                          exit={{
                            scale: 0.9,
                          }}
                          transition={{
                            type: "spring",
                            mass: 0.9,
                            damping: 9,
                            stiffness: 300,
                          }}
                          style={{
                            position: "absolute",
                          }}
                        >
                          <Icon
                            as={Heart}
                            size="lg"
                            className={`${
                              likes.includes(product.title)
                                ? "fill-red-500 stroke-red-500"
                                : "fill-gray-500 stroke-white"
                            }`}
                          />
                        </Motion.View>
                      </AnimatePresence>
                    </Pressable>

                    <HStack className="justify-between py-2 items-start">
                      <VStack space="sm" className="flex-1">
                        <Text className="font-semibold text-typography-900">
                          {product.title}
                        </Text>
                        <Text size="sm" className="text-typography-500">
                          {product.description.length > 160
                            ? product.description.slice(0, 160) + "..."
                            : product.description}
                        </Text>
                        <HStack>
                          <Text
                            size="sm"
                            className="font-semibold text-typography-900"
                          >
                            ${product.price} USD
                          </Text>
                        </HStack>
                      </VStack>
                      <Tooltip
                        trigger={(triggerProps: any) => {
                          return (
                            <Pressable {...triggerProps}>
                              <HStack className="items-center flex-start">
                                <Icon
                                  as={StarIcon}
                                  size="2xs"
                                  className="stroke-typography-900 fill-typography-900"
                                />
                                <Text
                                  size="sm"
                                  className="pl-1 text-typography-900"
                                >
                                  {product.rating.rate}
                                </Text>
                              </HStack>
                            </Pressable>
                          );
                        }}
                      >
                        <TooltipContent>
                          <TooltipText className="text-white px-2 py-1">
                            Ratings
                          </TooltipText>
                        </TooltipContent>
                      </Tooltip>
                    </HStack>
                  </Box>
                );
              })}
          </Box>
        );
      })}
    </ScrollView>
  );
};
export default ProductList;
