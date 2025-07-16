// Danh sách ngành học
export const majors = [
  { id: "it", name: "Công nghệ thông tin" },
  { id: "engineering", name: "Kỹ thuật" },
  { id: "marketing", name: "Marketing" },
  { id: "finance", name: "Tài chính" },
];

// Danh sách vị trí phỏng vấn
export const positions = [
  { id: "developer", name: "Developer" },
  { id: "tester", name: "Tester" },
  { id: "designer", name: "Designer" },
  { id: "marketer", name: "Marketer" },
];

// Danh sách chủ đề theo ngành và vị trí
export const topicsByMajorAndPosition: Record<
  string,
  Record<string, { id: string; name: string }[]>
> = {
  it: {
    developer: [
      { id: "react", name: "React" },
      { id: "cpp", name: "C++" },
      { id: "sql", name: "SQL" },
      { id: "flutter", name: "Flutter" },
      { id: "php", name: "PHP" },
      { id: "java", name: "Java" },
    ],
    tester: [
      { id: "testing", name: "Kiểm thử phần mềm" },
      { id: "automation", name: "Tự động hóa kiểm thử" },
      { id: "sql", name: "SQL" },
    ],
    designer: [
      { id: "uiux", name: "UI/UX" },
      { id: "figma", name: "Figma" },
    ],
    marketer: [
      { id: "digital", name: "Digital Marketing" },
      { id: "seo", name: "SEO" },
    ],
  },
  engineering: {
    developer: [
      { id: "matlab", name: "MATLAB" },
      { id: "autocad", name: "AutoCAD" },
    ],
    tester: [],
    designer: [],
    marketer: [],
  },
  marketing: {
    marketer: [
      { id: "content", name: "Content Marketing" },
      { id: "seo", name: "SEO" },
      { id: "social", name: "Social Media" },
    ],
    developer: [],
    tester: [],
    designer: [],
  },
  finance: {
    marketer: [
      { id: "finance", name: "Tài chính doanh nghiệp" },
      { id: "accounting", name: "Kế toán" },
    ],
    developer: [],
    tester: [],
    designer: [],
  },
};

// Danh sách câu hỏi theo chủ đề
export const questionsByTopic: Record<
  string,
  {
    id: string;
    question: string;
    answer: string;
    level: "easy" | "medium" | "hard";
    viewed: boolean;
  }[]
