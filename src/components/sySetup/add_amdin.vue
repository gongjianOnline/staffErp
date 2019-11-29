<!--
    内容:添加管理员
    时间:s2019-11-27
-->
<template>
    <div class="">
        <!-- 头部 -->
        <div class="title_div">
            新增管理员
        </div>
        <!-- 表单 -->
        <div class="form_div">
            <div class="form_title">
                <i class="el-icon-document"></i>
                账号信息
            </div>

            <el-form :inline="true" 
                     :model="formData"
                     label-width="80px"
                     ref="ruleForm"
                     :rules="rules"
                     class="demo-form-inline">
                <el-form-item   label="姓名" 
                                prop="name" 
                                class="form_left">
                    <el-input v-model="formData.name"></el-input>
                </el-form-item>
                <el-form-item   label="工号" 
                                prop="job" 
                                class="form_left">
                    <el-input v-model="formData.job"></el-input>
                </el-form-item>
                <el-form-item   label="密码" 
                                prop="paw" 
                                class="form_left">
                    <el-input v-model="formData.paw"></el-input>
                </el-form-item>
            </el-form>
            <el-form :inline="true" 
                     :model="formData"
                     label-width="80px" 
                     class="demo-form-inline">
                <el-form-item   label="手机" 
                                class="form_left">
                    <el-input v-model="formData.phone"></el-input>
                </el-form-item>
                <el-form-item   label="状态" 
                                class="form_left">
                    <el-switch
                        v-model="formData.state"
                        active-text="停用"
                        inactive-text="启用">
                    </el-switch>
                </el-form-item>
                <el-form-item label=""></el-form-item>
            </el-form>
            <!-- 分割线 -->
            <div class="div_hr">   
                <div class="hr"></div>
            </div>

            <!-- 权限设置 -->
            <div class="power_div">
                <div class="power_title">
                    <i class="el-icon-set-up"></i>
                    权限设置
                </div>

                <div> 
                    <div class="checkAll_div">
                        <el-checkbox 
                            @change="handleCheckAllChange"
                            v-model="checkAll">
                            所有权限
                        </el-checkbox>
                    </div>  
                    <div v-for="(tiem,index) in cities"
                         class="checkbox_div"   
                         :key="index">
                        <div class="power_title color">
                            {{tiem.title}}
                        </div>
                        <div class="checkbox_div">
                            <el-checkbox-group 
                                v-model="checkedCities">
                                    <el-checkbox 
                                        v-for="(child,index) in tiem.childs" :label="child.value" 
                                        :key="index">
                                        {{child.lable}}
                                    </el-checkbox>
                            </el-checkbox-group>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 保存 -->
            <div class="margin">
                <el-button  type="primary" 
                            round
                            class="button">保　　　存</el-button>
            </div>

            



        </div>

    </div>
</template>

<script>
export default {
    components:{},
    props:{},
    data(){
        return {
            formData:{
                name:"",
                job:"",
                paw:"",
                phone:"",
                state:false
            },
            rules:{
                name:[
                    { required: true, message: '请输入姓名', trigger: 'blur' },
                ],
                job:[
                    { required: true, message: '请输入工号', trigger: 'blur' },
                ],
                paw:[
                    { required: true, message: '请输入密码', trigger: 'blur' },
                ],
            },

            checkAll:false,
            checkedCities:[],
            cities:[
                {
                    title:"首页",
                    childs:[
                        {
                            value:"1",
                            lable:'数据统计'
                        }
                    ]
                },
                {
                    title:"员工管理",
                    childs:[
                        {
                            value:"2",
                            lable:'查看'
                        },
                        {
                            value:"3",
                            lable:'编辑'
                        },
                        {
                            value:"4",
                            lable:'新增'
                        },
                        {
                            value:"5",
                            lable:'删除'
                        },
                        {
                            value:"6",
                            lable:'批量删除'
                        },
                        {
                            value:"7",
                            lable:'导出'
                        },
                        {
                            value:"8",
                            lable:'搜索'
                        }
                    ]
                },
                {
                    title:"出勤统计",
                    childs:[
                        {
                            value:"9",
                            lable:"查看",
                        },
                        {
                            value:"10",
                            lable:"编辑",
                        },
                        {
                            value:"11",
                            lable:"导出",
                        },
                        {
                            value:"12",
                            lable:"搜索",
                        }
                    ]
                },
                {
                    title:"工资报表",
                    childs:[
                        {
                            value:"13",
                            lable:"查看",
                        },
                        {
                            value:"14",
                            lable:"编辑",
                        },
                        {
                            value:"15",
                            lable:"导出",
                        },
                        {
                            value:"16",
                            lable:"搜索",
                        }
                    ]
                },
                {
                    title:"管理员管理",
                    childs:[
                        {
                            value:"17",
                            lable:'查看'
                        },
                        {
                            value:"18",
                            lable:'编辑'
                        },
                        {
                            value:"19",
                            lable:'新增'
                        },
                        {
                            value:"20",
                            lable:'删除'
                        },
                        {
                            value:"21",
                            lable:'批量删除'
                        },
                        {
                            value:"22",
                            lable:'导出'
                        },
                        {
                            value:"23",
                            lable:'搜索'
                        }
                    ]
                }

            ],
            
        }
    },
    watch:{},
    computed:{},
    created(){},
    mounted(){},
    methods:{
        handleCheckAllChange(val){
            this.checkAll = val;
            if(val){
                let data = [];
                for(let i=0;i<this.cities.length;i++){
                    for(let j=0;j<this.cities[i].childs.length;j++){
                        data.push(this.cities[i].childs[j].value)
                    }
                };
                this.checkedCities = data
            } else {
                this.checkedCities = []
            } 
        }
    },
    
}
</script>
<style scoped>
.title_div{
    font-size: 20px;
    margin: 20px;
    text-align: left;
}
.form_div{
    background: #fff;
    padding: 10px 0px 10px 0px;
}
.form_title{
    color:#0062ef;
    text-align: left;
    font-size: 18px;
    margin-left: 20px;
    margin-bottom: 20px;
}

.demo-form-inline{
    display: flex;
    justify-content: space-around;  
}
.form_left{
    text-align: left;
}
.el-form-item{
    width: 320px;
}
.div_hr{
    width: 100%;
    height: 4px;
    display: flex;
    align-items: center;
}
.hr{
    width: 100%;
    height: 2px;
    background: #eee;
    margin: 0px 20px 0px 20px;
}
/* 权限设置 */
.power_title{
    color:#0062ef;
    text-align: left;
    font-size: 18px;
    margin-left: 20px;
    margin-bottom: 20px;
    margin-top: 20px;
    
}
.color{
    color: #000;
    font-size: 16px;
    font-weight: 600;
}
.checkAll_div{
    text-align: left;
    margin-left: 40px;
}
.checkAll_div >>> .el-checkbox__label{
    font-size: 18px;
}
.checkbox_div{
    text-align: left;
    margin-left: 10%;
    margin-bottom: 10px;
}
.margin{
    margin-top: 20px;
    
}
.button{
    width: 23%;
    box-shadow: 0 0 5px #0062ef
}
</style>