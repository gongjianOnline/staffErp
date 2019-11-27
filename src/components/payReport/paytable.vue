<!--
    内容:出勤统计
    时间:2019-11-26
-->
<template>
    <div class="">
        <!-- 头部 -->
        <div class="header_div">
            <div class="header_left_flex">
                <div class="header_title">title</div>
                <div>
                    <el-form :inline="true" class="demo-form-inline">
                        <el-form-item label="月份">
                            <el-date-picker
                                v-model="month"
                                type="month"
                                placeholder="选择月">
                            </el-date-picker>
                        </el-form-item>
                        <el-form-item>
                            <el-button  round 
                                        icon="el-icon-download"
                                        @click="exportBtn">导出</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
            <div class="input_div">
                <el-input   prefix-icon="el-icon-search" 
                            v-model="lookup" 
                            placeholder="请输入要查找的内容">
                </el-input>
            </div>
        </div>

        <!-- 工资报表 -->
        <div class="ReportformTable">
            <el-table
                v-if="IFexport"
                :data="ReportformTable.slice((sliceNum-1)*10,sliceNum*10)"
                :row-class-name="rowClass"
                style="width: 100%">
                <el-table-column
                    prop="department"
                    label="部门"
                    align="center"
                    fixed
                    width="">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="姓名"
                    align="center"
                    fixed 
                    width="">
                </el-table-column>
                <el-table-column
                    prop="Attendance"
                    align="center"
                    width="100"  
                    label="应出勤天数">
                </el-table-column>
                <el-table-column
                    prop="leave"
                    align="center" 
                    label="请假天数">
                </el-table-column>
                <el-table-column
                    prop="actualdays"
                    align="center"
                    width="110"
                    label="实际出勤天数">
                </el-table-column>
                <el-table-column
                    prop="basicwages"
                    align="center"
                    label="基本工资">
                </el-table-column>
                <el-table-column
                    prop="Journal"
                    align="center"
                    label="岗位工资">
                </el-table-column>
                <el-table-column
                    prop="Shouldwages"
                    align="center"
                    label="应发工资">
                </el-table-column>
                <el-table-column
                    prop="performance"
                    align="center"
                    label="效绩工资">
                </el-table-column>
                <el-table-column
                    prop="Violation"
                    align="center"
                    label="违规扣款">
                </el-table-column>
                <el-table-column
                    prop="Insurance"
                    align="center"
                    label="社保扣款">
                </el-table-column>
                <el-table-column
                    prop="Allday"
                    align="center"
                    label="全勤">
                </el-table-column>
                <el-table-column
                    prop="Overtime"
                    align="center"
                    label="加班天数">
                </el-table-column>
                <el-table-column
                    prop="Overtimepay"
                    align="center"
                    label="加班费">
                </el-table-column>
                <el-table-column
                    prop="Other"
                    align="center"
                    label="其他">
                </el-table-column>
                <el-table-column
                    prop="Actual"
                    align="center"
                    label="实发工资">
                </el-table-column>
                <el-table-column
                    label="操作"
                    align="center"
                    width="">
                    <template slot-scope="scope">
                        <el-button
                            icon="el-icon-edit"
                            size="mini"
                            class="table_button"
                            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>

            <!-- 分页器 -->
            <div class="pagina_left" v-if="IFexport" >
                <el-pagination
                    layout="prev, pager, next"
                    @current-change="handleCurrentChange"
                    :total="ReportformTable.length">
                </el-pagination>
            </div>

            <!-- 导出动画 -->
            <div v-if="!IFexport" 
                 :class="[{'sucesscolor':ifstate,'errorcolor':!ifstate},export_Div]">
                <div>
                    <el-progress type="circle" 
                                 :percentage="percentage" 
                                 ></el-progress>
                </div>
                <div>
                    <i :class="statusicon"></i>
                    {{statusText}}
                </div>
            </div>

        </div>




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
export default {
    components:{},
    props:{},
    data(){
        return {
            month:"",
            lookup:"",
            /**表格 */
            ReportformTable:[
                {
                    department:"test",
                    name:"test",
                    Attendance:"test",
                    leave:"test",
                    actualdays:"test",
                    basicwages:"test",
                    Journal:"test",
                    Shouldwages:"test",
                    performance:"test",
                    Violation:"test",
                    Insurance:"test",
                    Allday:"test",
                    Overtime:"test",
                    Overtimepay:"test",
                    Other:"test",
                    Actual:"test",
                }
            ],
            /**分页参数 */
            sliceNum:1,
            //导出动画
            IFexport:true,
            ifstate:false,
            percentage:10,
            statusType:"",
            statusicon:"el-icon-loading",
            statusText:"正在导出中",
        }
    },
    watch:{},
    computed:{},
    created(){},
    mounted(){},
    methods:{
        handleEdit(index,row){
            this.$session.set("pay_row",row)
            this.$router.push({
                name:'edit_pay'
            })
        },

        //表格样式
        rowClass(row){
            if(row.rowIndex % 2 !== 0){
                return "rowtableColor"
            }
        },
        //分页器变化监听
        handleCurrentChange(val){
             this.sliceNum =  val  
        },
        //导出动画
        exportBtn(){
            this.IFexport = false;
            this.ifstate = false;
            this.percentage = 10 ;
            this.statusType = "";
            this.statusicon = "el-icon-loading" ;
            this.statusText = "正在导出中";
            var state = null;
            var timer = setInterval(()=>{
				if( this.percentage > 80){
                    this.percentage = 100
                    this.ifstate = true
                    this.statusType = "success";
                    this.statusicon = "el-icon-success"
                    this.statusText = "导出成功"
                    state = setTimeout(()=>{
                        this.IFexport = true;
                    },3000)
                    clearInterval(timer)
				}else{
					let num = parseInt(Math.random()*(20-5+1)+10);
					this.percentage += num
				}	
            },2000);
            clearTimeout(state)
        }
    },
    
}
</script>
<style scoped>
.header_div{
    display: flex;
    justify-content: space-between;
}
.header_left_flex{
    display: flex;
    justify-content: space-between;
    width: 40%;
}
.header_title{
    height: 40px;
    line-height: 40px;
}
.el-button{
    background: rgba(255,255,255,0.1);
    border: 1px solid #0062ef;
    color: #0062ef;
}
.el-button:hover{
    background: #0062ef;
    color:#fff;
    box-shadow: 0 0 5px #0062ef
}
.input_div >>> .el-input__inner{
    background: rgba(0,0,0,0);
    border: 2px solid #0062ef;
    border-top: none;
    border-left: none;
    border-right: none;
}
.input_div >>> .el-input__inner:focus{
    background: rgba(255,255,255,0.5);
}
.input_div >>> .el-input__prefix{
    color: #0062ef;
    font-size: 18px;
}
.demo-form-inline >>> .el-input__inner{
    border: none;
    opacity: 0.4;
}
.demo-form-inline >>> .el-input__inner:focus{
    opacity: 0.8;
}

/**出勤表格 */
.ReportformTable{
    margin-top: 20px;
    padding: 20px;
    background: #fff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
}
.table_button{
    border: none
}
.table_button:hover{
    background: rgba(255,255,255,0);
    color: #0062ef;
    box-shadow: none
}
.pagina_left{
    text-align: right;
    margin-top: 10px;
}

/**导出动画 */
.export_Div{
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction:column ;
    justify-content: center;
}
.sucesscolor{
    color:#67C23A
}
.errorcolor{
    color:#409EFF
}


</style>