> = {
  react: [
    {
      id: "1",
      question: "React là gì?",
      answer:
        "React là một thư viện JavaScript để xây dựng giao diện người dùng.",
      level: "easy",
      viewed: true,
    },
    {
      id: "2",
      question: "Sự khác biệt giữa state và props?",
      answer:
        "State là dữ liệu nội bộ của component, props là dữ liệu truyền từ component cha.",
      level: "medium",
      viewed: false,
    },
    {
      id: "3",
      question: "Lifecycle methods là gì?",
      answer:
        "Là các phương thức đặc biệt được gọi tại các giai đoạn khác nhau của vòng đời component.",
      level: "medium",
      viewed: true,
    },
    {
      id: "4",
      question: "Lifecycle methods là gì?",
      answer:
        "Là các phương thức đặc biệt được gọi tại các giai đoạn khác nhau của vòng đời component.",
      level: "medium",
      viewed: true,
    },
    {
      id: "5",
      question: "Lifecycle methods là gì?",
      answer:
        "Là các phương thức đặc biệt được gọi tại các giai đoạn khác nhau của vòng đời component.",
      level: "medium",
      viewed: true,
    },
    {
      id: "6",
      question: "Lifecycle methods là gì?",
      answer:
        "Là các phương thức đặc biệt được gọi tại các giai đoạn khác nhau của vòng đời component.",
      level: "medium",
      viewed: true,
    },
    {
      id: "7",
      question: "Lifecycle methods là gì?",
      answer:
        "Là các phương thức đặc biệt được gọi tại các giai đoạn khác nhau của vòng đời component.",
      level: "medium",
      viewed: true,
    },
  ],
  cpp: [
    {
      id: "1",
      question: "C++ là gì?",
      answer: "C++ là một ngôn ngữ lập trình hướng đối tượng.",
      level: "easy",
      viewed: false,
    },
    {
      id: "2",
      question: "Sự khác biệt giữa C và C++?",
      answer: "C++ hỗ trợ lập trình hướng đối tượng, còn C thì không.",
      level: "medium",
      viewed: true,
    },
  ],
  sql: [
    {
      id: "1",
      question: "SQL là gì?",
      answer: "SQL là ngôn ngữ truy vấn cơ sở dữ liệu.",
      level: "easy",
      viewed: false,
    },
    {
      id: "2",
      question: "JOIN trong SQL là gì?",
      answer: "JOIN dùng để kết hợp dữ liệu từ nhiều bảng.",
      level: "hard",
      viewed: false,
    },
  ],
  flutter: [
    {
      id: "1",
      question: "Flutter là gì?",
      answer: "Flutter là framework phát triển ứng dụng di động của Google.",
      level: "easy",
      viewed: false,
    },
  ],
  php: [
    {
      id: "1",
      question: "PHP là gì?",
      answer: "PHP là ngôn ngữ lập trình phía server phổ biến.",
      level: "easy",
      viewed: false,
    },
  ],
  java: [
    {
      id: "1",
      question: "Java là gì?",
      answer: "Java là ngôn ngữ lập trình hướng đối tượng, đa nền tảng.",
      level: "easy",
      viewed: true,
    },
  ],
  testing: [
    {
      id: "1",
      question: "Kiểm thử phần mềm là gì?",
      answer: "Là quá trình đánh giá chất lượng phần mềm.",
      level: "easy",
      viewed: false,
    },
  ],
  automation: [
    {
      id: "1",
      question: "Tự động hóa kiểm thử là gì?",
      answer: "Sử dụng công cụ để kiểm thử phần mềm tự động.",
      level: "medium",
      viewed: false,
    },
  ],
  uiux: [
    {
      id: "1",
      question: "UI/UX là gì?",
      answer: "UI là giao diện người dùng, UX là trải nghiệm người dùng.",
      level: "easy",
      viewed: false,
    },
  ],
  figma: [
    {
      id: "1",
      question: "Figma là gì?",
      answer: "Figma là công cụ thiết kế giao diện dựa trên web.",
      level: "easy",
      viewed: false,
    },
  ],
  digital: [
    {
      id: "1",
      question: "Digital Marketing là gì?",
      answer: "Là tiếp thị số trên các nền tảng số.",
      level: "easy",
      viewed: false,
    },
  ],
  seo: [
    {
      id: "1",
      question: "SEO là gì?",
      answer: "SEO là tối ưu hóa công cụ tìm kiếm.",
      level: "medium",
      viewed: false,
    },
  ],
  matlab: [
    {
      id: "1",
      question: "MATLAB là gì?",
      answer: "MATLAB là môi trường tính toán số và lập trình.",
      level: "medium",
      viewed: false,
    },
  ],
  autocad: [
    {
      id: "1",
      question: "AutoCAD là gì?",
      answer: "AutoCAD là phần mềm thiết kế kỹ thuật.",
      level: "medium",
      viewed: false,
    },
  ],
  content: [
    {
      id: "1",
      question: "Content Marketing là gì?",
      answer: "Là tiếp thị thông qua nội dung.",
      level: "easy",
      viewed: false,
    },
  ],
  social: [
    {
      id: "1",
      question: "Social Media là gì?",
      answer: "Là các nền tảng mạng xã hội.",
      level: "easy",
      viewed: false,
    },
  ],
  finance: [
    {
      id: "1",
      question: "Tài chính doanh nghiệp là gì?",
      answer: "Là quản lý tài chính trong doanh nghiệp.",
      level: "medium",
      viewed: false,
    },
  ],
  accounting: [
    {
      id: "1",
      question: "Kế toán là gì?",
      answer:
        "Là quá trình ghi chép, phân loại, tổng hợp các nghiệp vụ kinh tế.",
      level: "medium",
      viewed: false,
    },
  ],
};
