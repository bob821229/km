import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useSupervisorProfileListStore = defineStore("supervisorProfileList", () => {
    // 主管清單
    const supervisorProfileList = ref([
        {
        name: "邱豐真",
        positionTitle: "分院長",
        department: "台北分院",
        computerExpertise: ["組織管理", "政策分析", "農田水利政策企劃及相關法制作業"],
        schools: [
            {
                academicDegree: "博士候選人(在職進修)", //學位
                degreeStatus: "畢業", //畢業狀況
                name: "臺北大學", //學校名稱
                department: "公共行政暨政策研究所", //科系
                period: [null, null], //修業起訖年月
            },
            {
                academicDegree: "公共政策碩士", //學位
                degreeStatus: "畢業", //畢業狀況
                name: "臺北大學", //學校名稱
                department: "公共行政暨政策研究所", //科系
                period: [null, null], //修業起訖年月
            },
        ], //學歷
        //職務經歷
        workExperience: [
            {
                company: "台灣水資源與農業研究院", //公司名稱
                position: "資深研究專員", //職務名稱
                period: [null, null], //服務起訖年月
            },
            {
                company: "台灣水資源與農業研究院", //公司名稱
                position: "副院長", //職務名稱
                period: [null, null], //服務起訖年月
            },
            {
                company: "台灣水資源與農業研究院", //公司名稱
                position: "助理院長", //職務名稱
                period: [null, null], //服務起訖年月
            },
            {
                company: "台灣水資源與農業研究院", //公司名稱
                position: "研究二所所長", //職務名稱
                period: [null, null], //服務起訖年月
            },
            {
                company: "台灣水資源與農業研究院", //公司名稱
                position: "政策法制組組長", //職務名稱
                period: [null, null], //服務起訖年月
            },
            {
                company: "淡江大學水資源管理與政策研究中心", //公司名稱
                position: "農水法制組 組長", //職務名稱
                period: [null, null], //服務起訖年月
            },
            {
                company: "淡江大學水資源管理與政策研究中心", //公司名稱
                position: "農田水利組副組長", //職務名稱
                period: [null, null], //服務起訖年月
            },
        ],
        imageUrl:'邱豐真.jpg'
    },
    {
        name: "林賢銘",
        positionTitle: "所長",
        department: "研究一所",
        computerExpertise: ["水利工程", "海洋工程", "類神經網路", "機器學習"],
        schools: [
            {
                academicDegree: "碩士", //學位
                degreeStatus: "畢業", //畢業狀況
                name: "國立交通大學", //學校名稱
                department: "土木工程所", //科系
                period: [null, null], //修業起訖年月
            },
            {
                academicDegree: "學士", //學位
                degreeStatus: "畢業", //畢業狀況
                name: "國立臺灣海洋大學", //學校名稱
                department: "河海工程學系", //科系
                period: [null, null], //修業起訖年月
            },
        ], //學歷
        //職務經歷
        workExperience: [
            {
                company: "台灣水資源與農業研究院", //公司名稱
                position: "副所長", //職務名稱
                period: [null, null], //服務起訖年月
            },
            {
                company: "台灣水資源與農業研究院", //公司名稱
                position: "研究專員", //職務名稱
                period: [null, null], //服務起訖年月
            },
            {
                company: "天禾資訊有限公司", //公司名稱
                position: "工程師", //職務名稱
                period: [null, null], //服務起訖年月
            },
            {
                company: "交通部運輸研究所港灣技術研究中心", //公司名稱
                position: "研究助理", //職務名稱
                period: [null, null], //服務起訖年月
            },
        ],
        imageUrl: "林賢銘.jpg",
    },
    {
        name: "吳柏澍",
        positionTitle: "所長",
        department: "研究二所",
        computerExpertise: [
            "都市計畫",
            "國土計畫",
            "非都市土地利用",
            "不動產法律",
            "農田水利法",
            "地理資訊系統(GIS)",
            "人工智慧導入應用",
            "專案管理",
        ],
        schools: [
            {
                academicDegree: "碩士", //學位
                degreeStatus: "畢業", //畢業狀況
                name: "國立台灣大學", //學校名稱
                department: "建築與城鄉研究所", //科系
                period: [null, null], //修業起訖年月
            },
            {
                academicDegree: "雙主修學士", //學位
                degreeStatus: "畢業", //畢業狀況
                name: "國立清華大學", //學校名稱
                department: "社會學暨人類學", //科系
                period: [null, null], //修業起訖年月
            },
        ], //學歷
        //職務經歷
        workExperience: [
            {
                company: "台灣水資源與農業研究院", //公司名稱
                position: "副所長", //職務名稱
                period: [null, null], //服務起訖年月
            },
            {
                company: "台灣水資源與農業研究院", //公司名稱
                position: "研究專員", //職務名稱
                period: [null, null], //服務起訖年月
            },
            {
                company: "學邑工程技術顧問股份有限公司", //公司名稱
                position: "專案經理", //職務名稱
                period: [null, null], //服務起訖年月
            },
            {
                company: "中華經濟研究院", //公司名稱
                position: "輔佐研究員", //職務名稱
                period: [null, null], //服務起訖年月
            },
        ],
        imageUrl: "吳柏澍.jpg",
    },
    {
        name: "許峻嘉",
        positionTitle: "副所長",
        department: "研究二所",
        computerExpertise: [
            "人事行政",
            "公部門人力資源管理",
        ],
        schools: [
            {
                academicDegree: "博士班肄業", //學位
                degreeStatus: "肄業", //畢業狀況
                name: "國立台北大學", //學校名稱
                department: "公共行政暨政策學系", //科系
                period: [null, null], //修業起訖年月
            },
            {
                academicDegree: "碩士", //學位
                degreeStatus: "畢業", //畢業狀況
                name: "國立台北大學", //學校名稱
                department: "公共行政暨政策學系", //科系
                period: [null, null], //修業起訖年月
            },
        ], //學歷
        //職務經歷
        workExperience: [
            {
                company: "台灣水資源與農業研究院", //公司名稱
                position: "研究二所研究專員", //職務名稱
                period: [null, null], //服務起訖年月
            },
            {
                company: "台灣水資源與農業研究院", //公司名稱
                position: "研究專員", //職務名稱
                period: [null, null], //服務起訖年月
            },
            {
                company: "北京漢林國際健康診療投資有限公司", //公司名稱
                position: "人力資源兼運營經理", //職務名稱
                period: [null, null], //服務起訖年月
            },
            {
                company: "北京陽光未來藝術教育基金會", //公司名稱
                position: "項目管理兼人力資源專員", //職務名稱
                period: [null, null], //服務起訖年月
            },
        ],
        imageUrl: "許峻嘉.jpg",
    },
    {
        name: "簡靖芳",
        positionTitle: "所長",
        department: "研究三所",
        computerExpertise: [
            "土壤學",
            "碳匯",
            "水資源分配",
            "微生物學",
            "植物病原交互作用",
            "分子生物學",
        ],
        schools: [
            {
                academicDegree: "博士", //學位
                degreeStatus: "畢業", //畢業狀況
                name: "國立台灣大學", //學校名稱
                department: "農業化學所", //科系
                period: [null, null], //修業起訖年月
            },
            {
                academicDegree: "碩士", //學位
                degreeStatus: "畢業", //畢業狀況
                name: "國立台灣大學", //學校名稱
                department: "農業化學所", //科系
                period: [null, null], //修業起訖年月
            },
        ], //學歷
        //職務經歷
        workExperience: [
            {
                company: "艾滴科技股份有限公司", //公司名稱
                position: "首席科學家", //職務名稱
                period: [null, null], //服務起訖年月
            },
            {
                company: "中央研究院植物暨微生物研究所", //公司名稱
                position: "博士後研究員", //職務名稱
                period: [null, null], //服務起訖年月
            },
        ],
        imageUrl: "簡靖芳.jpg",
    },
    {
        name: "徐  顥",
        positionTitle: "所長",
        department: "研究四所",
        computerExpertise: ["水處理工程", "水質處理與分析", "環境教育"],
        schools: [
            {
                academicDegree: "博士", //學位
                degreeStatus: "畢業", //畢業狀況
                name: "國立暨南國際大學", //學校名稱
                department: "土木工程學系", //科系
                period: [null, null], //修業起訖年月
            },
            {
                academicDegree: "碩士", //學位
                degreeStatus: "畢業", //畢業狀況
                name: "國立暨南國際大學", //學校名稱
                department: "土木工程學系", //科系
                period: [null, null], //修業起訖年月
            },
            {
                academicDegree: "學士", //學位
                degreeStatus: "畢業", //畢業狀況
                name: "國立暨南國際大學", //學校名稱
                department: "土木工程學系", //科系
                period: [null, null], //修業起訖年月
            },
        ], //學歷
        //職務經歷
        workExperience: [
            {
                company: "台灣水資源與農業研究院", //公司名稱
                position: "研究六所 研究專員", //職務名稱
                period: [null, null], //服務起訖年月
            },
            {
                company: "台灣水資源與農業研究院", //公司名稱
                position: "研究四所 研究專員", //職務名稱
                period: [null, null], //服務起訖年月
            },
            {
                company: "國立暨南國際大學通識教育中心", //公司名稱
                position: "兼任助理教授、講師", //職務名稱
                period: [null, null], //服務起訖年月
            },
            {
                company: "國立暨南國際大學通識教育中心", //公司名稱
                position: "R立方學程教師社群召集人", //職務名稱
                period: [null, null], //服務起訖年月
            },
            {
                company: "國立暨南國際大學永續農業中心", //公司名稱
                position: "產品認證組組長", //職務名稱
                period: [null, null], //服務起訖年月
            },
            {
                company: "國立暨南國際大學科技學院", //公司名稱
                position: "第二期大學社會責任實踐計畫業師", //職務名稱
                period: [null, null], //服務起訖年月
            },
        ],
        imageUrl: "徐顥.jpg",
    },
    {
        name: "謝宜叡",
        positionTitle: "副所長",
        department: "研究四所",
        computerExpertise: ["土木工程", "結構工程", "工程製圖"],
        schools: [
            {
                academicDegree: "碩士", //學位
                degreeStatus: "畢業", //畢業狀況
                name: "國立台北科技大學", //學校名稱
                department: "土木與防災學系結構組", //科系
                period: [null, null], //修業起訖年月
            },
            {
                academicDegree: "學士", //學位
                degreeStatus: "畢業", //畢業狀況
                name: "淡江大學土木工程學系", //學校名稱
                department: "營建管理組", //科系
                period: [null, null], //修業起訖年月
            },
        ], //學歷
        //職務經歷
        workExperience: [
            {
                company: "台灣水資源與農業研究院研究四所", //公司名稱
                position: "副所長", //職務名稱
                period: [null, null], //服務起訖年月
            },
            {
                company: "台灣水資源與農業研究院研究四所", //公司名稱
                position: "研究專員", //職務名稱
                period: [null, null], //服務起訖年月
            },
        ],
        imageUrl: "謝宜叡.jpg",
    },
    {
        name: "劉柏江",
        positionTitle: "所長",
        department: "研究五所",
        computerExpertise: [
            "一般民事",
            "刑事",
            "行政",
            "訴願法",
            "國家賠償法",
            "農田水利法",
            "財團法人法",
            "森林法",
        ],
        schools: [
            {
                academicDegree: "博士", //學位
                degreeStatus: "畢業", //畢業狀況
                name: "國立台北大學", //學校名稱
                department: "法律學系", //科系
                period: [null, null], //修業起訖年月
            },
            {
                academicDegree: "碩士", //學位
                degreeStatus: "畢業", //畢業狀況
                name: "國立台北大學", //學校名稱
                department: "法律學系", //科系
                period: [null, null], //修業起訖年月
            },
        ], //學歷
        //職務經歷
        workExperience: [
            {
                company: "台灣水資源與農業研究院", //公司名稱
                position: "法制服務團執行祕書", //職務名稱
                period: [null, null], //服務起訖年月
            },
            {
                company: "馬偕醫護管理專科學校", //公司名稱
                position: "兼任助理教授", //職務名稱
                period: [null, null], //服務起訖年月
            },
            {
                company: "新學林出版社", //公司名稱
                position: "司法考試用書作者", //職務名稱
                period: [null, null], //服務起訖年月
            },
            {
                company: "國立台北大學", //公司名稱
                position: "兼任講師", //職務名稱
                period: [null, null], //服務起訖年月
            },
            {
                company: "銘傳大學", //公司名稱
                position: "兼任講師", //職務名稱
                period: [null, null], //服務起訖年月
            },
            {
                company: "國立台北商業大學", //公司名稱
                position: "兼任講師", //職務名稱
                period: [null, null], //服務起訖年月
            },
            {
                company: "國立金門大學", //公司名稱
                position: "兼任講師", //職務名稱
                period: [null, null], //服務起訖年月
            },
            {
                company: "世新大學", //公司名稱
                position: "兼任講師", //職務名稱
                period: [null, null], //服務起訖年月
            },
            {
                company: "臺灣警察專科學校", //公司名稱
                position: "兼任講師", //職務名稱
                period: [null, null], //服務起訖年月
            },
        ],
        imageUrl: "劉柏江.jpg",
    },
    {
        name: "紀祥鈺",
        positionTitle: "所長",
        department: "研究六所",
        computerExpertise: [
            "影像分析處理",
            "農作物生產監測與規劃",
            "樣區調查與規劃",
        ],
        schools: [
            {
                academicDegree: "碩士", //學位
                degreeStatus: "畢業", //畢業狀況
                name: "國立嘉義大學", //學校名稱
                department: "森林暨自然學系", //科系
                period: [null, null], //修業起訖年月
            },
            {
                academicDegree: "學士", //學位
                degreeStatus: "畢業", //畢業狀況
                name: "中國文化大學", //學校名稱
                department: "森林暨自然保育學系", //科系
                period: [null, null], //修業起訖年月
            },
        ], //學歷
        //職務經歷
        workExperience: [
            {
                company: "生態檢核及保育服務團", //公司名稱
                position: "執行秘書", //職務名稱
                period: [null, null], //服務起訖年月
            },
            {
                company: "台灣水資源與農業研究院", //公司名稱
                position: "副所長", //職務名稱
                period: [null, null], //服務起訖年月
            },
            {
                company: "淡江大學水資源管理與政策研究中心", //公司名稱
                position: "研究專員", //職務名稱
                period: [null, null], //服務起訖年月
            },
            {
                company: "勃翔股份有限公司上海市實驗農場", //公司名稱
                position: "主任", //職務名稱
                period: [null, null], //服務起訖年月
            },
        ],
        imageUrl: "紀祥鈺.jpg",
    },
    {
        name: "蕭維廷",
        positionTitle: "副所長",
        department: "研究六所",
        computerExpertise: [
            "生態學",
            "動物行為學",
            "野生動物調查",
        ],
        schools: [
            {
                academicDegree: "碩士", //學位
                degreeStatus: "畢業", //畢業狀況
                name: "國立屏東科技大學", //學校名稱
                department: "野生動物保育研究所", //科系
                period: [null, null], //修業起訖年月
            },
            {
                academicDegree: "學士", //學位
                degreeStatus: "畢業", //畢業狀況
                name: "中國文化大學", //學校名稱
                department: "森林暨自然保育學系", //科系
                period: [null, null], //修業起訖年月
            },
        ], //學歷
        //職務經歷
        workExperience: [
            {
                company: "台灣水資源與農業研究院研究四所", //公司名稱
                position: "研究專員", //職務名稱
                period: [null, null], //服務起訖年月
            },
            {
                company: "蝌蚪池塘自然文創", //公司名稱
                position: "動物生態講師", //職務名稱
                period: [null, null], //服務起訖年月
            },
        ],
        imageUrl: "蕭維廷.jpg",
    },
    {
        name: "陳昱蓉",
        positionTitle: "主任",
        department: "林業研究發展中心",
        computerExpertise: [
            "植物組織培養及育苗",
            "分子生物學",
            "造林撫育",
            "森林經營",
            "生物技術",
        ],
        schools: [
            {
                academicDegree: "博士", //學位
                degreeStatus: "畢業", //畢業狀況
                name: "國立台灣大學", //學校名稱
                department: "生物資源暨農學院林環境暨資源學系", //科系
                period: [null, null], //修業起訖年月
            },
            {
                academicDegree: "學士", //學位
                degreeStatus: "畢業", //畢業狀況
                name: "國立台灣大學", //學校名稱
                department: "生物資源暨農學院林環境暨資源學系", //科系
                period: [null, null], //修業起訖年月
            },
        ], //學歷
        //職務經歷
        workExperience: [
            {
                company: "優克力農林科學公司", //公司名稱
                position: "研究員", //職務名稱
                period: [null, null], //服務起訖年月
            },
            {
                company: "中央研究院植物暨微生物學研究所博士後", //公司名稱
                position: "研究員", //職務名稱
                period: [null, null], //服務起訖年月
            },
        ],
        imageUrl: "陳昱蓉.jpg",
    },
    {
        name: "謝青宏",
        positionTitle: "副處長",
        department: "教育推廣處",
        computerExpertise: [
            "行政組織理論與管理",
            "公共政策理論與務實",
            "農田水利事業發展與人力資源管理",
        ],
        schools: [
            {
                academicDegree: "博士", //學位
                degreeStatus: "畢業", //畢業狀況
                name: "國立政治大學", //學校名稱
                department: "公共行政學系", //科系
                period: [null, null], //修業起訖年月
            },
            {
                academicDegree: "碩士", //學位
                degreeStatus: "畢業", //畢業狀況
                name: "國立政治大學", //學校名稱
                department: "公共行政學系", //科系
                period: [null, null], //修業起訖年月
            },
            {
                academicDegree: "學士", //學位
                degreeStatus: "畢業", //畢業狀況
                name: "中國文化大學", //學校名稱
                department: "行政管理學系", //科系
                period: [null, null], //修業起訖年月
            },
        ], //學歷
        //職務經歷
        workExperience: [
            {
                company: "台灣水資源與農業研究院", //公司名稱
                position: "副所長", //職務名稱
                period: [null, null], //服務起訖年月
            },
            {
                company: "台灣水資源與農業研究院", //公司名稱
                position: "研究專員", //職務名稱
                period: [null, null], //服務起訖年月
            },
            {
                company: "佛光大學公共事務學系", //公司名稱
                position: "兼任助理教授", //職務名稱
                period: [null, null], //服務起訖年月
            },
            {
                company:
                    "中央警察大學犯罪防治學系犯罪問題研究中心「學術專題演講」講座", //公司名稱
                position: "", //職務名稱
                period: [null, null], //服務起訖年月
            },
            {
                company: "國立中山大學公共事務學系「公共事務管理講座」", //公司名稱
                position: "", //職務名稱
                period: [null, null], //服務起訖年月
            },
            {
                company: "前行政院研究發展考核委員會綜合計畫處", //公司名稱
                position: "聘用副研究員", //職務名稱
                period: [null, null], //服務起訖年月
            },
            {
                company: "前法務部政風司委託研究專案", //公司名稱
                position: "專任研究員", //職務名稱
                period: [null, null], //服務起訖年月
            },
        ],
        imageUrl: "謝青宏.jpg",
    },
    {
        name: "吳宜家",
        positionTitle: "副處長",
        department: "國際合作處",
        computerExpertise: ["專案管理", "研究分析", "人際溝通", "藝術創作"],
        schools: [
            {
                academicDegree: "碩士", //學位
                degreeStatus: "畢業", //畢業狀況
                name: "英國倫敦大學學院", //學校名稱
                department: "美術系", //科系
                period: [null, null], //修業起訖年月
            },
            {
                academicDegree: "學士", //學位
                degreeStatus: "畢業", //畢業狀況
                name: "國立藝術學院(今國立台北藝術大學)", //學校名稱
                department: "藝術系", //科系
                period: [null, null], //修業起訖年月
            },
        ], //學歷
        //職務經歷
        workExperience: [
            {
                company: "國際灌溉排水協會中華民國國家委員會", //公司名稱
                position: "副秘書長", //職務名稱
                period: [null, null], //服務起訖年月
            },
            {
                company: "台北市政府台北智慧城市專案辦公室", //公司名稱
                position: "專案管理師", //職務名稱
                period: [null, null], //服務起訖年月
            },
            {
                company: "國家發展委員會", //公司名稱
                position: "助理研究員", //職務名稱
                period: [null, null], //服務起訖年月
            },
            {
                company: "阮劇團", //公司名稱
                position: "執行製作", //職務名稱
                period: [null, null], //服務起訖年月
            },
        ],
        imageUrl: "吳宜家.jpg",
    },
    {
        name: "康文龍",
        positionTitle: "處長",
        department: "數位發展處",
        computerExpertise: ["系統分析與開發", "資料庫規劃與管理"],
        schools: [
            {
                academicDegree: "學士", //學位
                degreeStatus: "畢業", //畢業狀況
                name: "龍華科技大學", //學校名稱
                department: "資訊管理系", //科系
                period: [null, null], //修業起訖年月
            },
        ], //學歷
        //職務經歷
        workExperience: [
            {
                company: "寶碩財務科技股份有限公司", //公司名稱
                position: "技術副理", //職務名稱
                period: [null, null], //服務起訖年月
            },
            {
                company: "財團法人中華民國電腦技能基金會", //公司名稱
                position: "部門主管", //職務名稱
                period: [null, null], //服務起訖年月
            },
        ],
        imageUrl: "康文龍.jpg",
    },
]);
    // 初始化資料
    function setSupervisorProfileList(data) {
        supervisorProfileList.value = data;
    }
    // 更新某個清單中的項目
    function updateLink(listId, index, updatedLink) {
        const list = supervisorProfileList.value.find((l) => l.id === listId);
        if (list) {
            list.items[index] = updatedLink;
        }
    }
    // 刪除某個清單中的項目
    function deleteLink(listId, index) {
        const list = supervisorProfileList.value.find((l) => l.id === listId);
        if (list) {
            list.items.splice(index, 1);
        }
    }
    return { supervisorProfileList, setSupervisorProfileList, updateLink, deleteLink };
});
