export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: Author;
  publishedAt: string;
  category: BlogCategory;
  tags: string[];
  isFeatured?: boolean;
  readTime: number;
}

export interface Author {
  name: string;
  role: string;
  avatar?: string;
}

export type BlogCategory =
  | "industry-insights"
  | "packaging-tips"
  | "company-news"
  | "sustainability"
  | "case-studies";

export const BLOG_CATEGORIES: { value: BlogCategory; label: string }[] = [
  { value: "industry-insights", label: "Industry Insights" },
  { value: "packaging-tips", label: "Packaging Tips" },
  { value: "company-news", label: "Company News" },
  { value: "sustainability", label: "Sustainability" },
  { value: "case-studies", label: "Case Studies" },
];

const defaultAuthor: Author = {
  name: "Kriti Editorial Team",
  role: "Kriti Print & Pack Industries",
};

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "how-to-choose-corrugated-board-strength",
    title: "How to Choose the Right Corrugated Board Strength for Your Product",
    excerpt:
      "Choosing between 3-ply, 5-ply, and double-wall corrugated board can significantly impact your packaging cost and protection level. Here's how to decide.",
    content: `
## Understanding Corrugated Board Types

When it comes to corrugated packaging, one size definitely does not fit all. The board construction you choose directly affects how well your products are protected, how much you pay per unit, and how your packaging performs throughout the supply chain.

### The Three Main Options

**3-Ply (Single-Wall) Corrugated**

This is the most commonly used corrugated board and works well for most consumer goods and FMCG applications. It consists of two flat linerboard sheets bonded to a central fluted medium. It's lightweight, cost-effective, and offers good print quality.

*Best for:* Light to medium weight products (up to 10 kg), short to medium transit distances, products stored in controlled warehouse environments.

**5-Ply (Double-Wall) Corrugated**

Double-wall board features an additional layer of fluting and linerboard, giving it significantly higher burst strength and stacking resistance. It handles rough handling and long-distance shipping far better than single-wall.

*Best for:* Heavy products (10–30 kg), industrial goods, international exports, products requiring stacking in high warehouses.

**Triple-Wall Corrugated**

The heaviest-duty option, triple-wall board can replace wooden crates for some industrial applications. It has exceptional compression strength and is used for very heavy or fragile industrial shipments.

*Best for:* Machinery parts, industrial equipment, products over 30 kg, harsh transportation environments.

### The Key Tests to Know

- **Burst Strength (Mullen Test)**: Measures puncture resistance — how much pressure the board can withstand before rupturing.
- **Edge Crush Test (ECT)**: Measures the board's resistance to crushing forces applied to its edges — critical for stacked warehouse storage.
- **Box Compression Test (BCT)**: Tests the complete box's stacking strength under load.

### Making the Right Choice

Consider three factors:

1. **Product weight and fragility**: Heavier or more fragile products need stronger board.
2. **Supply chain conditions**: Long transit routes, manual handling, and cold-storage environments demand more robust construction.
3. **Cost and sustainability**: Higher-grade board costs more and uses more material. Right-sizing your packaging is both economically and environmentally smart.

At Kriti Print & Pack, we help clients select the appropriate board grade through a structured requirements discussion and, where needed, compression testing with your actual product. Contact us to discuss your packaging requirements.
    `,
    image: "/images/blog/corrugated-board-guide.jpg",
    author: defaultAuthor,
    publishedAt: "2024-11-15",
    category: "packaging-tips",
    tags: ["corrugated", "packaging-guide", "board-strength"],
    isFeatured: true,
    readTime: 6,
  },
  {
    id: "2",
    slug: "sustainable-packaging-trends-2025",
    title: "Sustainable Packaging Trends Shaping the Industry in 2025",
    excerpt:
      "From biodegradable coatings to mono-material packaging, here are the sustainability trends that FMCG and manufacturing companies are adopting in 2025.",
    content: `
## The Sustainability Imperative

Consumer expectations around packaging sustainability have shifted dramatically. In Nepal and across the region, brands that demonstrate genuine environmental commitment are gaining competitive advantage — while those that ignore it face increasing regulatory and reputational pressure.

### Trend 1: Right-Sizing and Weight Reduction

The single biggest environmental impact of packaging is using more material than you need. Advanced structural design tools now allow packaging engineers to optimize box dimensions to within millimeters of the minimum required, reducing board usage and shipping weight simultaneously.

A 10% reduction in board weight across a production run of one million units eliminates hundreds of tons of material — without compromising protection.

### Trend 2: Recycled Content Requirements

More brands are specifying minimum recycled content percentages in their packaging specifications — typically 70–100% for corrugated board. Standard kraft corrugated already contains significant recycled fiber, but post-consumer waste (PCW) certified options are increasingly available.

### Trend 3: Water-Based and Soy Inks

Conventional petroleum-based flexographic inks are being replaced by water-based and soy-based alternatives that produce lower VOC emissions and are easier to de-ink during paper recycling. Print quality has improved to the point where these inks are now the preferred choice for most FMCG applications.

### Trend 4: Plastic-Free Coatings

Many packaging specifications are eliminating plastic-based moisture-resistant coatings in favor of clay-coated boards and wax alternatives that maintain recyclability. This is particularly relevant for food packaging applications.

### Trend 5: Mono-Material Design

Multi-material packaging — combining paper, plastic films, and foil — creates recycling challenges. The trend is toward mono-material designs that use a single material type throughout, maximizing end-of-life recyclability.

### What This Means for Your Packaging Program

The good news is that most sustainable packaging improvements also reduce costs. Lighter weight board, right-sized dimensions, and simpler constructions all contribute to lower material spend and shipping costs.

At Kriti Print & Pack, we offer a free packaging sustainability review for existing clients and new inquiries. We'll identify where your current packaging can be improved for both environmental and economic benefit.
    `,
    image: "/images/blog/sustainable-packaging-2025.jpg",
    author: defaultAuthor,
    publishedAt: "2025-01-20",
    category: "sustainability",
    tags: ["sustainability", "eco-packaging", "trends"],
    isFeatured: true,
    readTime: 7,
  },
  {
    id: "3",
    slug: "packaging-design-for-ecommerce",
    title: "Packaging Design Best Practices for E-Commerce Brands",
    excerpt:
      "E-commerce packaging has unique requirements compared to retail shelf packaging. Here's what to consider when designing boxes for direct-to-consumer shipping.",
    content: `
## Designing for the Unboxing Experience

E-commerce packaging serves a fundamentally different purpose than retail shelf packaging. Instead of competing for attention on a crowded store shelf, your package must survive transit, create a memorable unboxing experience, and communicate your brand values — all while being cost-effective at scale.

### The Transit Challenge

E-commerce packages face much harsher handling than retail products. They're sorted through automated conveyor systems, stacked in delivery vehicles, and handled multiple times by different carriers. Your packaging must withstand:

- **Compression**: Packages stacked on top of each other
- **Impact**: Drops from conveyor belts and during loading/unloading
- **Vibration**: Road transport over varying surface conditions
- **Moisture**: Exposure to rain and humidity variations

### Designing for Protection

**Right-sized packaging matters**: Oversized packages create void fill requirements and are more prone to crushing. Design your box dimensions to be as close to your product dimensions as practical, with enough clearance for appropriate cushioning.

**Internal structure**: For fragile products, consider custom inserts, dividers, or molded pulp trays that eliminate the need for loose fill material.

**Box style selection**: Mailer boxes (with self-locking closure) typically offer better protection than RSC (Regular Slotted Container) boxes for e-commerce because they don't have seams on the bottom panel.

### The Unboxing Opportunity

The moment a customer opens their delivery is a powerful brand touchpoint — increasingly shared on social media. Consider:

- **Interior printing**: Brand messaging or pattern printed on the inside of the box lid
- **Tissue paper**: Adds a premium feel and protects surface finishes
- **Branded tape**: If using RSC boxes, custom-printed tape reinforces your brand
- **Inserts**: Thank you cards, care instructions, or promotional inserts create a complete experience

### Sustainability in E-Commerce Packaging

E-commerce customers are often more environmentally conscious than average. Using recycled kraft board, eliminating plastic void fill, and ensuring your packaging is recyclable can be a genuine competitive advantage.

At Kriti Print & Pack, we specialize in custom mailer boxes with full-color inside printing and self-locking closures. Contact us to discuss your e-commerce packaging requirements.
    `,
    image: "/images/blog/ecommerce-packaging-design.jpg",
    author: defaultAuthor,
    publishedAt: "2025-03-08",
    category: "packaging-tips",
    tags: ["ecommerce", "mailer-boxes", "unboxing", "design"],
    readTime: 8,
  },
  {
    id: "4",
    slug: "flexographic-printing-explained",
    title: "Flexographic Printing Explained: Why It's the Standard for Corrugated Packaging",
    excerpt:
      "Flexographic printing dominates corrugated packaging production for good reason. Here's how it works and what it means for your packaging quality.",
    content: `
## What Is Flexographic Printing?

Flexographic printing (commonly called "flexo") is the primary printing method used for corrugated packaging worldwide. It uses flexible rubber or polymer printing plates and fast-drying inks to transfer designs onto corrugated board at very high speeds.

### How Flexo Printing Works

1. **Plate making**: A flexible printing plate is created from your artwork file, with raised surfaces representing the areas that will carry ink.
2. **Ink transfer**: The raised plate surfaces pick up ink from an anilox roller and transfer it to the corrugated board as it passes through the press.
3. **Drying**: Modern flexo inks dry rapidly, allowing high-speed production.

### Why Flexo for Corrugated?

**Speed**: Flexo presses can run at very high speeds, making it cost-effective for large production runs.

**Inline production**: Many corrugated production lines integrate flexo printing with cutting, creasing, and gluing in a single pass — reducing handling and cost.

**Ink compatibility**: Flexo works with water-based inks, which are increasingly preferred for food packaging applications.

**Substrate flexibility**: Flexo prints effectively on the slightly irregular surface of corrugated board, which offset printing cannot handle.

### Limitations to Understand

Flexo has some constraints compared to offset or digital printing:

- **Color registration**: Flexo is excellent for solid colors and simple graphics but less precise than offset for very fine detail or tiny text.
- **Halftone resolution**: Fine photographic images require careful artwork preparation to reproduce well in flexo.
- **Plate costs**: Initial plate costs are higher than digital printing, making very small runs relatively expensive.

### Making Your Artwork Flexo-Ready

When preparing artwork for corrugated packaging:

- Use spot colors (Pantone references) for brand colors where color accuracy is critical
- Avoid very small text (below 6pt) and fine lines (below 0.5pt)
- Allow for a color trap of at least 0.2mm between adjacent colors
- Request a color proof before committing to a production run

Our prepress team at Kriti Print & Pack can review your artwork files and advise on any adjustments needed before production. Contact us for artwork guidelines and file specifications.
    `,
    image: "/images/blog/flexographic-printing.jpg",
    author: defaultAuthor,
    publishedAt: "2025-04-12",
    category: "industry-insights",
    tags: ["flexographic", "printing", "corrugated", "technical"],
    readTime: 7,
  },
  {
    id: "5",
    slug: "kriti-expands-production-capacity",
    title: "Kriti Print & Pack Expands Production Capacity with New Corrugator Line",
    excerpt:
      "We've invested in a new high-speed corrugator that doubles our production capacity, enabling us to better serve growing client demand across Nepal.",
    content: `
## Expanding to Serve Our Clients Better

We're pleased to announce a significant expansion of our production capacity at Kriti Print & Pack Industries. Our new high-speed corrugated board production line at our Katahari, Biratnagar facility is now fully operational, doubling our corrugated board output capacity.

### What This Means for Our Clients

**Shorter lead times**: With greater capacity, we can accommodate larger orders with reduced lead times — even during peak demand periods.

**More flexible scheduling**: Smaller, more frequent production runs become more economically viable as our overhead per unit decreases.

**Improved quality consistency**: The new line features advanced inline quality monitoring, ensuring consistent board thickness, moisture content, and flute geometry across every production run.

**Greater product range**: The additional capacity allows us to offer a broader range of board grades and constructions simultaneously, without compromising availability.

### Investment in Quality

Beyond increased throughput, the investment represents our commitment to manufacturing excellence. The new line incorporates:

- Automatic splice for continuous production
- Precision glue application control for consistent bond strength
- Temperature-controlled humidification for consistent board conditioning
- Inline moisture meters for real-time quality monitoring

### Looking Forward

This expansion positions Kriti Print & Pack to continue growing as a packaging partner to Nepal's expanding FMCG, food manufacturing, and industrial sectors. We're committed to building long-term relationships with our clients and investing in the capacity and capabilities needed to support their growth.

If you have upcoming large-volume packaging requirements or want to discuss how our expanded capacity can benefit your business, please get in touch with our team.
    `,
    image: "/images/blog/capacity-expansion.jpg",
    author: defaultAuthor,
    publishedAt: "2025-06-01",
    category: "company-news",
    tags: ["company-news", "expansion", "manufacturing"],
    readTime: 5,
  },
  {
    id: "6",
    slug: "food-packaging-compliance-nepal",
    title: "Food Packaging Compliance: What Nepal FMCG Brands Need to Know",
    excerpt:
      "A practical guide to food contact material requirements and packaging compliance for FMCG and food brands manufacturing in Nepal.",
    content: `
## Food Safety Starts with Packaging

For food manufacturers in Nepal, packaging is not just a protective container — it's part of the food safety chain. Packaging materials that contact food directly, or are likely to contact food indirectly through migration, must meet established safety standards.

### Key Concepts in Food Packaging Compliance

**Food Contact Materials (FCM)**: Any material that comes into direct or indirect contact with food during manufacturing, processing, storage, or transport. This includes not just the packaging itself but inks, adhesives, coatings, and any other materials used in its construction.

**Migration**: The process by which substances from packaging materials transfer into food. Even trace amounts of certain substances can be problematic for food safety.

**Primary vs Secondary Packaging**: Primary packaging (in direct contact with food) has the strictest requirements. Secondary packaging (outer cartons, master cartons) typically has less stringent requirements but must still use appropriate materials.

### For Corrugated Packaging Specifically

Corrugated board used as secondary or transport packaging for food typically requires:

1. **Clean, food-appropriate materials**: No recycled board contaminated with inappropriate waste streams
2. **Approved inks**: Water-based or UV-cured inks with low migration potential
3. **No toxic substances**: Absence of heavy metals, prohibited colorants, or other regulated substances
4. **Appropriate coatings**: If coated, only approved food-safe coatings may be used

### Practical Steps for Compliance

**Work with a compliant supplier**: At Kriti Print & Pack, our food-grade packaging line uses materials and inks specifically selected for food contact suitability. We provide material declarations for all components.

**Document your supply chain**: Maintain records of material specifications and supplier declarations as part of your food safety management system.

**Label correctly**: Ensure your packaging includes all required labeling — product name, ingredients, manufacturer information, best-before dates, and any applicable regulatory marks.

**Test when in doubt**: For novel packaging formats or if you're entering regulated export markets, consider independent migration testing.

If you're developing new food packaging or reviewing existing specifications for compliance, our team can guide you through the requirements relevant to your product and markets.
    `,
    image: "/images/blog/food-packaging-compliance.jpg",
    author: defaultAuthor,
    publishedAt: "2025-07-18",
    category: "industry-insights",
    tags: ["food-safety", "compliance", "fmcg", "nepal"],
    readTime: 8,
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getFeaturedBlogPosts(): BlogPost[] {
  return blogPosts.filter((p) => p.isFeatured);
}

export function getBlogPostsByCategory(category: BlogCategory): BlogPost[] {
  return blogPosts.filter((p) => p.category === category);
}
