export type UserRole = "designer" | "sales";

export interface MockUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  department: string;
  avatarUrl?: string;
}

export interface Design {
  id: string;
  company: string;
  title: string;
  description: string;
  category: "basic" | "brand" | "widget";
  industry: string;
  screenTypes: string[];
  devices: string[];
  year: number;
  tags: string[];
  images: string[];
  isRepresentative: boolean;
  isArchived: boolean;
  viewCount: number;
}

export interface BoardItem {
  id: string;
  designId: string;
  order: number;
  memo: string;
}

export interface ShareLink {
  id: string;
  token: string;
  hasSecurityCode: boolean;
  securityCode?: string;
  expiresAt?: string;
  status: "active" | "expired" | "inactive";
  accessCount: number;
  createdAt: string;
}

export interface Board {
  id: string;
  title: string;
  clientName: string;
  description: string;
  items: BoardItem[];
  shareLinks: ShareLink[];
  createdAt: string;
  createdBy: string;
}

export const MOCK_USERS: MockUser[] = [
  {
    id: "user-1",
    name: "김민지",
    email: "minji.kim@hunet.co.kr",
    role: "designer",
    department: "디자인팀",
    avatarUrl: "https://images.unsplash.com/photo-1763478958776-ebd04b6459ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200",
  },
  {
    id: "user-2",
    name: "이준혁",
    email: "junhyuk.lee@hunet.co.kr",
    role: "sales",
    department: "영얅1팀",
  },
];

