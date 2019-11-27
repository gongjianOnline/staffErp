<!--
    内容:dashboard
    时间:2019-11-24
-->
<template>
    <div class="view-div">
        <!-- 标题 -->
        <div class="left font_20px">title</div>
        <div class="left font_18px margin_top">title</div>

        <!-- 预览 -->
        <div class="statistics_plate">   
            <div class="statistics_chile_div late_backColor">
                <div class="title">late</div>
                <div class="statistics_data">
                    <div class="statistics_data_number">number</div>
                    <el-popover
                        placement="right"
                        width="200"
                        trigger="hover">
                        <el-table :data="lateData" stripe>
                            <el-table-column width="" 
                                             property="name" 
                                             label="姓名"></el-table-column>
                            <el-table-column width="" 
                                             property="frequency" 
                                             label="次数"></el-table-column>
                        </el-table>
                        <div class="statistics_data_details_div" 
                             slot="reference">details</div>
                    </el-popover>
                </div>
            </div>
            <div class="statistics_chile_div goout_backColor">
                <div class="title">goOut</div>
                <div class="statistics_data">
                    <div class="statistics_data_number">number</div>
                    <el-popover
                        placement="right"
                        width="200"
                        trigger="hover">
                        <el-table :data="lateData" stripe>
                            <el-table-column width="" 
                                             property="name" 
                                             label="姓名"></el-table-column>
                            <el-table-column width="" 
                                             property="frequency" 
                                             label="次数"></el-table-column>
                        </el-table>
                        <div class="statistics_data_details_div" 
                             slot="reference">details</div>
                    </el-popover>
                </div>
            </div>
            <div class="statistics_chile_div truancy_backColor">
                <div class="title">Truancy</div>
                <div class="statistics_data">
                    <div class="statistics_data_number">number</div>
                    <el-popover
                        placement="right"
                        width="200"
                        trigger="hover">
                        <el-table :data="lateData" stripe>
                            <el-table-column width="" 
                                             property="name" 
                                             label="姓名"></el-table-column>
                            <el-table-column width="" 
                                             property="frequency" 
                                             label="次数"></el-table-column>
                        </el-table>
                        <div class="statistics_data_details_div" 
                             slot="reference">details</div>
                    </el-popover>
                </div>
            </div>
            <div class="statistics_chile_div Journal_backColor">
                <div class="title">Journal</div>
                <div class="statistics_data">
                    <div class="statistics_data_number">number</div>
                    <el-popover
                        placement="right"
                        width="200"
                        trigger="hover">
                        <el-table :data="lateData" stripe>
                            <el-table-column width="" 
                                             property="name" 
                                             label="姓名"></el-table-column>
                            <el-table-column width="" 
                                             property="frequency" 
                                             label="次数"></el-table-column>
                        </el-table>
                        <div class="statistics_data_details_div" 
                             slot="reference">details</div>
                    </el-popover>
                </div>
            </div>
            <div class="statistics_chile_div clockin_backColor margin_right" >
                <div class="title">clockin</div>
                <div class="statistics_data">
                    <div class="statistics_data_number">number</div>
                    <el-popover
                        placement="right"
                        width="200"
                        trigger="hover">
                        <el-table :data="lateData" stripe>
                            <el-table-column width="" 
                                             property="name" 
                                             label="姓名"></el-table-column>
                            <el-table-column width="" 
                                             property="frequency" 
                                             label="次数"></el-table-column>
                        </el-table>
                        <div class="statistics_data_details_div" 
                             slot="reference">details</div>
                    </el-popover>
                </div>
            </div>
        </div>

        <!-- 走势图 -->
        <div class="echart" id="linech"></div>



    </div>
</template>

<style>
/* 滚动条 */
::-webkit-scrollbar-track-piece { 
    background-color:#f8f8f8;
}
::-webkit-scrollbar {
    width:9px;
    height:9px;
}
::-webkit-scrollbar-thumb {
    background-color:#dddddd;
    background-clip:padding-box;
    min-height:28px;
}
::-webkit-scrollbar-thumb:hover {
    background-color:#bbb;
}
</style>

<script>
var echarts = require("echarts/lib/echarts");
    require("echarts/lib/chart/bar");
    require("echarts/lib/chart/radar");
    require("echarts/lib/component/tooltip");
    require("echarts/lib/component/title");
export default {
    components:{},
    props:{},
    data(){
        return {
            /**详情数据 */
            lateData:[
                {
                    name:"test",
                    frequency:"test"
                },
                {
                    name:"test",
                    frequency:"test"
                },
                {
                    name:"test",
                    frequency:"test"
                },
                {
                    name:"test",
                    frequency:"test"
                }
            ],
            //ecahrts
            linechOp:{
                title:{
                    text:"test"  
                },
                tooltip: {
                    trigger: 'none',
                    axisPointer: {
                        type: 'cross'
                    }
                },
                xAxis: {
                    type: 'category',
                    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月','8月','9月','10月'],
                    name: '月份'
                },
                yAxis: {
                    type: 'value',
                    name:'次数'
                },
                series: [{
                    data: [10, 15, 10, 12, 11, 11, 13,9,10,8],
                    type: 'line',
                    smooth: true
                }]
            }
        }
    },
    watch:{},
    computed:{},
    created(){},
    mounted(){
        this.linechFun()
    },
    methods:{
        linechFun(){
            var myChart = echarts.init(document.getElementById('linech'));
            myChart.setOption(this.linechOp);
        }

    },
    
}
</script>
<style scoped>
.view-div{
    margin-left: 20px;
    margin-top: 10px;

}
.left{
    text-align: left
}
.font_20px{
    font-size: 20px;
}
.font_18px{
    font-size: 16px;
    font-weight: 600;
}
.margin_top{
    margin-top: 10px;
}
.margin_right{
    margin-right: 10px;
}

/**预览统计板块 */
.statistics_plate{
    width: 100%;
    display: flex;
    overflow-x:auto;
}
.statistics_chile_div{
    /* flex布局当子节点从超过或小于父节元素的宽度时, 设置子元素宽高不变*/
    /*flex-shrink不限制,flex-grow不扩充 */
    flex-shrink:0; 
    flex-grow:0;
    width: 237px;
    height: 111px;
    margin: 20px;
    border-radius: 10px;
    color: #fff;
}
.title{
    text-align: left;
    font-size: 20px;
    margin-left: 15px;
    margin-top: 15px;
}
.statistics_data{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
}
.statistics_data_number{
    font-size: 20px;
    font-weight: 600px;
}
.statistics_data_details_div{
    cursor: pointer;
}
/**预览模块颜色 */
.late_backColor{
    background: #7e93f3;
    box-shadow: 0 2px 12px 0 rgba(126,147,243,1);
}
.goout_backColor{
    background: #ff9293;
    box-shadow: 0 2px 12px 0 rgba(255,146,147,1);
}
.truancy_backColor{
    background: #62acda;
    box-shadow: 0 2px 12px 0 rgba(98,172,218,1);
}
.Journal_backColor{
    background: #ab78ce;
    box-shadow: 0 2px 12px 0 rgba(171,120,206,1);
}
.clockin_backColor{
    background: #00cf9d;
    box-shadow: 0 2px 12px 0 rgba(0,207,157,1);
}

/**echarts */
.echart{
    width: 100%;
    height: 400px;
    margin-top: 20px;
}




                
 


</style>