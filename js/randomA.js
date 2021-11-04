new Vue({
        el: '#main',
        data: function() {
            return {
                showList: true,
                showInfo: false,
                showPrint : false,
                showSave: false,
                itemInfo:{},
                list:[
                    {
                        "type":"ChinaType1",
                        "name":"Kentucky Fried Chicken1",
                        "grade":"3.1",
                        "picture":"../images/pic01.jpg",
                        "describe":"This is just an example of descriptive information ahgfwjawkjfawgjvhkfnklmawf"
                    },{
                        "type":"ChinaType2",
                        "name":"Kentucky Fried Chicken2",
                        "grade":"3.5",
                        "picture":"../images/pic02.jpg",
                        "describe":"This is just an example of descriptive information ahgfwjawkjfawgjvhkfnklmawf"
                    },{
                        "type":"ChinaType3",
                        "name":"Kentucky Fried Chicken3",
                        "grade":"3.1",
                        "picture":"../images/pic03.jpg",
                        "describe":"This is just an example of descriptive information ahgfwjawkjfawgjvhkfnklmawf"
                    },{
                        "type":"ChinaType4",
                        "name":"Kentucky Fried Chicken4",
                        "grade":"3.5",
                        "picture":"../images/pic04.jpg",
                        "describe":"This is just an example of descriptive information ahgfwjawkjfawgjvhkfnklmawf"
                    },{
                        "type":"ChinaType5",
                        "name":"Kentucky Fried Chicken5",
                        "grade":"2.7",
                        "picture":"../images/pic05.jpg",
                        "describe":"This is just an example of descriptive information ahgfwjawkjfawgjvhkfnklmawf"
                    },{
                        "type":"ChinaType6",
                        "name":"Kentucky Fried Chicken6",
                        "grade":"3.9",
                        "picture":"../images/pic01.jpg",
                        "describe":"This is just an example of descriptive information ahgfwjawkjfawgjvhkfnklmawf"
                    },{
                        "type":"ChinaType7",
                        "name":"Kentucky Fried Chicken7",
                        "grade":"3.8",
                        "picture":"../images/pic01.jpg",
                        "describe":"This is just an example of descriptive information ahgfwjawkjfawgjvhkfnklmawf"
                    },{
                        "type":"ChinaType8",
                        "name":"Kentucky Fried Chicken8",
                        "grade":"3.2",
                        "picture":"../images/pic01.jpg",
                        "describe":"This is just an example of descriptive information ahgfwjawkjfawgjvhkfnklmawf"
                    },{
                        "type":"ChinaType9",
                        "name":"Kentucky Fried Chicken9",
                        "grade":"3.5",
                        "picture":"../images/pic01.jpg",
                        "describe":"This is just an example of descriptive information ahgfwjawkjfawgjvhkfnklmawf"
                    },{
                        "type":"ChinaType10",
                        "name":"Kentucky Fried Chicken10",
                        "grade":"3.5",
                        "picture":"../images/pic01.jpg",
                        "describe":"This is just an example of descriptive information ahgfwjawkjfawgjvhkfnklmawf"
                    },{
                        "type":"ChinaType11",
                        "name":"Kentucky Fried Chicken11",
                        "grade":"3.5",
                        "picture":"../images/pic01.jpg",
                        "describe":"This is just an example of descriptive information ahgfwjawkjfawgjvhkfnklmawf"
                    },{
                        "type":"ChinaType12",
                        "name":"Kentucky Fried Chicken12",
                        "grade":"3.5",
                        "picture":"../images/pic01.jpg",
                        "describe":"This is just an example of descriptive information ahgfwjawkjfawgjvhkfnklmawf"
                    },{
                        "type":"ChinaType13",
                        "grade":"3.5",
                        "picture":"../images/pic01.jpg",
                        "describe":"This is just an example of descriptive information ahgfwjawkjfawgjvhkfnklmawf"
                    },{
                        "type":"ChinaType14",
                        "name":"Kentucky Fried Chicken14",
                        "grade":"3.5",
                        "picture":"../images/pic01.jpg",
                        "describe":"This is just an example of descriptive information ahgfwjawkjfawgjvhkfnklmawf"
                    },{
                        "type":"ChinaType15",
                        "name":"Kentucky Fried Chicken15",
                        "grade":"3.5",
                        "picture":"../images/pic01.jpg",
                        "describe":"This is just an example of descriptive information ahgfwjawkjfawgjvhkfnklmawf"
                    },{
                        "type":"ChinaType16",
                        "name":"Kentucky Fried Chicken16",
                        "grade":"3.5",
                        "picture":"../images/pic01.jpg",
                        "describe":"This is just an example of descriptive information ahgfwjawkjfawgjvhkfnklmawf"
                    },{
                        "type":"ChinaType17",
                        "name":"Kentucky Fried Chicken17",
                        "grade":"3.5",
                        "picture":"../images/pic01.jpg",
                        "describe":"This is just an example of descriptive information ahgfwjawkjfawgjvhkfnklmawf"
                    },{
                        "type":"ChinaType18",
                        "name":"Kentucky Fried Chicken18",
                        "grade":"3.5",
                        "picture":"../images/pic01.jpg",
                        "describe":"This is just an example of descriptive information ahgfwjawkjfawgjvhkfnklmawf"
                    },{
                        "type":"ChinaType19",
                        "name":"Kentucky Fried Chicken19",
                        "grade":"3.5",
                        "picture":"../images/pic01.jpg",
                        "describe":"This is just an example of descriptive information ahgfwjawkjfawgjvhkfnklmawf"
                    },{
                        "type":"ChinaType20",
                        "name":"Kentucky Fried Chicken20",
                        "grade":"3.5",
                        "picture":"../images/pic01.jpg",
                        "describe":"This is just an example of descriptive information ahgfwjawkjfawgjvhkfnklmawf"
                    },{
                        "type":"ChinaType20",
                        "name":"Kentucky Fried Chicken20",
                        "grade":"3.5",
                        "picture":"../images/pic01.jpg",
                        "describe":"This is just an example of descriptive information ahgfwjawkjfawgjvhkfnklmawf"
                    },{
                        "type":"ChinaType21",
                        "name":"Kentucky Fried Chicken21",
                        "grade":"3.5",
                        "picture":"../images/pic01.jpg",
                        "describe":"This is just an example of descriptive information ahgfwjawkjfawgjvhkfnklmawf"
                    },
                ]
                ,

            }
        },
        methods:{
            // 返回上一层
            rollBackBtn(){
                this.showList = true;
                this.showInfo = false;
                this.showPrint = false;
            },
            rollBackPrintBtn(){
                this.showInfo = true;
                this.showPrint = false;
                this.showList = false;
                this.itemInfo = item;
            },
            showInfoBtn(item){
                this.showInfo = true;
                this.showPrint = false;
                this.showList = false;
                this.itemInfo = item;
            },
            showSaveBtn(){
                this.showSave = true
            },
            showPrintBtn(){
                this.showPrint = true;
                this.showList = false;
                this.showInfo = false;
            }
        },
        created(){

        }
    })