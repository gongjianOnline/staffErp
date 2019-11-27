<!--
    内容:员工编辑或添加
    时间:2019-11-25
-->
<template>
    <div class="">
        <div class="title_div">title</div>
        <!-- form -->
        <div class="form_div">
            <div class="form_title">   
                <i class="el-icon-document"></i>
                基本信息
            </div>
            <el-form :inline="true" 
                     :model="formData"
                     :rules="rules" 
                      ref="formData1"
                     :label-width="labelwidth"
                     class="demo-form-inline ">
                <el-form-item label="姓名" prop="name" class="form_left">
                    <el-input v-model="formData.name" placeholder="审批人"></el-input>
                </el-form-item>
                <el-form-item label="工号" prop="jobnum" class="form_left">
                    <el-input v-model="formData.jobnum" placeholder="审批人"></el-input>
                </el-form-item>
                <el-form-item label="部门" prop="department" class="form_left">
                    <el-input v-model="formData.department" placeholder="审批人"></el-input>
                </el-form-item>
            </el-form>
            <el-form :inline="true" 
                     :model="formData"
                     :label-width="labelwidth"  
                     class="demo-form-inline">
                <el-form-item label="职位" class="form_left">
                    <el-input v-model="formData.position" placeholder="职位"></el-input>
                </el-form-item>
                <el-form-item label="入职时间" class="form_left">
                    <el-date-picker
                        v-model="formData.Entry"
                        type="date"
                        placeholder="入职时间">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="转正时间" class="form_left">
                    <el-date-picker
                        v-model="formData.formal"
                        type="date"
                        placeholder="转正时间">
                    </el-date-picker>
                </el-form-item>
            </el-form>
             <el-form :inline="true" 
                     :model="formData"
                     :label-width="labelwidth"  
                     class="demo-form-inline">
                <el-form-item label="手机" class="form_left">
                    <el-input v-model="formData.phone" placeholder="手机"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" class="form_left">
                    <el-input v-model="formData.mail" placeholder="邮箱"></el-input>
                </el-form-item>
                <el-form-item label="是否签署合同" class="form_left">
                    <el-select v-model="formData.contract" placeholder="请选择">
                        <el-option
                            v-for="item in contractData"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <el-form :inline="true" 
                     :model="formData"
                     :label-width="labelwidth"  
                     class="demo-form-inline">
                <el-form-item label="出生日期" class="form_left">
                    <el-date-picker
                        v-model="formData.birthday"
                        type="date"
                        placeholder="出生日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="籍贯" class="form_left">
                    <el-input v-model="formData.nativeplace" placeholder="籍贯"></el-input>
                </el-form-item>
                <el-form-item label="毕业院校" class="form_left">
                    <el-input v-model="formData.shoole" placeholder="毕业院校"></el-input>
                </el-form-item>
            </el-form>
            <el-form :inline="true" 
                     :model="formData"
                     :label-width="labelwidth"  
                     class="demo-form-inline">
                <el-form-item label="学历" class="form_left">
                    <el-input v-model="formData.education" placeholder="籍贯"></el-input>
                </el-form-item>
                <el-form-item label="所学专业" class="form_left">
                    <el-input v-model="formData.major" placeholder="籍贯"></el-input>
                </el-form-item>
                <el-form-item label="紧急联系人" class="form_left">
                    <el-input v-model="formData.contacts" placeholder="毕业院校"></el-input>
                </el-form-item>
            </el-form>

            <!-- 下班部分 -->
            <div class="wages_form">
                <div class="wages_title_div">
                    <div class="wages_title">
                        <i class="el-icon-tickets"></i>
                        工资信息
                    </div>
                    <div class="wages_hr">
                        <div></div>
                    </div>
                </div>

                <el-form :inline="true" 
                     :model="formData" 
                     :rules="rules"
                     ref="formData2"   
                     class="demo-form-inline">
                    <el-form-item label="银行卡号" prop="cardnum">
                        <el-input v-model="formData.cardnum" placeholder="银行卡号"></el-input>
                    </el-form-item>
                    <el-form-item label="试用期薪资">
                        <el-input v-model="formData.testsalary" placeholder="试用期薪资"></el-input>
                    </el-form-item>
                    <el-form-item label="转正薪资">
                        <el-input v-model="formData.formalsalary" placeholder="转正薪资"></el-input>
                    </el-form-item>
                </el-form>

                <el-form :inline="true" 
                     :model="formData" 
                     :rules="rules"
                     ref="formData3"  
                     class="demo-form-inline">
                    <el-form-item label="基本工资" prop="basic">
                        <el-input v-model="formData.basic" placeholder="银行卡号"></el-input>
                    </el-form-item>
                    <el-form-item label="岗位工资" prop="postwages">
                        <el-input v-model="formData.postwages" placeholder="试用期薪资"></el-input>
                    </el-form-item>
                    <el-form-item label="绩效工资" prop="merits">
                        <el-input v-model="formData.merits" placeholder="转正薪资"></el-input>
                    </el-form-item>
                </el-form>
                <!-- 提交 -->
                <div class="button_div">
                     <el-button type="primary" 
                                round
                                class="button"
                                @click="submitSub('formData1','formData2','formData3')" >保存</el-button>
                </div>
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
                user:"",
                jobnum:"",
                department:"",
                position:"",
                Entry:"",
                formal:"",
                phone:"",
                mail:"",
                contract:"",
                birthday:"",
                nativeplace:"",
                shoole:"",
                education:"",
                major:"",
                contacts:"",
                cardnum:"",
                testsalary:"",
                formalsalary:"",
                basic:"",
                postwages:"",
                merits:"",
            },
            rules:{
                name:[
                    { required: true, message: '请输入姓名', trigger: 'blur' },
                ],
                jobnum:[
                    { required: true, message: '请输入工号', trigger: 'blur' },
                ],
                department:[
                    { required: true, message: '请输入部门名称', trigger: 'blur' },
                ],
                cardnum:[
                    { required: true, message: '请输入银行卡号', trigger: 'blur' }
                ],
                basic:[
                    { required: true, message: '请输入基本工资', trigger: 'blur' }
                ],
                postwages:[
                    { required: true, message: '请输入岗位卡号', trigger: 'blur' }
                ],
                merits:[
                    { required: true, message: '请输入绩效卡号', trigger: 'blur' }
                ],
            },
            //合同状态
            contractData:[
                {
                    value:"1",
                    label:'是'
                },
                {
                    value:"2",
                    label:'否'
                }
            ],

            //高度
            labelwidth:"100px"
        }
    },
    watch:{},
    computed:{},
    created(){},
    mounted(){},
    methods:{
        submitSub(formData1,formData2,formData3){
            this.$refs[formData1].validate((valid1) => {
                if (valid1) {
                    this.$refs[formData2].validate((valid2)=>{
                        if(valid2){
                            this.$refs[formData3].validate((valid3)=>{
                                if(valid3){
                                    alterFun('success','提交成功')
                                }else{
                                    this.alterFun('error','请将必填项先写完整')
                                    return false;
                                }
                            })
                        }else{
                            this.alterFun('error','请将必填项先写完整')
                            return false;
                        }
                    })
                } else {
                    this.alterFun('error','请将必填项先写完整')
                    return false;
                }
            });
        },

        /**模拟弹窗 */
        alterFun(state,text){
            this.$message({
                message: text,
                type: state //success/info/warning/error
            });
        }
    }
    
}
</script>
<style scoped>
.title_div{
    text-align: left;
    font-size: 18px;
    margin: 20px;
}
.form_div{
    padding: 20px;
    background: #fff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
}
.form_title{
    text-align: left;
    color: #0062ef;
    font-size: 18px;
    margin-bottom: 10px;
}
.wages_title_div{
    display: flex;
}
.wages_title{
    text-align: left;
    color: #0062ef;
    font-size: 18px;
    width: 110px;
}
.wages_hr{
    height: 24px;
    width: 100%;
    display: flex;
    align-items: center
}
.wages_hr>div{
    height: 2px;
    width: 100%;
    background: #ccc;
}
.button_div{
    margin-top: 10px;
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
.button{
    width: 23%;
    box-shadow: 0 0 5px #0062ef
}


</style>