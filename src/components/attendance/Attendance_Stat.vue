<!--
    内容:"出勤统计模块",
    时间:"2019-11-26"
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
                            <el-button round icon="el-icon-download" @click="exportBtn">导出</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
            <div class="input_div">
                <el-input prefix-icon="el-icon-search" v-model="lookup" placeholder="请输入要查找的内容">
                </el-input>
            </div>
        </div>

        <!-- 出勤列表 -->
        <div class="AttendanceTable">
            <el-table
                v-if="IFexport"
                :data="AttendanceTable.slice((sliceNum-1)*10,sliceNum*10)"
                :row-class-name="rowClass"
                style="width: 100%">
                <el-table-column
                    prop="name"
                    label="姓名"
                    width="">
                </el-table-column>
                <el-table-column
                    prop="department"
                    label="部门"
                    width="">
                </el-table-column>
                <el-table-column
                    prop="late"
                    label="迟到次数">
                </el-table-column>
                <el-table-column
                    prop="leaveearly"
                    label="早退次数">
                </el-table-column>
                <el-table-column
                    prop="signIn"
                    label="未打卡次数">
                </el-table-column>
                <el-table-column
                    prop="overtime"
                    label="加班天数">
                </el-table-column>
                <el-table-column
                    prop="Journal"
                    label="未写日志次数">
                </el-table-column>
                <el-table-column
                    label="操作"
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
                    :total="AttendanceTable.length">
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
    .el-table .rowtableColor{
        background:#e9f1fe 
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
            AttendanceTable:[
                {
                    name:"test",
                    department:"test",
                    late:"test",
                    leaveearly:"test",
                    signIn:"test",
                    overtime:"test",
                    Journal:"test",
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
            this.$session.set("attend_rowData",row);
            this.$router.push({
                name:'edit_attendance'
            })
        },
        handleCurrentChange(){
            
        },
        /**表格样式 */
        rowClass(row){
            if(row.rowIndex % 2 !== 0){
                return "rowtableColor"
            }
        },
        /**导出动画 */
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
    }
    
    
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
.AttendanceTable{
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