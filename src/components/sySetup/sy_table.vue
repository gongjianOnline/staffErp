<!--
    内容:系统设置
    时间:2019-11-27
-->
<template>
    <div class="">
        <!-- 头部 -->
        <div class="header_div">
            <div class="header_left_flex">
                <div class="header_title">title</div>
                <div>
                    <el-button  round 
                                icon="el-icon-circle-plus" 
                                @click="addbtn()">添加</el-button>
                    <el-button round icon="el-icon-delete-solid">批量删除</el-button>
                </div>
            </div>
            <div class="input_div">
                <el-input prefix-icon="el-icon-search" v-model="input" placeholder="请输入要查找的内容">
                </el-input>
            </div>
        </div>

        <!-- 管理员列表 -->
        <div class="staffTable">
            <el-table
                v-if="IFexport"
                ref="multipleTable"
                :data="staffTable.slice((sliceNum-1)*10,sliceNum*10)"
                :row-class-name="rowClass"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange">
                <el-table-column
                    type="selection"
                    width="55">
                </el-table-column>
                <el-table-column
                    prop="name"
                    align="center"
                    label="姓名"
                    width="">
                </el-table-column>
                <el-table-column
                    prop="jobnum"
                    align="center"
                    label="工号"
                    width="">
                </el-table-column>
                <el-table-column
                    prop="phone"
                    align="center"
                    label="手机">
                </el-table-column>
                <el-table-column
                    prop="state"
                    align="center"
                    label="状态">
                    <template slot-scope="scope">
                        <el-switch
                            v-model="scope.row.state"
                            @change="tableState(scope.row)"
                            active-text="启用"
                            inactive-text="停用">
                        </el-switch>
                    </template>
                </el-table-column>
                <el-table-column
                    label="操作"
                    align="center"
                    width="180">
                    <template slot-scope="scope">
                        <el-button
                            icon="el-icon-edit"
                            size="mini"
                            class="table_button"
                            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button
                            icon="el-icon-delete"
                            size="mini"
                            class="table_button"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>

            <!-- 分页器 -->
            <div class="pagina_left" v-if="IFexport">
                <el-pagination
                    layout="prev, pager, next"
                    @current-change="handleCurrentChange"
                    :total="staffTable.length">
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
            input:"",
            //表格
            multipleTable:[],
            staffTable:[
                {
                    selection:"test",
                    name:"test",
                    jobnum:"test",
                    phone:"test",
                    state:false,
                }
            ],
            //截取的数量
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
    mounted(){
        this.staffTablelength = this.staffTable.length;
    },
    methods:{
        //表格选项
        handleSelectionChange(val){
            this.multipleTable = val;
        },
        //表格启用
        tableState(row){
            console.log(row)
        },
        //新增
        addbtn(){
            this.$router.push({
                name:'add_amdin'
            })
        },
        //编辑
        handleEdit(row,index){
            console.log(index);
            this.$router.push({
                name:"add_amdin"
            })
        },
        //删除
        handleDelete(row,index){
            console.log(row)
            this.staffTable = this.staffTable.slice(index,-1)
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

/**员工表格 */
.staffTable{
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