export const MOCK_DESIGNS: Design[] = [
  {
    id: "d-001",
    company: "삼성전자",
    title: "삼성전자 연수원",
    description: "대기업 맞춤형 브랜드 아이덴티티를 살린 프리미엄 연수원 디자인. 기업 캐릭터와 CI를 적극 활용해 임직원에게 친숙하고 일관된 학습 경험을 제공합니다.",
    category: "brand",
    industry: "전자/반도체",
    screenTypes: ["메인", "학습현황", "콘텐츠 상세"],
    devices: ["PC", "모바일"],
    year: 2025,
    tags: ["브랜딩", "캐릭터", "다크모드", "반응형"],
    images: [
      "https://images.unsplash.com/photo-1758630737900-a28682c5aa69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1763718528755-4bca23f82ac3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
    isRepresentative: true,
    isArchived: false,
    viewCount: 128,
  },
  {
    id: "d-002",
    company: "현대자동차",
    title: "현대자동차 연수원",
    description: "자동차 산업의 역동성을 담아낸 모션 중심 디자인. 위젯을 활용해 학습 현황과 마일리지를 직관적으로 확인할 수 있는 개인화 UI를 구현했습니다.",
    category: "widget",
    industry: "자동차/모빌리티",
    screenTypes: ["메인", "마이페이지", "학습현황 위젯"],
    devices: ["PC"],
    year: 2025,
    tags: ["위젯", "마일리지", "대시보드", "개인화"],
    images: [
      "https://images.unsplash.com/photo-1716703432455-3045789de738?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1558655146-6c222b05fce4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
    isRepresentative: true,
    isArchived: false,
    viewCount: 96,
  },
  {
    id: "d-003",
    company: "LG화학",
    title: "LG화학 연수원",
    description: "학습 콘텐츠 탐색과 수강에 집중한 표준 구조. 간결하고 직관적인 UI로 다양한 연령대의 임직원이 쉽게 사용할 수 있도록 설계되었습니다.",
    category: "basic",
    industry: "화학/소재",
    screenTypes: ["메인", "콘텐츠 목록", "학습 플레이어"],
    devices: ["PC", "모바일", "태블릿"],
    year: 2024,
    tags: ["심플", "표준형", "접근성", "반응형"],
    images: [
      "https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
    isRepresentative: true,
    isArchived: false,
    viewCount: 74,
  },
  {
    id: "d-004",
    company: "롯데그룹",
    title: "롯데그룹 통합 연수원",
    description: "그룹사 계열사를 아우르는 통합 연수원 디자인. 롯데의 브랜드 콜러와 캐릭터를 적극 활용해 친근하고 활기찬 학습 환경을 조성했습니다.",
    category: "brand",
    industry: "유통/식품",
    screenTypes: ["메인", "부서별 학습", "이벤트"],
    devices: ["PC", "모바일"],
    year: 2024,
    tags: ["그룹사", "캐릭터", "이벤트", "브랜딩"],
    images: [
      "https://images.unsplash.com/photo-1760004811280-f15126cffebc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
    isRepresentative: true,
    isArchived: false,
    viewCount: 61,
  },
  {
    id: "d-005",
    company: "카카오",
    title: "카카오 연수원",
    description: "IT 기업 특성에 맞게 설계된 위젯 중심 UI. 캘린더, 학습 현황, 추천 콘텐츠 위젯을 전면에 배치해 개인화된 학습 경험을 제공합니다.",
    category: "widget",
    industry: "IT/플랫폼",
    screenTypes: ["메인", "위젯 보드", "콘텐츠 추천"],
    devices: ["PC", "모바일"],
    year: 2025,
    tags: ["위젯", "추천", "캘린더", "IT"],
    images: [
      "https://images.unsplash.com/photo-1516880711640-ef7db81be3e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
    isRepresentative: false,
    isArchived: false,
    viewCount: 88,
  },
  {
    id: "d-006",
    company: "서울아산병원",
    title: "서울아산병원 연수원",
    description: "의료기관 특성을 반영한 전문적이고 신뢰감 있는 디자인. 직종별 학습 경로와 필수 교육 트래킹에 최적화된 구조입니다.",
    category: "basic",
    industry: "의료/헬스케어",
    screenTypes: ["메인", "직종별 학습", "이수 현황"],
    devices: ["PC", "태블릿"],
    year: 2024,
    tags: ["의료", "직종별", "이수관리", "신뢰"],
    images: [
      "https://images.unsplash.com/photo-1758611972515-23399a8786df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
    isRepresentative: true,
    isArchived: false,
    viewCount: 52,
  },
  {
    id: "d-007",
    company: "포스코",
    title: "포스코 스마트 연수원",
    description: "제조업 현장 중심의 모바일 최적화 설계. 현장 직원이 스마트 기기로 손쉭게 학습할 수 있도록 직관적인 네비게이션과 오프라인 지원 UI를 갼곌습니다.",
    category: "basic",
    industry: "철강/제조",
    screenTypes: ["메인", "현장학습", "오프라인"],
    devices: ["모바일", "태블릿"],
    year: 2025,
    tags: ["모바일", "현장", "오프라인", "심플"],
    images: [
      "https://images.unsplash.com/photo-1587754981771-ceb2c7532473?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
    isRepresentative: false,
    isArchived: false,
    viewCount: 43,
  },
  {
    id: "d-008",
    company: "신한은행",
    title: "신한은행 연수원",
    description: "금융 기관의 콤플라이언스 교육에 특화된 디자인. 필수 교육 이수 현황을 한눈에 파악할 수 있는 대시보드형 메인 화면이 특징입니다.",
    category: "widget",
    industry: "금융/은행",
    screenTypes: ["메인", "필수교육", "이수 대시보드"],
    devices: ["PC"],
    year: 2024,
    tags: ["금융", "콤플라이언스", "대시보드", "이수"],
    images: [
      "https://images.unsplash.com/photo-1763718528755-4bca23f82ac3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
    isRepresentative: false,
    isArchived: false,
    viewCount: 67,
  },
];

export const MOCK_BOARDS: Board[] = [
  {
    id: "b-001",
    title: "A제약 맞춤 제안",
    clientName: "A제약",
    description: "의료/헬스케어 업종에 적합한 연수원 디자인 레퍼런스입니다.",
    items: [
      { id: "bi-1", designId: "d-006", order: 0, memo: "의료기관 레퍼런스 대표 사례" },
      { id: "bi-2", designId: "d-003", order: 1, memo: "심플한 표준 디자인 예시" },
    ],
    shareLinks: [
      {
        id: "sl-1",
        token: "abc123xyz",
        hasSecurityCode: true,
        securityCode: "1234",
        expiresAt: "2026-05-15",
        status: "active",
        accessCount: 3,
        createdAt: "2026-04-10",
      },
    ],
    createdAt: "2026-04-10",
    createdBy: "user-2",
  },
  {
    id: "b-002",
    title: "IT스타트업 제안서",
    clientName: "테크스타트 주식회사",
    description: "IT/플랫폼 기업 특성에 맞는 현대적인 디자인 레퍼런스입니다.",
    items: [
      { id: "bi-3", designId: "d-005", order: 0, memo: "IT기업 스타일 참고" },
      { id: "bi-4", designId: "d-001", order: 1, memo: "브랜딩 강조 사례" },
      { id: "bi-5", designId: "d-002", order: 2, memo: "위젯형 대시보드 예시" },
    ],
    shareLinks: [
      {
        id: "sl-2",
        token: "def456uvw",
        hasSecurityCode: false,
        expiresAt: "2026-04-30",
        status: "active",
        accessCount: 7,
        createdAt: "2026-04-08",
      },
    ],
    createdAt: "2026-04-08",
    createdBy: "user-2",
  },
  {
    id: "b-003",
    title: "금융사 연수원 제안",
    clientName: "B은행",
    description: "금융 규제 콤플라이언스 교육에 특화된 레퍼런스 구성입니다.",
    items: [
      { id: "bi-6", designId: "d-008", order: 0, memo: "금융 콤플라이언스 대시보드" },
      { id: "bi-7", designId: "d-003", order: 1, memo: "표준형 참고" },
    ],
    shareLinks: [
      {
        id: "sl-3",
        token: "ghi789rst",
        hasSecurityCode: true,
        securityCode: "5678",
        status: "expired",
        accessCount: 12,
        createdAt: "2026-03-20",
      },
    ],
    createdAt: "2026-03-20",
    createdBy: "user-2",
  },
];

export const CATEGORY_LABELS: Record<string, string> = {
  basic: "베이직형",
  brand: "브랜드형",
  widget: "위젯형",
};

export const CATEGORY_COLORS: Record<string, { bg: string; text: string }> = {
  brand: { bg: "#F3F0FE", text: "#6541F2" },
  basic: { bg: "#EBF3FF", text: "#0066FF" },
  widget: { bg: "#EBFAF0", text: "#00BF40" },
};

export const INDUSTRIES = [
  "전자/반도체",
  "자동차/모빌리티",
  "화학/소재",
  "유통/식품",
  "IT/플랫폼",
  "의료/헬스케어",
  "철강/제조",
  "금융/은행",
  "교육",
];

export const SCREEN_TYPES = ["메인", "학습현황", "콘텐츠 상세", "마이페이지", "위젯 보드", "필수교육", "이수 현황"];

export const DEVICES = ["PC", "모바일", "태블릿"];

export const YEARS = [2025, 2024, 2023];
