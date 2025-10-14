import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";
export const useQuickLinksStore = defineStore("quickLinks", () => {
    const quickLinks = ref([
    {
        id: uuidv4(),
        category: "關於台農院",
        icon: "icon-building-library",
        items: [
            {
                id: uuidv4(),
                text: "院簡介(官網)",
                link: "https://www.triwra.org.tw/",
            },
            {
                id: uuidv4(),
                text: "院長室",
                link: "https://www.triwra.org.tw/SupervisorProfile",
            },
            { id: uuidv4(), text: "業務部門主管", link: "/DepartmentList" },
            {
                id: uuidv4(),
                text: "行政部門簡介",
                link: "https://tsr01.triwra.org.tw/km/ad_work/download/department01.pdf",
            },
            {
                id: uuidv4(),
                text: "辦公空間位置圖",
                list: [
                    {
                        text: "22樓",
                        link: "https://tsr01.triwra.org.tw/km/ad_work/download/o01-04-22F.pdf",
                    },
                    {
                        text: "20樓",
                        link: "https://tsr01.triwra.org.tw/km/ad_work/download/o01-04-20F.pdf",
                    },
                    {
                        text: "19樓",
                        link: "https://tsr01.triwra.org.tw/km/ad_work/download/o01-04-19F.pdf",
                    },
                    {
                        text: "16樓",
                        link: "https://tsr01.triwra.org.tw/km/ad_work/download/o01-04-16F.pdf",
                    },
                    {
                        text: "5樓",
                        link: "https://tsr01.triwra.org.tw/km/ad_work/download/o01-04-5F.pdf",
                    },
                ],
            },
            {
                id: uuidv4(),
                text: "同仁分機表",
                list: [
                    { text: "分機表單",link: "data/extension.pdf",},
                    { text: "話機設定", link: "data/extension01.ppsx" },
                ],
            },
            {
                id: uuidv4(),
                text: "交通位置資訊",
                list: [
                    { text: "淡水本院", link: "data/淡水本院交通資訊.docx" },
                    { text: "台北分院", link: "data/台北分院交通資訊.docx" },
                ],
            },
            {
                id: uuidv4(),
                text: "研究院全名與logo",
                list: [
                    {
                        text: "研究院名稱",
                        link: "https://tsr01.triwra.org.tw/km/ad_work/download/portal01_07_01.pdf",
                    },
                    {
                        text: "中文文件logo_台(白底)",
                        link: "https://tsr01.triwra.org.tw/km/ad_work/download/logo/logo0-1.png",
                    },
                    {
                        text: "中文文件logo_台(黃字)",
                        link: "https://tsr01.triwra.org.tw/km/ad_work/download/logo/logo0-2.jpg",
                    },
                    {
                        text: "中文文件logo_台(黃底)",
                        link: "https://tsr01.triwra.org.tw/km/ad_work/download/logo/logo0-3.jpg",
                    },
                    {
                        text: "中英文件logo_台(白底)",
                        link: "https://tsr01.triwra.org.tw/km/ad_work/download/logo/logo2-1.png",
                    },
                    {
                        text: "中英文件logo_台(黃字)",
                        link: "https://tsr01.triwra.org.tw/km/ad_work/download/logo/logo2-2.png",
                    },
                    {
                        text: "中英文件logo_台(黃底)",
                        link: "https://tsr01.triwra.org.tw/km/ad_work/download/logo/logo2-3.png",
                    },
                ],
            },
            {
                id: uuidv4(),
                text: "簡報專用結語",
                link: "data/entrance005.pptx",
            },
        ],
    },
    {
        id: uuidv4(),
        category: "行政類",
        icon: "icon-folder",
        items: [
            {
                id: uuidv4(),
                text: "行政管理規章(表單下載)",
                link: "http://tsr01.triwra.org.tw/erp/ad_work/kmlist.htm",
                
            },
            {
                id: uuidv4(),
                text: "差勤管理系統",
                link: "https://webapp.triwra.org.tw/worktime/Home/Login",
            },
            {
                id: uuidv4(),
                text: "公文管理系統",
                link: "https://webapp.triwra.org.tw/eop/Home/Login",
            },
            {
                id: uuidv4(),
                text: "計畫期款申請系統",
                link: "https://tsr01.triwra.org.tw/erp/planmoneyapply/Home/Login",
            },
            {
                id: uuidv4(),
                text: "費用申請系統",
                link: "https://tsr01.triwra.org.tw/erp/moneyapply/Home/Login",
            },
            {
                id: uuidv4(),
                text: "會議室申請系統",
                link: "https://tsr01.triwra.org.tw/erp/meetschedule/Home/Login",
            },
            {
                id: uuidv4(),
                text: "設備申借管理系統",
                link: "https://tsr01.triwra.org.tw/erp/toolapply/Home/Login",
            },
            {
                id: uuidv4(),
                text: "公務車申請系統",
                link: "https://tsr01.triwra.org.tw/erp/carschedule/Home/Login",
            },
            {
                id: uuidv4(),
                text: "辦公物品管理系統",
                link: "https://tsr01.triwra.org.tw/erp/officeproduct/Home/Login",
            },
            {
                id: uuidv4(),
                text: "會議紀錄查詢系統",
                link: "https://tsr01.triwra.org.tw/erp/meetingminutes/Home/Login",
            },
            {
                id: uuidv4(),
                text: "簽呈管理系統",
                link: "https://tsr01.triwra.org.tw/erp/petitionmanage/Home/Login",
            },
        ],
    },
    {
        id: uuidv4(),
        category: "資料查詢",
        icon: "icon-search",
        items: [
            {
                id: uuidv4(),
                text: "數位資產平台",
                link: "https://info.triwra.org.tw/Account/Login?ReturnUrl=%2F",
            },
            { id: uuidv4(), text: "購置書籍目錄", link: "data/booklist.xlsx" },
            {
                id: uuidv4(),
                text: "常用廠商名錄",
                link: "https://tsr01.triwra.org.tw/km/ad_work/kmlist_vendor.asp",
            },
            // {
            //     id: uuidv4(),
            //     text: "計畫投標作業",
            //     link: "https://tsr01.triwra.org.tw/km/ad_work/download/o03-04-計畫投標作業.pdf",
            // },
        ],
    },
    {
        id: uuidv4(),
        category: "職場宣導",
        icon: "icon-stethoscope",
        items: [
            {
                id: uuidv4(),
                text: "執行職務遭受不法侵害預防計畫",
                link: "https://tsr01.triwra.org.tw/km/ad_work/workplaceplan.asp",
            },
            {
                id: uuidv4(),
                text: "性別平等",
                link: "https://tsr01.triwra.org.tw/km/ad_work/genderEquality.asp",
            },
            {
                id: uuidv4(),
                text: "健康檢查",
                list: [
                    {
                        text: "健康檢查須知",
                        link: "https://tsr01.triwra.org.tw/km/ad_work/download/健康檢查須知_內網公告版114.pdf",
                    },
                    {
                        text: "健檢支出證明單",
                        link: "data/健康檢查支出證明單.docx",
                    },
                    {
                        text: "健檢資料使用同意書",
                        link: "https://tsr01.triwra.org.tw/km/ad_work/download/06健康檢查個人資料使用同意書(空白).pdf",
                    },
                ],
            },
            {
                id: uuidv4(),
                text: "職業安全宣導",
                link: "https://tsr01.triwra.org.tw/km/ad_work/kmlist_training.asp",
            },
            {
                id: uuidv4(),
                text: "生活管理與禮儀",
                list: [
                    {
                        text: "環境維護",
                        link: "https://tsr01.triwra.org.tw/km/ad_work/download/environment0300.pdf",
                    },
                    {
                        text: "生活須知",
                        link: "https://tsr01.triwra.org.tw/km/ad_work/download/environment0301.pdf",
                    },
                    {
                        text: "工作禮儀",
                        link: "https://tsr01.triwra.org.tw/km/ad_work/download/environment0302.pdf",
                    },
                ],
            },
            {
                id: uuidv4(),
                text: "防疫健康聲明表",
                link: "data/class3_4.docx",
            },
            {
                id: uuidv4(),
                text: "企業CSR-淨灘與淨山",
                list: [
                    {
                        text: "活動辦法",
                        link: "https://tsr01.triwra.org.tw/km/ad_work/download/environment0500.pdf",
                    },
                    {
                        text: "心得報告-表格",
                        link: "data/environment0501.docx",
                    },
                ],
            },
        ],
    },
    {
        id: uuidv4(),
        category: "資訊類",
        icon: "icon-plant",
        items: [
            {
                id: uuidv4(),
                text: "資訊安全管理規範",
                link: "https://tsr01.triwra.org.tw/km/ad_work/download/IT01.pdf",
            },
            { id: uuidv4(), text: "資訊服務申請單", link: "data/1.4AC.docx" },
            {
                id: uuidv4(),
                text: "圖資使用申請",
                list: [
                    {
                        text: "圖資清冊表單",
                        link: "https://docs.google.com/spreadsheets/d/1cLdbSdm1hRLSVUcbN2DZFIthtuirP1c9eq1Q0HBR-us/edit?gid=0#gid=0",
                    },
                    { text: "圖資使用申請單", link: "data/it03_2.docx" },
                    { text: "流程及填寫說明", link: "data/it03_3.pptx" },
                ],
            },
            {
                id: uuidv4(),
                text: "遠端服務使用說明",
                link: "https://tsr01.triwra.org.tw/km/ad_work/download/forti.pdf",
            },
            {
                id: uuidv4(),
                text: "電腦應用軟體",
                link: "https://tsr01.triwra.org.tw/km/ad_work/download/it04.pdf",
            },
        ],
    },
    {
        id: uuidv4(),
        category: "空拍類",
        icon: "icon-plant",
        items: [
            {
                id: uuidv4(),
                text: "禁飛區圖層(20210615)",
                link: "data/vr02.zip",
            },
            {
                id: uuidv4(),
                text: "單位飛行計畫規劃申請表",
                link: "data/vr03.docx",
            },
            {
                id: uuidv4(),
                text: "單位飛行計畫規劃申請表範例",
                link: "https://tsr01.triwra.org.tw/km/ad_work/download/vr04.pdf",
            },
        ],
    },
]);
    // 初始化資料
    function setQuickLinks(data) {
        quickLinks.value = data;
    }
    // 更新某個清單中的項目
    function updateLink(listId, index, updatedLink) {
        const list = quickLinks.value.find((l) => l.id === listId);
        if (list) {
            if (index < list.items.length) {
                list.items[index] = updatedLink; // 更新
            } else {
                list.items.push(updatedLink); // 新增
            }
        }
    }
    // 刪除某個清單中的項目
    function deleteLink(listId, index) {
        const list = quickLinks.value.find((l) => l.id === listId);
        if (list) {
            list.items.splice(index, 1);
        }
    }
    return { quickLinks, setQuickLinks, updateLink, deleteLink };
});
