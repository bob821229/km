import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useDepartmentListStore = defineStore("departmentList", () => {
    // 部門列表
    const departmentList = ref([
        // {
        //     idx: 0,
        //     name: "台北分院",
        //     title: "",
        //     managers:[
        //         {role:"主管",name:"邱豐真",title:"分院長"},
        //     ],
        //     core: [
        //         "公共治理與制度創新研究",
        //         "農業環境與政策研究",
        //         "林業研究發展",
        //     ],
        // },
        {
            idx: 1,
            name: "研究一所",
            title: "農業水資源與灌溉管理研究所",
            managers:[
                {role:"主管",name:"林賢銘",title:"所長"},
            ],
            core: [
                "農田水利水文分析技術研發",
                "水資源智慧管理與灌溉配水研究",
                "農田水利設施管理與災害預警機制研究",
            ],
        },
        {
            idx: 2,
            name: "研究二所",
            title: "公共治理與制度創新研究所",
            managers:[
                {role:"主管",name:"吳柏澍",title:"所長"},
                {role:"副主管",name:"許峻嘉",title:"副所長"},
            ],
            core: [
                "人事制度與公部門人力資源管理",
                "土地管理與治理",
                "公私協力輔導"
            ],
        },
        {
            idx: 3,
            name: "研究三所",
            title: "農業環境與政策研究所",
            managers:[
                {role:"主管",name:"簡靖芳",title:"所長"}
            ],
            core: [
                "農業環境政策研析與制度規劃",
                "農業環境監測與減碳循環推動",
                "農業產業輔導與人才培育",
            ],
        },
        {
            idx: 4,
            name: "研究四所",
            title: "農田水利工程建設與管理研究所",
            managers:[
                {role:"主管",name:"徐  顥",title:"所長"},
                {role:"副主管",name:"謝宜叡",title:"副所長"},
            ],
            core: [
                "農田水利中長程政策規劃及推動研究",
                "農田水利工程灌溉排水、取水設施工程可行性研究",
                "農田水利工程事務及相關規範"
            ],
        },
        {
            idx: 5,
            name: "研究五所",
            title: "法制研究所",
            managers:[
                {role:"主管",name:"劉柏江",title:"所長"}
            ],
            core: [
                "提供法制意見及協助法規修訂",
                "協助法制業務推動",
                "協辦法制教育訓練",
            ],
        },
        {
            idx: 6,
            name: "研究六所",
            title: "生態檢核及保育研究所",
            managers:[
                {role:"主管",name:"紀祥鈺",title:"所長"},
                {role:"副主管",name:"蕭維廷",title:"副所長"},
            ],
            core: [
                "政府公共工程之生態檢核作業", 
                "生態資源調查", 
                "生態資源調查"
            ],
        },
        {
            idx: 7,
            name: "林業研究發展中心",
            title: "",
            managers:[
                {role:"主管",name:"陳昱蓉",title:"主任"}
            ],
            core: [
                "私有林經營輔導與資源整合",
                "林產業人才培育與技術交流",
                "林產業振興與永續發展"
            ],
        },
        {
            idx: 8,
            name: "公共事務處",
            title: "",
            managers:[
                {role:"主管",name:"李佳真",title:"處長"},
                {role:"副主管",name:"謝青宏",title:"副處長"}
            ],
            core: [
                "政策品牌與整合行銷",
                "全方位活動與專業典禮執行",
                "農田水利多元推廣"
            ],
        },
        {
            idx: 10,
            name: "數位發展處",
            title: "",
            managers:[
                {role:"主管",name:"康文龍",title:"處長"}
            ],
            core: [
                "資訊應用系統之規劃、開發及維護",
                "資料庫之規劃、建置與維運事項",
                "地理資訊圖資規劃、分析與建置",
                "資訊安全管理作業之規劃及辦理",
                "資訊與網路設備之規劃及維運管理",
            ],
        },
    ]);

    // 初始化資料
    function setDepartmentList(data) {
        departmentList.value = data;
    }

    // 新增部門
    function addDepartment(department) {
        department.idx = departmentList.value.length + 1; // 自動生成 idx
        departmentList.value.push(department);
    }

    // 編輯部門
    function editDepartment(index, updatedDepartment) {
        departmentList.value[index] = { ...updatedDepartment };
    }

    // 刪除部門
    function deleteDepartment(index) {
        departmentList.value.splice(index, 1);
    }

    // 更新排序
    function updateOrder(newOrder) {
        departmentList.value = [...newOrder];
    }
    return { departmentList, setDepartmentList, addDepartment, editDepartment,deleteDepartment, updateOrder };
});
